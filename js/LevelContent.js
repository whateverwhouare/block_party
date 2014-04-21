
var LevelContent = {};

LevelContent.TUTORIAL = "Tutorial";
LevelContent.TWO_D = "Flatland";
LevelContent.THREE_D = "Junkyard";
LevelContent.BIG_PIECES = "Monster Cubes";
LevelContent.SOMA = "Somaverse";

LevelContent.levels = {};

LevelContent.LevelTypetoDescriptor = {};

LevelContent.worlds = {};

LevelContent.allTypes = [];
LevelContent.allTypes.push(LevelContent.TWO_D);
LevelContent.allTypes.push(LevelContent.THREE_D);
LevelContent.allTypes.push(LevelContent.SOMA);
LevelContent.allTypes.push(LevelContent.BIG_PIECES);
LevelContent.allTypes.push(LevelContent.TUTORIAL);

LevelContent.levels[LevelContent.TUTORIAL] = [
		new Level(
			['L_block'],
			'[{"x":0,"y":0,"z":0},{"x":-1,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":0,"y":2,"z":0}]',
			'Use W,A,S,D to move block into wireframe',
			[new Goal('MOVE', 'Use W,A,S,D to move block into wireframe')]
		), new Level(
			['L_block'],
			'[{"x":0,"y":0,"z":0},{"x":-1,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":0,"y":2,"z":0}]',
			'Click and drag a piece to move it',
			[new Goal('MOVE', 'You can also click and drag to move pieces')]
		), new Level(
			['t_block'],
			'[{"x":0,"y":0,"z":9},{"x":-1,"y":0,"z":9},{"x":-2,"y":0,"z":9},{"x":-1,"y":1,"z":9}]',
			'Scroll up and down to zoom in and out',
			[new Goal('MOVE', 'Scroll up and down to zoom in and out')]
		), new Level(
			['Z_block'],
			'[{"x":0,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":-1,"y":1,"z":0},{"x":-1,"y":2,"z":0}]',
			'Press 1 to rotate your piece about the floor',
			[new Goal('ROTATE', '1 Rotates about the floor'),
			new Goal('[{"x":0,"y":2,"z":0},{"x":0,"y":1,"z":0},{"x":-1,"y":2,"z":0},{"x":-1,"y":3,"z":0}]', '')]
		), new Level(
			['L_block'],
			'[{"x":0,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":0,"y":2,"z":0},{"x":1,"y":2,"z":0}]',
			'Rotate with 2',
			[new Goal('ROTATE', '2 rotates counterclockwise'),
			new Goal('[{"x":0,"y":2,"z":-1},{"x":0,"y":3,"z":-1},{"x":0,"y":1,"z":-1},{"x":1,"y":3,"z":-1}]','')]
		), new Level(
			['cross_block'],
			'[{"x":0,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":0,"y":1,"z":1},{"x":0,"y":2,"z":0},{"x":0,"y":1,"z":-1}]',
			"Click and drag to look around. <br> Don't forget to rotate!",
			[new Goal('ROTATE', 'Click and drag to look around')]
		), new Level(
			['L_block'],
			'[{"x":0,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":0,"y":0,"z":1},{"x":0,"y":0,"z":2}]',
			'Combine 1,2,3 to rotate!',
			[new Goal('ROTATE', 'Use 1, 2 to place the shape.'),
			new Goal('[{"x":0,"y":0,"z":2},{"x":0,"y":0,"z":1},{"x":0,"y":0,"z":3},{"x":1,"y":0,"z":1}]', '')]
		), new Level(
			['straight2', 'L_block'],
			'[{"x":0,"y":0,"z":0},{"x":-1,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":-1,"y":1,"z":0},{"x":-1,"y":2,"z":0},{"x":-1,"y":3,"z":0}]',
			'Use SPACE or click to switch control to another block <br> Block being controlled is outlined with green',
			[new Goal('MOVE', 'Use SPACE or click to switch control to another block')]
		), new Level(
			['t_block', 'L_block'],
			'[{"x":0,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":0,"y":2,"z":0},{"x":0,"y":1,"z":-1},{"x":0,"y":0,"z":-1},{"x":0,"y":0,"z":-2},{"x":0,"y":0,"z":-3},{"x":0,"y":1,"z":-3}]',
			'Rotation with 2 follows the camera.  <br>  Try rotating after moving the camera around',
			[new Goal('ROTATE', 'Rotate with 2 after moving the camera around')]

		), new Level(
			['L_block', 'L_block', 'L_block', 't_block', 't_block', 't_block', 'Z_block', 'Z_block', 'Z_block'],
			'[{"x":6,"y":0,"z":-4},{"x":6,"y":1,"z":-4},{"x":6,"y":1,"z":-3},{"x":6,"y":2,"z":-3},{"x":6,"y":0,"z":0},{"x":7,"y":0,"z":0},{"x":7,"y":1,"z":0},{"x":8,"y":1,"z":0},{"x":6,"y":0,"z":3},{"x":5,"y":0,"z":3},{"x":5,"y":0,"z":4},{"x":4,"y":0,"z":4},{"x":-5,"y":0,"z":-7},{"x":-4,"y":0,"z":-7},{"x":-3,"y":0,"z":-7},{"x":-3,"y":1,"z":-7},{"x":1,"y":0,"z":-7},{"x":1,"y":1,"z":-7},{"x":1,"y":2,"z":-7},{"x":1,"y":0,"z":-6},{"x":5,"y":0,"z":-7},{"x":5,"y":1,"z":-7},{"x":5,"y":1,"z":-6},{"x":5,"y":1,"z":-5},{"x":-8,"y":0,"z":-3},{"x":-8,"y":1,"z":-3},{"x":-8,"y":2,"z":-3},{"x":-7,"y":1,"z":-3},{"x":-8,"y":0,"z":0},{"x":-8,"y":1,"z":-1},{"x":-8,"y":1,"z":0},{"x":-8,"y":1,"z":1},{"x":-8,"y":0,"z":3},{"x":-8,"y":0,"z":4},{"x":-8,"y":0,"z":5},{"x":-7,"y":0,"z":4}]',
			'Rotating twice in the same direction will reflect a piece! <br>  Try reflecting pieces with 1 and 2.',
			[new Goal('MOVE', 'Time for some practice!')]
		)
];
LevelContent.LevelTypetoDescriptor[LevelContent.TUTORIAL] = "";
LevelContent.worlds[LevelContent.TUTORIAL] = new World('space2.jpg', 'spaceForest.mp3');

LevelContent.levels[LevelContent.TWO_D] = [
		// 4
		new Level(["cross_block","straight2","straight2"], 
			'[{"x":0,"y":0,"z":0},{"x":-1,"y":0,"z":0},{"x":-2,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":2,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":-1,"y":1,"z":0},{"x":1,"y":1,"z":0},{"x":0,"y":2,"z":0}]'),
		// nate
		new Level(["2_square", "L_block", "L_block", "straight4"],
			'[{"x":0,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":1,"y":1,"z":0},{"x":0,"y":2,"z":0},{"x":1,"y":2,"z":0},{"x":0,"y":3,"z":0},{"x":1,"y":3,"z":0},{"x":-1,"y":3,"z":0},{"x":-1,"y":2,"z":0},{"x":-2,"y":2,"z":0},{"x":-2,"y":3,"z":0},{"x":-2,"y":4,"z":0},{"x":-1,"y":4,"z":0},{"x":-1,"y":5,"z":0},{"x":-2,"y":5,"z":0}]'),
		// nate
		new Level(["L_block", "L_block", "L_block", "L_block"],
			'[{"x":0,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":1,"y":1,"z":0},{"x":0,"y":2,"z":0},{"x":1,"y":2,"z":0},{"x":0,"y":3,"z":0},{"x":1,"y":3,"z":0},{"x":-1,"y":2,"z":0},{"x":-1,"y":3,"z":0},{"x":-2,"y":2,"z":0},{"x":-2,"y":3,"z":0},{"x":0,"y":4,"z":0},{"x":1,"y":4,"z":0},{"x":0,"y":5,"z":0},{"x":1,"y":5,"z":0}]'),
		//nate
		new Level(["t_block", "t_block", "cross_block", "cross_block"],
			'[{"x":-2,"y":0,"z":-1},{"x":-1,"y":0,"z":-1},{"x":0,"y":0,"z":-1},{"x":-1,"y":1,"z":-1},{"x":-2,"y":1,"z":-1},{"x":-2,"y":2,"z":-1},{"x":-1,"y":2,"z":-1},{"x":-2,"y":3,"z":-1},{"x":-3,"y":2,"z":-1},{"x":0,"y":1,"z":-1},{"x":0,"y":2,"z":-1},{"x":0,"y":3,"z":-1},{"x":1,"y":2,"z":-1},{"x":-1,"y":3,"z":-1},{"x":-1,"y":4,"z":-1},{"x":0,"y":4,"z":-1},{"x":-2,"y":4,"z":-1},{"x":-1,"y":5,"z":-1}]'),
		//nate 
		new Level(["Z_block", "cross_block", "cross_block", "L_block", "L_block"], 
			'[{"x":-3,"y":0,"z":0},{"x":-3,"y":1,"z":0},{"x":-3,"y":2,"z":0},{"x":-2,"y":0,"z":0},{"x":-1,"y":0,"z":0},{"x":-1,"y":1,"z":0},{"x":-1,"y":2,"z":0},{"x":-2,"y":1,"z":0},{"x":0,"y":1,"z":0},{"x":0,"y":2,"z":0},{"x":1,"y":2,"z":0},{"x":1,"y":3,"z":0},{"x":2,"y":3,"z":0},{"x":2,"y":4,"z":0},{"x":3,"y":4,"z":0},{"x":3,"y":3,"z":0},{"x":3,"y":2,"z":0},{"x":4,"y":0,"z":0},{"x":4,"y":1,"z":0},{"x":4,"y":2,"z":0},{"x":3,"y":1,"z":0},{"x":5,"y":1,"z":0}]'),
		//nate
		new Level(["t_block", "t_block", "t_block", "t_block", "t_block", "t_block", "L_block"],
			'[{"x":-1,"y":0,"z":0},{"x":0,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":1,"y":1,"z":0},{"x":1,"y":2,"z":0},{"x":0,"y":2,"z":0},{"x":1,"y":3,"z":0},{"x":-1,"y":1,"z":0},{"x":-1,"y":2,"z":0},{"x":-1,"y":3,"z":0},{"x":0,"y":3,"z":0},{"x":-1,"y":4,"z":0},{"x":-2,"y":4,"z":0},{"x":-3,"y":4,"z":0},{"x":-2,"y":5,"z":0},{"x":1,"y":4,"z":0},{"x":2,"y":4,"z":0},{"x":3,"y":4,"z":0},{"x":2,"y":5,"z":0},{"x":0,"y":4,"z":0},{"x":-1,"y":5,"z":0},{"x":0,"y":5,"z":0},{"x":1,"y":5,"z":0},{"x":-1,"y":6,"z":0},{"x":0,"y":6,"z":0},{"x":1,"y":6,"z":0},{"x":0,"y":7,"z":0}]'),
		// 19
		new Level(["short_L", "L_block", "short_L","short_L", "Z_block"], '[{"x":-2,"y":1,"z":3},{"x":-2,"y":0,"z":3},{"x":-3,"y":0,"z":3},{"x":-1,"y":0,"z":3},{"x":-1,"y":1,"z":3},{"x":0,"y":1,"z":3},{"x":1,"y":1,"z":3},{"x":2,"y":0,"z":3},{"x":2,"y":1,"z":3},{"x":0,"y":2,"z":3},{"x":0,"y":3,"z":3},{"x":0,"y":4,"z":3},{"x":-1,"y":4,"z":3},{"x":-2,"y":4,"z":3},{"x":-2,"y":5,"z":3},{"x":-3,"y":4,"z":3},{"x":-3,"y":5,"z":3}]'),
		// 30
		new Level(["short_L", "2_square", "L_block", "L_block", "Z_block", "straight3", "Y_block"], '[{"x":-1,"y":0,"z":1},{"x":-2,"y":0,"z":1},{"x":-1,"y":1,"z":1},{"x":-1,"y":2,"z":1},{"x":-1,"y":3,"z":1},{"x":0,"y":2,"z":1},{"x":0,"y":3,"z":1},{"x":1,"y":1,"z":1},{"x":1,"y":0,"z":1},{"x":1,"y":2,"z":1},{"x":2,"y":0,"z":1},{"x":-2,"y":5,"z":1},{"x":-1,"y":5,"z":1},{"x":-3,"y":5,"z":1},{"x":-1,"y":4,"z":1},{"x":1,"y":4,"z":1},{"x":1,"y":3,"z":1},{"x":0,"y":4,"z":1},{"x":0,"y":5,"z":1},{"x":2,"y":5,"z":1},{"x":1,"y":5,"z":1},{"x":3,"y":5,"z":1},{"x":0,"y":7,"z":1},{"x":0,"y":8,"z":1},{"x":-1,"y":7,"z":1},{"x":1,"y":7,"z":1},{"x":1,"y":6,"z":1},{"x":-1,"y":6,"z":1}]'),
		// 20
		new Level(["L_block", "Z_block", "cross_block", "Z_block", "t_block"], '[{"x":0,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":1,"y":1,"z":0},{"x":-1,"y":1,"z":0},{"x":1,"y":2,"z":0},{"x":0,"y":2,"z":0},{"x":-1,"y":2,"z":0},{"x":2,"y":2,"z":0},{"x":-2,"y":2,"z":0},{"x":-1,"y":3,"z":0},{"x":0,"y":3,"z":0},{"x":1,"y":3,"z":0},{"x":2,"y":3,"z":0},{"x":3,"y":3,"z":0},{"x":-2,"y":3,"z":0},{"x":-3,"y":3,"z":0},{"x":-2,"y":4,"z":0},{"x":-1,"y":4,"z":0},{"x":0,"y":4,"z":0},{"x":1,"y":4,"z":0},{"x":2,"y":4,"z":0}]'),
		// 1
		new Level(["L_block", "cross_block", "Z_block", "t_block", "cross_block", "L_block", "straight3", "t_block"], 
				'[{"x":0,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":0,"y":2,"z":0},{"x":1,"y":0,"z":0},{"x":1,"y":1,"z":0},{"x":1,"y":2,"z":0},{"x":2,"y":0,"z":0},{"x":2,"y":1,"z":0},{"x":2,"y":2,"z":0},{"x":2,"y":3,"z":0},{"x":3,"y":0,"z":0},{"x":3,"y":1,"z":0},{"x":3,"y":2,"z":0},{"x":3,"y":3,"z":0},{"x":3,"y":4,"z":0},{"x":4,"y":4,"z":0},{"x":4,"y":5,"z":0},{"x":4,"y":6,"z":0},{"x":5,"y":4,"z":0},{"x":5,"y":5,"z":0},{"x":5,"y":6,"z":0},{"x":6,"y":0,"z":0},{"x":6,"y":1,"z":0},{"x":6,"y":2,"z":0},{"x":6,"y":3,"z":0},{"x":6,"y":4,"z":0},{"x":6,"y":5,"z":0},{"x":6,"y":6,"z":0},{"x":7,"y":0,"z":0},{"x":7,"y":1,"z":0},{"x":7,"y":2,"z":0},{"x":7,"y":3,"z":0},{"x":7,"y":4,"z":0}]'),
		// jenshen
		new Level(["t_block", "Z_block", "t_block", "Z_block", "L_block", "L_block", "straight3", "t_block"],
			'[{"x":0,"y":2,"z":0},{"x":0,"y":3,"z":0},{"x":1,"y":2,"z":0},{"x":-1,"y":2,"z":0},{"x":0,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":-1,"y":1,"z":0},{"x":-2,"y":0,"z":0},{"x":-2,"y":1,"z":0},{"x":-1,"y":0,"z":0},{"x":-3,"y":0,"z":0},{"x":2,"y":0,"z":0},{"x":3,"y":0,"z":0},{"x":2,"y":1,"z":0},{"x":1,"y":1,"z":0},{"x":0,"y":4,"z":0},{"x":-1,"y":4,"z":0},{"x":1,"y":4,"z":0},{"x":-1,"y":5,"z":0},{"x":1,"y":5,"z":0},{"x":0,"y":5,"z":0},{"x":2,"y":5,"z":0},{"x":0,"y":6,"z":0},{"x":2,"y":6,"z":0},{"x":1,"y":6,"z":0},{"x":3,"y":6,"z":0},{"x":-2,"y":6,"z":0},{"x":-2,"y":5,"z":0},{"x":-3,"y":6,"z":0},{"x":-1,"y":6,"z":0}]')
];
LevelContent.LevelTypetoDescriptor[LevelContent.TWO_D] = "Shapes with only two dimensions";
LevelContent.worlds[LevelContent.TWO_D] = new World('flatland.jpg', 'flatland.mp3');

LevelContent.levels[LevelContent.BIG_PIECES] = [
		// 5
		new Level(["lock_1","key_1"], '[{"x":0,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":2,"y":0,"z":0},{"x":0,"y":0,"z":1},{"x":1,"y":0,"z":1},{"x":2,"y":0,"z":1},{"x":0,"y":1,"z":0},{"x":1,"y":1,"z":0},{"x":2,"y":1,"z":0},{"x":0,"y":2,"z":0},{"x":1,"y":2,"z":0},{"x":2,"y":2,"z":0},{"x":0,"y":1,"z":1},{"x":2,"y":1,"z":1},{"x":0,"y":2,"z":1},{"x":2,"y":2,"z":1},{"x":1,"y":2,"z":1},{"x":1,"y":1,"z":1},{"x":0,"y":0,"z":2},{"x":0,"y":1,"z":2},{"x":0,"y":2,"z":2},{"x":1,"y":0,"z":2},{"x":1,"y":1,"z":2},{"x":1,"y":2,"z":2},{"x":2,"y":0,"z":2},{"x":2,"y":1,"z":2},{"x":2,"y":2,"z":2}]'),
		// 6
		new Level(["cube_third_1","cube_third_2","cube_third_3"], '[{"x":0,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":1,"y":1,"z":0},{"x":0,"y":2,"z":0},{"x":1,"y":2,"z":0},{"x":-1,"y":1,"z":0},{"x":-1,"y":2,"z":0},{"x":-1,"y":2,"z":-1},{"x":-1,"y":0,"z":-2},{"x":-1,"y":1,"z":-2},{"x":-1,"y":2,"z":-2},{"x":-1,"y":0,"z":-1},{"x":-1,"y":1,"z":-1},{"x":-1,"y":0,"z":0},{"x":0,"y":0,"z":-1},{"x":0,"y":1,"z":-1},{"x":0,"y":2,"z":-1},{"x":0,"y":0,"z":-2},{"x":0,"y":1,"z":-2},{"x":0,"y":2,"z":-2},{"x":1,"y":0,"z":-1},{"x":1,"y":1,"z":-1},{"x":1,"y":2,"z":-1},{"x":1,"y":0,"z":-2},{"x":1,"y":1,"z":-2},{"x":1,"y":2,"z":-2}]'),
		// 7
		new Level(["U_block","U_block","pronged_Z_block","pronged_L_block"], '[{"x":0,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":2,"y":0,"z":0},{"x":0,"y":0,"z":1},{"x":1,"y":0,"z":1},{"x":2,"y":0,"z":1},{"x":0,"y":1,"z":0},{"x":1,"y":1,"z":0},{"x":2,"y":1,"z":0},{"x":0,"y":2,"z":0},{"x":1,"y":2,"z":0},{"x":2,"y":2,"z":0},{"x":0,"y":1,"z":1},{"x":2,"y":1,"z":1},{"x":0,"y":2,"z":1},{"x":2,"y":2,"z":1},{"x":1,"y":2,"z":1},{"x":1,"y":1,"z":1},{"x":0,"y":0,"z":2},{"x":0,"y":1,"z":2},{"x":0,"y":2,"z":2},{"x":1,"y":0,"z":2},{"x":1,"y":1,"z":2},{"x":1,"y":2,"z":2},{"x":2,"y":0,"z":2},{"x":2,"y":1,"z":2},{"x":2,"y":2,"z":2}]'),
		// 8
		new Level(["U_block","short_L","corner_setup", "t_block", "goofy_L"], '[{"x":0,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":2,"y":0,"z":0},{"x":0,"y":0,"z":1},{"x":1,"y":0,"z":1},{"x":2,"y":0,"z":1},{"x":0,"y":1,"z":0},{"x":1,"y":1,"z":0},{"x":2,"y":1,"z":0},{"x":0,"y":2,"z":0},{"x":1,"y":2,"z":0},{"x":2,"y":2,"z":0},{"x":0,"y":1,"z":1},{"x":2,"y":1,"z":1},{"x":0,"y":2,"z":1},{"x":2,"y":2,"z":1},{"x":1,"y":2,"z":1},{"x":1,"y":1,"z":1},{"x":0,"y":0,"z":2},{"x":0,"y":1,"z":2},{"x":0,"y":2,"z":2},{"x":1,"y":0,"z":2},{"x":1,"y":1,"z":2},{"x":1,"y":2,"z":2},{"x":2,"y":0,"z":2},{"x":2,"y":1,"z":2},{"x":2,"y":2,"z":2}]'),
		// 9
		new Level(["2_cubed", "straight3", "short_L", "t_block", "Z_block", "V_block"], '[{"x":0,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":0,"y":0,"z":1},{"x":1,"y":0,"z":1},{"x":0,"y":1,"z":0},{"x":1,"y":1,"z":0},{"x":0,"y":1,"z":1},{"x":1,"y":1,"z":1},{"x":1,"y":0,"z":2},{"x":1,"y":1,"z":2},{"x":0,"y":1,"z":2},{"x":2,"y":1,"z":2},{"x":2,"y":2,"z":2},{"x":0,"y":0,"z":2},{"x":0,"y":2,"z":2},{"x":2,"y":0,"z":2},{"x":2,"y":0,"z":1},{"x":2,"y":1,"z":1},{"x":0,"y":2,"z":1},{"x":1,"y":2,"z":1},{"x":2,"y":2,"z":1},{"x":1,"y":2,"z":2},{"x":2,"y":0,"z":0},{"x":2,"y":1,"z":0},{"x":2,"y":2,"z":0},{"x":1,"y":2,"z":0},{"x":0,"y":2,"z":0}]')
];
LevelContent.LevelTypetoDescriptor[LevelContent.BIG_PIECES] = "Make a cube (Warning: HARD)";
LevelContent.worlds[LevelContent.BIG_PIECES] = new World('monster.jpg', 'chiptune.mp3');

LevelContent.levels[LevelContent.THREE_D] = [
		// 23
		new Level(["straight3", "straight3"], '[{"x":0,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":2,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":0,"y":1,"z":1},{"x":0,"y":1,"z":2}]'),		
		// 21
		new Level(["L_block", "L_block", "Z_block", "Z_block"], '[{"x":0,"y":0,"z":0},{"x":-1,"y":0,"z":0},{"x":-2,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":-2,"y":1,"z":0},{"x":-2,"y":2,"z":0},{"x":-1,"y":1,"z":0},{"x":-1,"y":2,"z":0},{"x":0,"y":1,"z":0},{"x":0,"y":2,"z":0},{"x":1,"y":1,"z":0},{"x":1,"y":2,"z":0},{"x":0,"y":0,"z":1},{"x":0,"y":1,"z":1},{"x":-1,"y":0,"z":1},{"x":-1,"y":1,"z":1}]'),
		// 22
		new Level(["L_block", "Z_block", "t_block"], '[{"x":1,"y":0,"z":-1},{"x":0,"y":0,"z":-1},{"x":-1,"y":0,"z":-1},{"x":-1,"y":0,"z":0},{"x":-1,"y":0,"z":1},{"x":0,"y":0,"z":1},{"x":1,"y":0,"z":1},{"x":1,"y":0,"z":0},{"x":-1,"y":1,"z":0},{"x":0,"y":1,"z":-1},{"x":-1,"y":1,"z":-1},{"x":-1,"y":2,"z":-1}]'),
		// 16
		new Level(["u_block", "u_block", "U_block"],'[{"x":0,"y":1,"z":2},{"x":0,"y":0,"z":2},{"x":0,"y":0,"z":1},{"x":0,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":-1,"y":0,"z":1},{"x":-1,"y":1,"z":1},{"x":0,"y":1,"z":1},{"x":1,"y":1,"z":1},{"x":1,"y":0,"z":1},{"x":-1,"y":0,"z":2},{"x":-1,"y":1,"z":2},{"x":-1,"y":2,"z":2},{"x":-1,"y":0,"z":0},{"x":-1,"y":1,"z":0},{"x":-1,"y":2,"z":0},{"x":-1,"y":2,"z":1}]'),
		// 10
		new Level(["o_block", "u_block", "U_block"], '[{"x":0,"y":0,"z":0},{"x":0,"y":0,"z":1},{"x":0,"y":0,"z":2},{"x":1,"y":0,"z":0},{"x":1,"y":0,"z":1},{"x":1,"y":0,"z":2},{"x":0,"y":1,"z":0},{"x":0,"y":1,"z":1},{"x":0,"y":1,"z":2},{"x":1,"y":1,"z":0},{"x":1,"y":1,"z":1},{"x":1,"y":1,"z":2},{"x":0,"y":2,"z":0},{"x":0,"y":2,"z":1},{"x":0,"y":2,"z":2},{"x":1,"y":2,"z":0},{"x":1,"y":2,"z":1},{"x":1,"y":2,"z":2},{"x":0,"y":3,"z":1},{"x":1,"y":3,"z":1}]'),
		// 11
		new Level(["o_block", "o_block", "u_block", "u_block", "U_block", "U_block", "straight4", "straight4"], '[{"x":-4,"y":0,"z":1},{"x":-3,"y":0,"z":1},{"x":-2,"y":0,"z":1},{"x":-4,"y":0,"z":0},{"x":-3,"y":0,"z":0},{"x":-2,"y":0,"z":0},{"x":-4,"y":1,"z":1},{"x":-3,"y":1,"z":1},{"x":-2,"y":1,"z":1},{"x":-4,"y":1,"z":0},{"x":-3,"y":1,"z":0},{"x":-2,"y":1,"z":0},{"x":-4,"y":2,"z":1},{"x":-3,"y":2,"z":1},{"x":-2,"y":2,"z":1},{"x":-4,"y":2,"z":0},{"x":-3,"y":2,"z":0},{"x":-2,"y":2,"z":0},{"x":-3,"y":3,"z":1},{"x":-3,"y":3,"z":0},{"x":-2,"y":3,"z":1},{"x":-1,"y":3,"z":1},{"x":0,"y":3,"z":1},{"x":-2,"y":3,"z":0},{"x":-1,"y":3,"z":0},{"x":0,"y":3,"z":0},{"x":1,"y":0,"z":1},{"x":2,"y":0,"z":1},{"x":3,"y":0,"z":1},{"x":1,"y":0,"z":0},{"x":2,"y":0,"z":0},{"x":3,"y":0,"z":0},{"x":1,"y":1,"z":1},{"x":2,"y":1,"z":1},{"x":1,"y":1,"z":0},{"x":2,"y":1,"z":0},{"x":3,"y":1,"z":0},{"x":1,"y":2,"z":1},{"x":2,"y":2,"z":1},{"x":3,"y":2,"z":1},{"x":1,"y":2,"z":0},{"x":3,"y":1,"z":1},{"x":2,"y":2,"z":0},{"x":3,"y":2,"z":0},{"x":2,"y":3,"z":0},{"x":2,"y":3,"z":1},{"x":1,"y":3,"z":1},{"x":1,"y":3,"z":0}]'),
		// 24
		new Level(['Z_block', 'Z_block', 'cross_block', 'cross_block', 't_block', 't_block', 'straight3'],
				'[{"x":0,"y":0,"z":0},{"x":-1,"y":0,"z":0},{"x":-2,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":2,"y":0,"z":0},{"x":2,"y":0,"z":1},{"x":1,"y":0,"z":1},{"x":0,"y":0,"z":1},{"x":-1,"y":0,"z":1},{"x":-2,"y":0,"z":1},{"x":-2,"y":0,"z":2},{"x":0,"y":0,"z":2},{"x":2,"y":0,"z":2},{"x":2,"y":1,"z":0},{"x":1,"y":1,"z":0},{"x":0,"y":1,"z":0},{"x":-1,"y":1,"z":0},{"x":-2,"y":1,"z":0},{"x":-2,"y":1,"z":1},{"x":-1,"y":1,"z":1},{"x":0,"y":1,"z":1},{"x":1,"y":1,"z":1},{"x":2,"y":1,"z":1},{"x":2,"y":2,"z":0},{"x":1,"y":2,"z":0},{"x":0,"y":2,"z":0},{"x":-1,"y":2,"z":0},{"x":-2,"y":2,"z":0},{"x":0,"y":3,"z":0}]'),
		// 13
		new Level(["t_block", "t_block", "t_block", "u_block", "u_block", "u_block"], '[{"x":-2,"y":0,"z":0},{"x":-2,"y":1,"z":0},{"x":-2,"y":2,"z":0},{"x":-1,"y":0,"z":0},{"x":-1,"y":1,"z":0},{"x":-1,"y":2,"z":0},{"x":-1,"y":0,"z":-1},{"x":-1,"y":1,"z":-1},{"x":-1,"y":2,"z":-1},{"x":0,"y":0,"z":-1},{"x":0,"y":1,"z":-1},{"x":0,"y":2,"z":-1},{"x":0,"y":0,"z":-2},{"x":0,"y":1,"z":-2},{"x":0,"y":2,"z":-2},{"x":1,"y":0,"z":-2},{"x":1,"y":1,"z":-2},{"x":1,"y":2,"z":-2},{"x":1,"y":0,"z":-3},{"x":1,"y":1,"z":-3},{"x":1,"y":2,"z":-3},{"x":2,"y":0,"z":-3},{"x":2,"y":1,"z":-3},{"x":2,"y":2,"z":-3},{"x":2,"y":0,"z":-4},{"x":2,"y":1,"z":-4},{"x":2,"y":2,"z":-4}]'),
		// 15
		new Level(["L_block", "L_block", "L_block", "L_block", "Z_block", "Z_block", "straight3"], '[{"x":2,"y":0,"z":-5},{"x":2,"y":0,"z":-4},{"x":2,"y":0,"z":-3},{"x":2,"y":1,"z":-5},{"x":2,"y":1,"z":-4},{"x":2,"y":1,"z":-3},{"x":1,"y":0,"z":-3},{"x":1,"y":0,"z":-2},{"x":1,"y":0,"z":-1},{"x":1,"y":1,"z":-3},{"x":1,"y":1,"z":-2},{"x":1,"y":1,"z":-1},{"x":0,"y":0,"z":-1},{"x":0,"y":0,"z":0},{"x":0,"y":0,"z":1},{"x":0,"y":1,"z":-1},{"x":0,"y":1,"z":0},{"x":0,"y":1,"z":1},{"x":-1,"y":0,"z":1},{"x":-1,"y":0,"z":2},{"x":-1,"y":0,"z":3},{"x":-1,"y":1,"z":1},{"x":-1,"y":1,"z":2},{"x":-1,"y":1,"z":3},{"x":-1,"y":2,"z":3},{"x":-1,"y":3,"z":3},{"x":-1,"y":3,"z":4}]'),
		// 14
		new Level(["fat_L_block", "Z_block", "2_cubed", "L_block", "2_square"], '[{"x":-2,"y":0,"z":0},{"x":-2,"y":0,"z":1},{"x":-2,"y":0,"z":2},{"x":-2,"y":0,"z":3},{"x":-2,"y":0,"z":4},{"x":-1,"y":0,"z":0},{"x":-1,"y":0,"z":1},{"x":-1,"y":0,"z":2},{"x":-1,"y":0,"z":3},{"x":-1,"y":0,"z":4},{"x":0,"y":0,"z":0},{"x":0,"y":0,"z":1},{"x":0,"y":0,"z":2},{"x":0,"y":0,"z":3},{"x":0,"y":0,"z":4},{"x":-2,"y":1,"z":0},{"x":-2,"y":1,"z":1},{"x":-2,"y":1,"z":2},{"x":-1,"y":1,"z":0},{"x":-1,"y":1,"z":1},{"x":-1,"y":1,"z":2},{"x":0,"y":1,"z":0},{"x":0,"y":1,"z":1},{"x":0,"y":1,"z":2},{"x":-2,"y":2,"z":0},{"x":-1,"y":2,"z":0},{"x":0,"y":2,"z":0}]'),
		// 31
		new Level(["Y_block", "Y_block", "Z_block", "Y_block", "straight2"], '[{"x":-1,"y":1,"z":1},{"x":0,"y":1,"z":1},{"x":-1,"y":2,"z":1},{"x":-1,"y":0,"z":1},{"x":-2,"y":0,"z":1},{"x":-2,"y":2,"z":1},{"x":-2,"y":1,"z":1},{"x":-3,"y":1,"z":1},{"x":-2,"y":1,"z":2},{"x":-2,"y":1,"z":0},{"x":-1,"y":1,"z":0},{"x":-1,"y":1,"z":2},{"x":0,"y":0,"z":1},{"x":1,"y":0,"z":1},{"x":0,"y":0,"z":2},{"x":-1,"y":0,"z":2},{"x":1,"y":1,"z":1},{"x":1,"y":2,"z":1},{"x":1,"y":1,"z":2},{"x":1,"y":1,"z":0},{"x":1,"y":0,"z":0},{"x":1,"y":0,"z":2},{"x":-1,"y":0,"z":0},{"x":0,"y":0,"z":0}]'),
		// 17
		new Level(["o_block", "cross_block", "goofy_L", "short_L", "straight2"], '[{"x":1,"y":0,"z":2},{"x":1,"y":0,"z":1},{"x":1,"y":0,"z":0},{"x":0,"y":0,"z":2},{"x":0,"y":0,"z":0},{"x":-1,"y":0,"z":0},{"x":-1,"y":0,"z":2},{"x":-1,"y":0,"z":1},{"x":0,"y":1,"z":1},{"x":1,"y":1,"z":1},{"x":-1,"y":1,"z":1},{"x":0,"y":2,"z":1},{"x":0,"y":0,"z":1},{"x":-1,"y":2,"z":0},{"x":-1,"y":2,"z":1},{"x":-1,"y":2,"z":2},{"x":-1,"y":1,"z":0},{"x":0,"y":1,"z":0},{"x":1,"y":2,"z":0},{"x":1,"y":1,"z":0},{"x":0,"y":2,"z":0},{"x":1,"y":2,"z":2},{"x":1,"y":2,"z":1}]'),
		// 12
		new Level(["V_block_b", "Y_block", "straight3", "cross_block"], '[{"x":-2,"y":0,"z":0},{"x":-1,"y":1,"z":0},{"x":0,"y":2,"z":0},{"x":1,"y":1,"z":0},{"x":2,"y":0,"z":0},{"x":-1,"y":0,"z":0},{"x":-1,"y":0,"z":1},{"x":1,"y":0,"z":0},{"x":1,"y":0,"z":1},{"x":0,"y":0,"z":1},{"x":0,"y":0,"z":2},{"x":0,"y":0,"z":0},{"x":0,"y":0,"z":-1},{"x":0,"y":0,"z":-2},{"x":1,"y":0,"z":-1},{"x":-1,"y":0,"z":-1},{"x":0,"y":1,"z":1},{"x":0,"y":1,"z":0},{"x":0,"y":1,"z":-1}]'),
		// 18
		new Level(["V_block", "claw", "short_L", "short_L", "twisted", "L_block"], '[{"x":0,"y":0,"z":0},{"x":-1,"y":0,"z":0},{"x":0,"y":1,"z":0},{"x":0,"y":1,"z":1},{"x":0,"y":0,"z":1},{"x":-1,"y":0,"z":1},{"x":1,"y":0,"z":1},{"x":1,"y":0,"z":0},{"x":0,"y":0,"z":-1},{"x":0,"y":0,"z":2},{"x":-1,"y":0,"z":2},{"x":0,"y":0,"z":3},{"x":1,"y":0,"z":2},{"x":2,"y":0,"z":1},{"x":-2,"y":0,"z":1},{"x":-1,"y":1,"z":0},{"x":-1,"y":1,"z":1},{"x":-1,"y":1,"z":2},{"x":0,"y":1,"z":2},{"x":1,"y":1,"z":0},{"x":1,"y":1,"z":1},{"x":1,"y":1,"z":2},{"x":0,"y":2,"z":1}]')
];
LevelContent.LevelTypetoDescriptor[LevelContent.THREE_D] = "Non-Cube 3D shapes";
LevelContent.worlds[LevelContent.THREE_D] = new World('junkyard.jpg', 'notHeatDeath.mp3');

LevelContent.levels[LevelContent.SOMA] = [
		// 26
		new Level(["Z_block","Z_block","straight2","straight2"], 
			'[{"x":0,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":0,"y":0,"z":-1},{"x":1,"y":0,"z":-1},{"x":1,"y":0,"z":-2},{"x":0,"y":0,"z":-2},{"x":0,"y":1,"z":-2},{"x":1,"y":1,"z":-2},{"x":0,"y":1,"z":0},{"x":1,"y":1,"z":0},{"x":0,"y":1,"z":-1},{"x":1,"y":1,"z":-1}]'),
		// 29
		new Level(["Z_block", "Z_block", "Z_block", "Z_block", "straight2"], 
			'[{"x":0,"y":0,"z":0},{"x":0,"y":0,"z":1},{"x":-1,"y":0,"z":1},{"x":-1,"y":0,"z":0},{"x":-2,"y":0,"z":0},{"x":-2,"y":0,"z":1},{"x":-2,"y":0,"z":2},{"x":-1,"y":0,"z":2},{"x":0,"y":0,"z":2},{"x":0,"y":1,"z":0},{"x":-1,"y":1,"z":0},{"x":-2,"y":1,"z":0},{"x":-2,"y":1,"z":1},{"x":-2,"y":1,"z":2},{"x":-1,"y":1,"z":1},{"x":-1,"y":1,"z":2},{"x":0,"y":1,"z":1},{"x":0,"y":1,"z":2}]'),
		// 28
		new Level(['Z_block', 't_block', 'L_block', 'straight2', 't_block'], 
			'[{"x":0,"y":0,"z":0},{"x":0,"y":0,"z":1},{"x":-1,"y":0,"z":1},{"x":-1,"y":0,"z":0},{"x":-2,"y":0,"z":0},{"x":-2,"y":0,"z":1},{"x":-2,"y":0,"z":2},{"x":-1,"y":0,"z":2},{"x":0,"y":0,"z":2},{"x":0,"y":1,"z":0},{"x":-1,"y":1,"z":0},{"x":-2,"y":1,"z":0},{"x":-2,"y":1,"z":1},{"x":-2,"y":1,"z":2},{"x":-1,"y":1,"z":1},{"x":-1,"y":1,"z":2},{"x":0,"y":1,"z":1},{"x":0,"y":1,"z":2}]'),
		// 25
		new Level(["L_block", "t_block", "t_block", "straight3", "Z_block", "straight2", "L_block", "straight2"], 
				'[{"x":0,"y":0,"z":0},{"x":0,"y":0,"z":1},{"x":0,"y":0,"z":-1},{"x":-1,"y":0,"z":-1},{"x":-1,"y":0,"z":0},{"x":-1,"y":0,"z":1},{"x":-2,"y":0,"z":-1},{"x":-2,"y":0,"z":0},{"x":-2,"y":0,"z":1},{"x":-2,"y":1,"z":-1},{"x":-2,"y":1,"z":0},{"x":-2,"y":1,"z":1},{"x":-1,"y":1,"z":-1},{"x":-1,"y":1,"z":0},{"x":-1,"y":1,"z":1},{"x":0,"y":1,"z":-1},{"x":0,"y":1,"z":0},{"x":0,"y":1,"z":1},{"x":0,"y":2,"z":-1},{"x":0,"y":2,"z":0},{"x":0,"y":2,"z":1},{"x":-1,"y":2,"z":-1},{"x":-1,"y":2,"z":0},{"x":-1,"y":2,"z":1},{"x":-2,"y":2,"z":-1},{"x":-2,"y":2,"z":0},{"x":-2,"y":2,"z":1}]'),
		// 27
		new Level(["L_block", "t_block", "t_block", "straight3", "Z_block", "straight2", "L_block", "straight2"], 
			'[{"x":0,"y":0,"z":0},{"x":0,"y":0,"z":1},{"x":0,"y":0,"z":-1},{"x":-1,"y":0,"z":-1},{"x":-1,"y":0,"z":0},{"x":-1,"y":0,"z":1},{"x":-2,"y":0,"z":-1},{"x":-2,"y":0,"z":0},{"x":-2,"y":0,"z":1},{"x":-2,"y":1,"z":-1},{"x":-2,"y":1,"z":0},{"x":-2,"y":1,"z":1},{"x":-1,"y":1,"z":-1},{"x":-1,"y":1,"z":0},{"x":-1,"y":1,"z":1},{"x":0,"y":1,"z":-1},{"x":0,"y":1,"z":0},{"x":0,"y":1,"z":1},{"x":0,"y":2,"z":-1},{"x":0,"y":2,"z":0},{"x":0,"y":2,"z":1},{"x":-1,"y":2,"z":-1},{"x":-1,"y":2,"z":0},{"x":-1,"y":2,"z":1},{"x":-2,"y":2,"z":-1},{"x":-2,"y":2,"z":0},{"x":-2,"y":2,"z":1}]')
];
LevelContent.LevelTypetoDescriptor[LevelContent.SOMA] = "Traditional Soma Cube shapes";
LevelContent.worlds[LevelContent.SOMA] = new World('somaverse.jpg', 'somaverse.mp3');





