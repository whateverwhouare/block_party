
function checkAllLoaded(numLoaded) {
	// set number of files loading here
	if (numLoaded >= 2) {
		showElementAndHideNav(menu_doc);
	}
}

function canPlayAudio(a) {
	return !!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));
}

function setPosition(positionFrom, positionTo) {
	positionTo.x = positionFrom.x;
	positionTo.y = positionFrom.y;
	positionTo.z = positionFrom.z;
}

function getPositionsMap(positions) {
    var map = {};

    for (var i = 0; i < positions.length; i++) {
        map[getKeyString(positions[i])] = true;
    }

    return map;
}

function startMovingBlock(meshToMove) {
	var blockToMove;
	var blockIdx;
	var positions;

	// unlighlight and put down the old block
	if (rollOverMesh) {
		game.currentBlock.makeStatic();
		game.addToExisting(game.currentBlock, rollOverMesh.position);
		scene.remove( game.outline );
	}
	rollOverMesh = meshToMove;
	rollOverMesh.material.emissive.setHex( rollOverMesh.currentHex );

	// find which block it is from the mesh
	blockIdx = game.getIndexFromExistingBlocks(meshToMove);
	blockToMove = game.existingBlocks[blockIdx];

	// remove from existingBlocks
	game.currentBlock = blockToMove;
	blockToMove.makeMovable();
	game.existingBlocks.splice(blockIdx, 1);
	positions = blockToMove._getPositions(meshToMove.position, blockToMove.shape);
	for (var i = 0; i < positions.length; i++) {
		delete game.existingBlocks[getKeyString(positions[i])];
	}

	// outline the block
	// game.outline = new THREE.Line( geo2line(game.currentBlock.mesh.geometry), new THREE.LineBasicMaterial( { color: 0xFFFFFF } ), THREE.LinePieces )
	game.outline = new THREE.Mesh( game.currentBlock.mesh.geometry, game.outlineMaterial );
	game.outline.scale.multiplyScalar(1.05);
	game.outline.position = game.currentBlock.mesh.position;
	game.outline.matrix = rollOverMesh.matrix;
	game.outline.rotation.setFromRotationMatrix(rollOverMesh.matrix);
	game.outline.toBeRemoved = true;
	game.outline.name = "outline";

	scene.add( game.outline );
}

function initGame(gameMode) {
	hideAllNav();

	// reset camera position and orbit controls
	camera.position.set(cameraInitPos.x, cameraInitPos.y, cameraInitPos.z);
	controls.center.set(0,0,0);

	// don't check for goal unless told otherwise
	toCheckGoal = false;

	if (gameMode == Game.MODE_LEVEL) {
		game = new LevelMode(true);
	} else if (gameMode == Game.MODE_RANDOM) {
		game = new RandomMode();
		startGame();
	} else if (gameMode == Game.MODE_TUTORIAL) {
		game = new TutorialMode();
		toCheckGoal = true;
	}

	volume_doc.innerHTML = game.totalVolume;
	score_doc.innerHTML = game.score;

}

function startGame() {
	game.getNextBlock();

	rollOverMesh = game.currentBlock.mesh;

	scene.add( rollOverMesh );

	calculateGameBoardOrientation();

	moveTowardsPlayer(rollOverMesh.position);
	
	if (mainMusic) {
		mainMusic.currentTime = 0;
		mainMusic.play();		
	}

	gameInProgress = true;
}

function calculateGameBoardOrientation() {
	if (Math.abs(camera.position.x) > Math.abs(camera.position.z)) {
		if (camera.position.x < 0) {
			gameBoardOrientation = 2;
		} else {
			gameBoardOrientation = 3;
		}
	} else {
		if (camera.position.z < 0) {
			gameBoardOrientation = 4;
		} else {
			gameBoardOrientation = 1;
		}
	}	
}

function intersectToHighlight() {
	var vector = new THREE.Vector3( mouse2D.x, mouse2D.y, 1 );
	projector.unprojectVector( vector, camera );

	raycaster.set( camera.position, vector.sub( camera.position ).normalize() );

	var toIntersect = [];
	for (var i = 0; i < game.existingBlocks.length; i++) {
		toIntersect.push(game.existingBlocks[i].mesh);
	}

	var intersects = raycaster.intersectObjects( toIntersect );
	var idx;

	var onRollover = raycaster.intersectObject( rollOverMesh );
	if ( onRollover.length > 0) {
		MOVINGMAIN = true;

	} else {
		MOVINGMAIN = null;
	}

	if ( intersects.length > 0 ) {
		if ( INTERSECTED != intersects[ 0 ].object ) {
			// rolled from one object onto another

			if ( INTERSECTED ) {
				if ( INTERSECTED.id != rollOverMesh.id ) {
					INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
				}
			}

			// check if we're already moving the intersected object
			if ( intersects[ 0 ].object.id == rollOverMesh.id ) {
				MOVING = true;
				return;
			}

			// only highlight if we can actually move it
			idx = game.getIndexFromExistingBlocks(intersects[ 0 ].object);
			if (!game.canMoveBlock(game.existingBlocks[idx])) {
				intersects[ 0 ].object.material.emissive.setHex( intersects[ 0 ].object.currentHex );
				INTERSECTED = null;
				return;
			}

			INTERSECTED = intersects[ 0 ].object;
			INTERSECTED.material.emissive.setHex( 0xff0000 );

		}

	} else {
		if ( INTERSECTED )  {
			if ( INTERSECTED.id != rollOverMesh.id ) {
				INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
			}
		}

		INTERSECTED = null;
		MOVING = null;

	}		
}

function dragPiece() {
	var vector = new THREE.Vector3( mouse2D.x, mouse2D.y, 1 );
	projector.unprojectVector( vector, camera );

	raycaster.set( camera.position, vector.sub( camera.position ).normalize() );

	var toIntersect = [];
	for (var i = 0; i < game.existingBlocks.length; i++) {
		toIntersect.push(game.existingBlocks[i].mesh);
	}

	var intersects = raycaster.intersectObject( floor.plane );

	if (intersects.length > 0) {
		adjustPosition(intersects[0].point, rollOverMesh.position);
	}	
}

function adjustPosition( rayPosition, piecePosition ) {
	var newPosition;
	var toMove = new THREE.Vector3(0,0,0);
	var moved = null;
	
	newPos = rollOverMesh.position.clone();
	var dX;
	var dZ;
	var xORz;
	var delta = 50;
	dX = rayPosition.x - piecePosition.x;
	dZ = rayPosition.z - piecePosition.z;
	xORz = Math.abs(dX) - Math.abs(dZ);
	if (xORz > 0) {
		if (dX < -delta) {
			moveLeft(1,toMove);
			moved = true;
		}
		else if (dX > delta) {
			moveRight(1,toMove);
			moved = true;
		}
	}
	else if (xORz < 0) {
		if (dZ < -delta) {
			moveForward(1,toMove);
			moved = true;
		}
		else if (dZ > delta) {
			moveBackward(1,toMove);
			moved = true;
		}
	}
	if (moved) {
	    newPos.add(toMove);
	    intersectToHighlight();
	} 

	moveToLegal(game.currentBlock, newPos);
	setPosition(newPos, rollOverMesh.position);
	if (toCheckGoal) {
	    game.checkGoal(moved, false, false);
	}  
}

// draws the normal line for debugging
function drawNormal(origin, normal) {
	var lineGeo = new THREE.Geometry();
	var secondPoint = origin.clone();

	lineGeo.vertices.push(origin.clone());
	secondPoint.add(normal.clone().multiplyScalar(STEP_SIZE / 2));
    lineGeo.vertices.push(secondPoint);
    scene.add(new THREE.Line( lineGeo , new THREE.LineBasicMaterial( { color: 0x000000 } )));
}

// get sorted key string from object propertis' values
function getKeyString(obj) {
	return obj.x + "," + obj.y + "," + obj.z;
}

function getDupVertices(vertices) {
	var i, vertexString, vertex;
	var vertexMap = {};
	var duplicateVertices = {};
	for (i = 0; i < vertices.length; i++) {
		vertex = vertices[i];
		vertexString = vertex.x + "," + vertex.y + "," + vertex.z;
		if (vertexString in vertexMap) {
			duplicateVertices[vertexString] = true;
		} else {
			vertexMap[vertexString] = true;
		}
	}
}

// get random integer between min and max
function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// get random array member
function getRandomMember(array) {
	return array[getRandomInteger(0, array.length-1)];
}

//check for intersection
function hasCollision() {
	var block = rollOverMesh;
    var face, block2, face2;
    var ray = new THREE.Raycaster();
    var collided;
    var sharedNormals;

    console.log(block.position);
    console.log("collided = ");
    for (var i = 0; i < block.geometry.faces.length; i++) {
        face = block.geometry.faces[i];
        facePoint = face.centroid.clone();
        rollOverMesh.localToWorld(facePoint);
        ray.set(facePoint, face.normal.clone());
        collided = ray.intersectObjects( block_list );
        if (collided.length > 0) {
            for (var j = 0; j < collided.length; j++) {
                block2 = collided[j].object.material.color.set(0x7F7C9C);
                console.log(collided[j]);
            }    
        }
    }

	return false;
}

function isDiagonal(point1, point2) {
	var sameNum = 0;
	if (point1.x == point2.x) {
		sameNum++;
	}
	if (point1.y == point2.y) {
		sameNum++;
	}	
	if (point1.z == point2.z) {
		sameNum++;
	}	
	if (sameNum <= 1) {
		return true;
	} else {
		return false;
	}
}

function geo2line( geo ) // credit to WestLangley!
{
    var geometry = new THREE.Geometry();
    var vertices = geometry.vertices;

	for ( i = 0; i < geo.faces.length; i++ ) 
	{
        var face = geo.faces[ i ];
        var a = geo.vertices[ face.a ].clone();
		var b = geo.vertices[ face.b ].clone();
		var c = geo.vertices[ face.c ].clone();

        if ( !isDiagonal(a, b) ) {
        	vertices.push(a, b);
        }
        if ( !isDiagonal(b, c) ) {
        	vertices.push(b, c);
        }
        if ( !isDiagonal(c, a) ) {
        	vertices.push(c, a);
        }
    }

    geometry.computeLineDistances();
    return geometry;
}

function cloneVector(v) {
  	return {x: v.x, y: v.y, z: v.z};
};



function cloneVectors(vectors) {
	var i;
	var newVectors = [];
	for (i = 0; i < vectors.length; i++) {
		newVectors[i] = cloneVector(vectors[i]);
	}
	return newVectors;
}
