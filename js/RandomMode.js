
function RandomMode() {
	Game.call( this );

	this.nextBlockName = getRandomMember(BlockGenerator.randomModeShapes);
	this.mode = Game.MODE_RANDOM;

	LevelContent.worlds[LevelContent.TUTORIAL].loadWorld();
	
	// level stuff
	this.timeLimit = 8;
	this.cubeSize = 5;
	// this.level = RandomMode.levels[0];
	// cubeSize_doc.innerHTML = this.level.cubeSize + "x" + this.level.cubeSize + "x" + this.level.cubeSize;
	
	this.maxCubeSize = 0;

	showElement(randomInfo_doc);
}

RandomMode.prototype = Object.create(Game.prototype);

RandomMode.levels = [
	new RandomLevel(3, 1.5),
	new RandomLevel(4, 3)
];

RandomMode.prototype.getNextBlock = function() {
	var toReturn;
	if (makingLevels) {
		toReturn = BlockGenerator.getBlock("cube", [{x: 0, y: 0, z: 0}], 0xADADAD);
	} else {
		toReturn = BlockGenerator.generate(this.nextBlockName);		
	}
	
	this.currentBlock = toReturn;
	this.currentAliveTime = 0;
	this.nextBlockName = getRandomMember(BlockGenerator.randomModeShapes);
	nextPiece_doc.innerHTML = this.nextBlockName;
	this.createGoalShape();
	return toReturn;
};

RandomMode.prototype.createGoalShape = function() {
	var block = BlockGenerator.generate(this.nextBlockName);
	var children = [];
	this.preview = block.mesh;
	this.preview.toBeRemoved = true;
	this.preview.name = "preview";
	this.preview.matrixAutoUpdate = false;
    this.preview.geometry.verticesNeedUpdate = true;
    this.preview.castShadow = false;
    this.preview.renderDepth = 1.0;
    this.preview.material.opacity = 0;
    this.preview.material.side = THREE.FrontSide;
    this.preview.scale.multiplyScalar(1.003);
    this.preview.updateMatrix();    

    console.log("wireframe:",this.wireframe);
    if (this.wireframe1 != undefined) {
    	scene.remove(this.wireframe1);
    	console.log("removed wireframe");
    }
    if (this.wireframe2 != undefined) {
    	scene.remove(this.wireframe2);
    	console.log("removed wireframe");
    }
    if (this.wireframe3 != undefined) {
    	scene.remove(this.wireframe3);
    	console.log("removed wireframe");
    }
    if (this.wireframe4 != undefined) {
    	scene.remove(this.wireframe4);
    	console.log("removed wireframe");
    }
	var wireframe1 = new THREE.Line( geo2line(block.mesh.geometry), new THREE.LineBasicMaterial( { color: 0x37FDFC } ), THREE.LinePieces );
	var wireframe2 = new THREE.Line( geo2line(block.mesh.geometry), new THREE.LineBasicMaterial( { color: 0x37FDFC } ), THREE.LinePieces );
	
	var wireframe3 = new THREE.Line( geo2line(block.mesh.geometry), new THREE.LineBasicMaterial( { color: 0x37FDFC } ), THREE.LinePieces );
	var wireframe4 = new THREE.Line( geo2line(block.mesh.geometry), new THREE.LineBasicMaterial( { color: 0x37FDFC } ), THREE.LinePieces );

	wireframe1.rotation.set(0,Math.PI/2, 0);
	wireframe2.rotation.set(0,-Math.PI/2, 0);
	this.wireframe1 = wireframe1;
	this.wireframe2 = wireframe2;
	this.wireframe3 = wireframe3;
	this.wireframe4 = wireframe4;

	wireframe1.toBeRemoved = true;
	wireframe2.toBeRemoved = true;
	wireframe3.toBeRemoved = true;
	wireframe4.toBeRemoved = true;


	wireframe1.position.x += STEP_SIZE/2 - STEP_SIZE*12;
	wireframe1.position.y += STEP_SIZE/2 + STEP_SIZE*2;
	wireframe1.position.z += STEP_SIZE/2;	

	wireframe2.position.x += STEP_SIZE/2 - STEP_SIZE*12;
	wireframe2.position.y += STEP_SIZE/2 + STEP_SIZE*2;
	wireframe2.position.z += STEP_SIZE/2;
		
	wireframe3.position.x += STEP_SIZE/2;
	wireframe3.position.y += STEP_SIZE/2 + STEP_SIZE*2;
	wireframe3.position.z += STEP_SIZE/2 + STEP_SIZE*12;
		
	wireframe4.position.x += STEP_SIZE/2;
	wireframe4.position.y += STEP_SIZE/2 + STEP_SIZE*2;
	wireframe4.position.z += STEP_SIZE/2 - STEP_SIZE*12;


	// this.goal = shape;
	// this.goalObject = wireframe;
	// this.goalObject.name = "goalObject";
	// scene.add(this.preview);
	scene.add(wireframe1);
	scene.add(wireframe2);
	scene.add(wireframe3);
	scene.add(wireframe4);

}
RandomMode.prototype.setCount = function(count, x, y, z) {
	var neighborCounts = [];

	if (x == 0 || y == 0 || z == 0) {
		count[x][y][z] = 1;
		return;
	}

	// get minimum count from all 7 neighbouring counts
	neighborCounts.push(count[x][y-1][z-1]);
	neighborCounts.push(count[x][y][z-1]);
	neighborCounts.push(count[x][y-1][z]);
	neighborCounts.push(count[x-1][y-1][z-1]);
	neighborCounts.push(count[x-1][y][z-1]);
	neighborCounts.push(count[x-1][y-1][z]);
	neighborCounts.push(count[x-1][y][z]);
	count[x][y][z] = Math.min.apply(null, neighborCounts) + 1;

}

RandomMode.prototype.computeBoundingBox = function() {
	// calcualtes the volume of the bounding box
	var x_dif = this.max_x - this.min_x;
	var y_dif = this.max_y - this.min_y;
	var z_dif = this.max_z - this.min_z;
	var cube_vol = x_dif * y_dif * z_dif;
	// this.score = Math.round((this.totalVolume)/(cube_vol/Math.pow(STEP_SIZE,3) )*100);

	this.scoreGame();
	// this.score = this.totalVolume * 10 + (Math.pow((this.scoreGame()),3))*100;
	// score_doc.innerHTML = this.score;
	
	if (this.boundingBox) {
		scene.remove(this.boundingBox);
		this.boundingBox.geometry.dispose();
	}

	var geom = new THREE.CubeGeometry(this.max_x - this.min_x, this.max_y - this.min_y, this.max_z - this.min_z);
	this.boundingBox = new THREE.Line( geo2line(geom), Game.box_material, THREE.LinePieces );
	this.boundingBox.toBeRemoved = true;

	this.boundingBox.position.x = (this.max_x + this.min_x) / 2;
	this.boundingBox.position.y = (this.max_y + this.min_y) / 2;
	this.boundingBox.position.z = (this.max_z + this.min_z) / 2;

	this.boundingBox.visible = false;
	scene.add(this.boundingBox);	
};

RandomMode.prototype.scoreGame = function() {
	var numReduced = 0;
	var positions = [];
	var count = [];
	var x_pos, y_pos, z_pos;
	var pos, val;
	var maxCount = 0;

	// establish the 3d array from bounding box and the corresponding empty 3d matrix for dynamic programming
	for (var i = this.min_x / STEP_SIZE, x_pos = 0; i < this.max_x / STEP_SIZE; i++, x_pos++) {
		positions.push([]);
		count.push([]);
		for (var j = this.min_y / STEP_SIZE, y_pos = 0; j < this.max_y / STEP_SIZE; j++, y_pos++) {
			positions[x_pos].push([]);
			count[x_pos].push([]);
			for (var k = this.min_z / STEP_SIZE, z_pos = 0; k < this.max_z / STEP_SIZE; k++, z_pos++) {
				pos = {};
				pos.x = i;
				pos.y = j;
				pos.z = k;
				if (getKeyString(pos) in this.existingBlocks) {
					val = true;
				} else {
					val = false;
				}
				positions[x_pos][y_pos][z_pos] = val;
				count[x_pos][y_pos][z_pos] = 0;
			}
		}
	}

	for (var x = 0; x < positions.length; x++) {
		for (var y = 0; y < positions[0].length; y++) {
			for (var z = 0; z < positions[0][0].length; z++) {
				if (positions[x][y][z]) {
					this.setCount(count, x, y, z);
					if (count[x][y][z] > maxCount) {
						maxCount = count[x][y][z];
					}
					// console.log(x + "," + y + "," + z + ": " + count[x][y][z]);
				} 
			}
		}
	}

	this.maxCubeSize = maxCount;
	return maxCount;
};

RandomMode.prototype.endGame = function() {
	setGameInProgress(false);

	var volumeOverflow;
	var timeScore, volumeScore, perfectBonus;
	var timeRemaining = game.timeLimit*60*1000 - this.gameTime;
	var scoreString = "";

	if (timeElapsed <= 0) {
		endScreen_doc.innerHTML = "<h1>Fail! Try again?</h1><br>"
	} else {
		scoreString = "<div id='scoreBoard'>"

		timeScore = Math.floor(timeRemaining / 1000) * 50;
		scoreString += "<a class='instructions'> + " + timeScore + " (speed)</a> <br>";
		this.score += timeScore;
		
		volumeOverflow = this.totalVolume - this.cubeSize * this.cubeSize * this.cubeSize;
		console.log("extra volume: " + volumeOverflow);
		volumeScore = 100 * volumeOverflow;
		scoreString += "<a class='instructions'> - " + volumeScore + " (extra volume)</a> <br>";
		this.score -= volumeScore;

		if (volumeOverflow == 0) {
			perfectBonus = 2000;
			endScreen_doc.innerHTML += "<a class='instructions'> + " + perfectBonus + " (perfect cube!) </a><br>";
			this.score += perfectBonus;
		} 

		scoreString += "</div>";
		endScreen_doc.innerHTML = "<h1>Final score: " + this.score + "</h1><br>" + scoreString;

	}

	endScreen_doc.innerHTML += '<a href="javascript: void(0)" class="menuItem" onClick="restartLevel()">Play again</a><br>'
		+ backToMenu_string;

	showElement(endScreen_doc);
};

