
function Level(blocks, goalShape, hint, goals) {
	this.blocks = blocks;
	this.goalShape = goalShape;
	this.hint = hint;
	this.goals = goals;
}


function Goal(goalPos, goalText) {
	this.goalPos = goalPos;
	this.goalText = goalText;
}


function copyGoal(goal) {
	var newGoal = {};
	newGoal.goalPos = goal.goalPos;
	newGoal.goalText = goal.goalText;
	return newGoal;
}

// function RandomLevel(cubeSize, timeLimit, newbieScore, expertScore, superStarScore) {
// 	this.cubeSize = cubeSize;
// 	this.timeLimit = timeLimit;
// 	this.newbieScore = newbieScore;
// 	this.expertScore = expertScore;
// 	this.superStarScore = superStarScore;
// }