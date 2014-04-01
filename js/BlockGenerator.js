
// this part borrowed heavily from https://github.com/fridek/Threejs-Tetris
var BlockGenerator = {};

BlockGenerator.shapes = {
	/* "2D" shapes (involving only 2 axes) */
	// "cube": [{x: 0, y: 0, z: 0}]



	"2_cubed": //8
	[{"x":0,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":0,"y":0,"z":1},{"x":1,"y":0,"z":1},{"x":0,"y":1,"z":0},{"x":1,"y":1,"z":0},{"x":0,"y":1,"z":1},{"x":1,"y":1,"z":1}],

	"two_blocks": //2
	[{x: 0, y: 0, z: 0}, {x: 1, y: 0, z: 0}],

	"L": //4
	[{x: 0, y: 0, z: 0}, {x: 0, y: -1, z: 0}, {x: 0, y: 1, z: 0}, {x: -1, y: -1, z: 0}],

	"2_L": //5 
	[{"x":0,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":1,"y":0,"z":0},{"x":0,"y":2,"z":0},{"x":2,"y":0,"z":0}],
	"donut": //8
	[{"x":1,"y":0,"z":0},{"x":2,"y":0,"z":0},{"x":3,"y":0,"z":0},{"x":1,"y":1,"z":0},{"x":3,"y":1,"z":0},{"x":3,"y":2,"z":0},{"x":1,"y":2,"z":0},{"x":2,"y":2,"z":0}],

	"short_u": //5
	[{"x":0,"y":0,"z":0},{"x":0,"y":0,"z":1},{"x":0,"y":1,"z":1},{"x":0,"y":2,"z":1},{"x":0,"y":2,"z":0}],


    "straight3": // one straight line consisting of 3 blocks
    [{x: 0, y: 0, z: 0}, {x: 0, y: 1, z: 0}, {x: 0, y: -1, z: 0},],

    "straight4": //4
    [{"x":0,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":0,"y":2,"z":0},{"x":0,"y":3,"z":0}],

    "square_flat": //4
    [{x: 0, y: 0, z: 0}, {x: 0, y: 1, z: 0}, {x: 1, y: 0, z: 0}, {x: 1, y: 1, z: 0}],

    "short_T": //4 typical tetris short t 
    [{x: 0, y: 0, z: 0}, {x: 0, y: 1, z: 0}, {x: 1, y: 0, z: 0}, {x: -1, y: 0, z: 0}],

    "v_piece":
    [{"x":-2,"y":0,"z":0},{"x":-1,"y":1,"z":0},{"x":1,"y":1,"z":0},{"x":2,"y":0,"z":0},{"x":0,"y":2,"z":0}],

    "y_piece":
    [{"x":0,"y":0,"z":0},{"x":0,"y":0,"z":1},{"x":-1,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":1,"y":0,"z":-1},{"x":-1,"y":0,"z":-1}],

    "lightning": //4 typical tetris lighting-looking z
    [{x: 0, y: 0, z: 0}, {x: 0, y: -1, z: 0}, {x: 1, y: 0, z: 0}, {x: 1, y: 1, z: 0}],

    "cross_block":
    [{x: 0, y: 0, z: 0}, {x: -1, y: 0, z: 0}, {x: 1, y: 0, z: 0}, {x: 0, y: 0, z: 1}, {x: 0, y: 0, z: -1}],

	"u_shape":
	[{"x":0,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":0,"y":2,"z":0},{"x":2,"y":0,"z":0},{"x":2,"y":1,"z":0},{"x":2,"y":2,"z":0},{"x":1,"y":2,"z":0}],

 	"pronged_Z_shape":
	[{"x":0,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":0,"y":1,"z":1},{"x":0,"y":2,"z":1},{"x":1,"y":0,"z":0},{"x":1,"y":1,"z":0}],	 		

	"pronged_L_shape":
	[{"x":0,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":0,"y":2,"z":0},{"x":0,"y":2,"z":1},{"x":0,"y":2,"z":2},{"x":1,"y":2,"z":1},{"x":1,"y":1,"z":1}],
    
    "lock_piece_1":
    [{"x":0,"y":0,"z":0}, {"x":1,"y":0,"z":0}, {"x":2,"y":0,"z":0}, {"x":0,"y":1,"z":0}, {"x":1,"y":1,"z":0}, {"x":2,"y":1,"z":0}, {"x":1,"y":1,"z":1}, {"x":0,"y":2,"z":0},{"x":1,"y":2,"z":0},{"x":2,"y":2,"z":0}],
    
    "key_piece_2":
    [{"x":0,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":2,"y":0,"z":0},{"x":0,"y":0,"z":1},{"x":1,"y":0,"z":1},{"x":2,"y":0,"z":1},{"x":0,"y":1,"z":0},{"x":1,"y":1,"z":0},{"x":2,"y":1,"z":0},{"x":0,"y":2,"z":0},{"x":1,"y":2,"z":0},{"x":2,"y":2,"z":0},{"x":0,"y":1,"z":1},{"x":2,"y":1,"z":1},{"x":0,"y":2,"z":1},{"x":2,"y":2,"z":1},{"x":1,"y":2,"z":1}],
 	
 	"cube_third_1":
 	[{"x":0,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":0,"y":0,"z":1},{"x":0,"y":1,"z":0},{"x":0,"y":2,"z":0},{"x":1,"y":1,"z":0},{"x":0,"y":0,"z":2},{"x":0,"y":1,"z":1}],
 	
 	"cube_third_2":
	[{"x":0,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":0,"y":2,"z":0},{"x":-1,"y":2,"z":0},{"x":0,"y":0,"z":1},{"x":-1,"y":0,"z":1},{"x":0,"y":1,"z":1},{"x":-1,"y":1,"z":1},{"x":0,"y":2,"z":1},{"x":-1,"y":2,"z":1}],
 	
 	"cube_third_3":
 	[{"x":0,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":1,"y":1,"z":0},{"x":0,"y":2,"z":0},{"x":1,"y":2,"z":0},{"x":-1,"y":1,"z":0},{"x":-1,"y":2,"z":0},{"x":-1,"y":2,"z":-1}],

     "goofy_L":
    [{"x":0,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":0,"y":2,"z":0},{"x":0,"y":0,"z":1},{"x":1,"y":0,"z":1}],

    "corner_setup":
    [{"x":0,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":2,"y":0,"z":0},{"x":2,"y":0,"z":1},{"x":2,"y":0,"z":2},{"x":1,"y":1,"z":0},{"x":2,"y":1,"z":0},{"x":2,"y":1,"z":1}],
    "short_L":
    [{"x":0,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":0,"y":0,"z":1}],

    "v_shape":
    [{"x":-1,"y":0,"z":1},{"x":0,"y":0,"z":1},{"x":1,"y":0,"z":1},{"x":1,"y":0,"z":2},{"x":1,"y":0,"z":3}],

    "claw":
    [{"x":0,"y":0,"z":0},{"x":0,"y":0,"z":1},{"x":1,"y":0,"z":0},{"x":0,"y":1,"z":0}],

    "twisted":
    [{"x":0,"y":0,"z":0},{"x":-1,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":0,"y":1,"z":1}]

};

BlockGenerator.colors = {
	"yellow": 0xffff00, 
	"blue": 0x0000ff, 
	"green": 0x006600,
	"red": 0xFF0000,
	"purple": 0x660099,
	"orange": 0xff9900, 
	"brown": 0x70543b,
	// "grey": 0xADADAD
};

// names of all the blocks in an array
BlockGenerator.allShapes = (function() {
	return Object.getOwnPropertyNames(BlockGenerator.shapes);
})();

BlockGenerator.allColors = (function() {
	return Object.getOwnPropertyNames(BlockGenerator.colors);
})();

BlockGenerator.shapesToColors = (function() {
	var shapeIdx, colorIdx;
	var toReturn = {};

	colorIdx = 0;
	for (shapeIdx = 0; shapeIdx < BlockGenerator.allShapes.length; shapeIdx++) {
		toReturn[BlockGenerator.allShapes[shapeIdx]] = BlockGenerator.allColors[colorIdx];
		colorIdx = (colorIdx + 1) % BlockGenerator.allColors.length;
	}

	return toReturn;
})();

BlockGenerator.getRandomBlock = function() {
	var shapeName = getRandomMember(this.allShapes);
	return this.generate(shapeName);
}

BlockGenerator.lockCentroid = function(point) {
	// magic!!
	if (point % (STEP_SIZE/2) == 0) {
		return Math.floor(point / STEP_SIZE);
	} else {
		return Math.floor((point - STEP_SIZE/2)/STEP_SIZE) + 1;
	}
}

BlockGenerator.getBlock = function(shapeName, originalShape, color) {
	var shape = []; 
	var i, j;
	var geometry, tmpGeometry;
	var material;
	var normal, intersects;
	var blockRaycaster = new THREE.Raycaster();
	var toDelete = [];
	var mesh;
	var block;
	var leftPoint, rightPoint, facePoint;
	var leftKey, rightKey;
	var posMap = getPositionsMap(originalShape);

	// clone the shape.
	for ( i = 0; i < originalShape.length; i++ ) {
		shape[i] = cloneVector(originalShape[i]);
	}

	// merge the different cube geometries together
	geometry = new THREE.Geometry();
	geometry.vertices.push(new THREE.Vector3(0, 0, 0));
	for (i = 0; i < shape.length; i++) {
		tmpGeometry =  new THREE.Mesh(new THREE.CubeGeometry(STEP_SIZE, STEP_SIZE, STEP_SIZE));
		tmpGeometry.position.x = STEP_SIZE * shape[i].x;
		tmpGeometry.position.y = STEP_SIZE * shape[i].y;
		tmpGeometry.position.z = STEP_SIZE * shape[i].z;
		THREE.GeometryUtils.merge(geometry, tmpGeometry);
	}

	// merge them
	geometry.mergeVertices();
	geometry.verticesNeedUpdate = true;

	material = new THREE.MeshLambertMaterial({ color: color, opacity: INIT_OPACITY, transparent: true });
	mesh = new THREE.Mesh(geometry, material);
	mesh.castShadow = true;
	mesh.receiveShadow = true;
	mesh.renderDepth = 0.5;	// must be set to < 1 to avoid z-fighting

	mesh.position.x += STEP_SIZE / 2;
	mesh.position.y += STEP_SIZE / 2;
	mesh.position.z += STEP_SIZE / 2;

	// remove inner faces
	for (i = 0; i < geometry.faces.length; i++) {
		face = geometry.faces[i];
		if (face) {
			normal = face.normal.clone();
			facePoint = face.centroid.clone();

			// get the two positions to either side of the face (using normal)
			facePoint.x = this.lockCentroid(facePoint.x);
			facePoint.y = this.lockCentroid(facePoint.y);
			facePoint.z = this.lockCentroid(facePoint.z);
			leftKey = getKeyString(facePoint);
			rightPoint = new THREE.Vector3();
			rightPoint.x = facePoint.x + Math.abs(normal.x);
			rightPoint.y = facePoint.y + Math.abs(normal.y);
			rightPoint.z = facePoint.z + Math.abs(normal.z);
			rightKey = getKeyString(rightPoint);

			// if both positions exist in the shape, the face is an inner face
			if ((leftKey in posMap) && (rightKey in posMap)) {
				toDelete.push(i);
			}

		}
	}

	// actually delete them
	for (i = 0; i < toDelete.length; i++) {
		delete geometry.faces[toDelete[i]];
	}
	geometry.faces = geometry.faces.filter( function(v) { return v; });
	geometry.elementsNeedUpdate = true;	// update faces

	block = new Block(shapeName, shape, color, mesh, Date.now(), {x:0,y:0,z:0});

	block.moveIntoBounds(block.mesh.position);

	return block;
}

BlockGenerator.generate = function(shapeName) {
    return this.getBlock(shapeName, this.shapes[shapeName], this.colors[this.shapesToColors[shapeName]]);
}


