$(document).ready(function(){
	var magic8Ball = {};
	magic8Ball.listOfAnswers = ["yes", "no", "ask again later", "chances look good", "positively", "very doubtful", "outlook not so good", "better not tell you now"];
	magic8Ball.askQuestion = function (question) {
		var randomNum = Math.random() * this.listOfAnswers.length;
		var roundedNum = Math.floor(randomNum);
		var answer = this.listOfAnswers[roundedNum];
		console.log(question, answer);
	};
	//magic8Ball.askQuestion("Will I win the lottery?");
});