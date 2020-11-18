$(document).ready(function(){
	var magic8Ball = {};
	magic8Ball.listOfAnswers = ["yes", "no", "ask again later", "chances look good", "positively", "very doubtful", "outlook not so good", "better not tell you now"];
	
	magic8Ball.askQuestion = function (question) {
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
		$("#answer").fadeIn(4000);
		var randomNum = Math.random() * this.listOfAnswers.length;
		var roundedNum = Math.floor(randomNum);
		var answer = this.listOfAnswers[roundedNum];
		console.log(question, answer);
		$("#answer").text(answer);
		$(resetButton).show();
	};

	$("#answer").hide();
	$(resetButton).hide();

	var onClick = function() {
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

		//wait half a second before showing prompt
	   setTimeout(
	       function() {
	           //show prompt
	           var question = prompt("Ask a yes or no question");
	           $("#8ball").effect( "shake" );
	           magic8Ball.askQuestion(question);
	       }, 500);
	   $(this).hide();
	   //$(resetButton).show();
	};

	var reset = function() {
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
		$("#answer").hide();
		$(this).hide();
	   $(questionButton).show();
	};

	
		$("#questionButton").click( onClick );
		$("#resetButton").click( reset );
});