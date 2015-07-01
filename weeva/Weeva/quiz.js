// array med alla frågor
var questions =
[
	// en fråga
	{
		// frågans text 
		question: "Vilket var det första konsolspelet?",

		// array med möjliga svar
		answers: [
			"a: 1", "b: Ping Pong", "c: Super Mario"
		],

		// index till rätt svar
		correct: 0
	},
	{
		question: "Vilket lag spelar Zlatan i för närvarande?",
		answers: [
			"a: AC Milan", "b: PSG", "c: FC Barcelona"
		],
		correct: 1
	},
	{
		question: "Vem grundade märket Gant?",
		answers: [
			"a: Bernard Gant", "b: Gant Smith", "c: Miranda Gant"
		],
		correct: 0
	},
  {
		question: "Hur mycket pengar fick Fast and Furious 7 in första veckan?",
		answers: [
			"a: 228 miljoner", "b: 905 miljoner", "c: 368 miljoner"
		],
		correct: 2
	},
  {
		question: "När föddes Miley Cyrus?",
		answers: [
			"a: 1992", "b: 1989", "c: 1994"
		],
		correct: 0
	},
  {
		question: "Hur lång var världshistoriens längsta man? ",
		answers: [
			"a: 2,72 m", "b: 2,69 m", "c: 2,82 m"
		],
		correct: 0
	},
  {
		question: "Om man kissar rött, vad har man ätit?",
		answers: [
			"a: Rödbetor", "b: Rabarber", "c: Rött kött"
		],
		correct: 0
	},

{
		question: "Vem vann Melodiestivalen år 2010?",
		answers: [
			"a: Loreen", "b: Marlena Ernman", "c: Anna Bergendahl"
		],
		correct: 2
	},

];


$("document").ready(function () {
	var quizBox = $("#quiz");
	var questionBox = $("#question");
	var answers = $("#answers");

	// Nuvarande fråga
	var currentQuestion = 0;

	// Svar på frågor som användaren angivit
	var userAnswers = [];

	loadQuestion(currentQuestion);

	// Läs in en fråga
	function loadQuestion (index) {

		// Om de finns mågon fråga att läsa in
		if (index < questions.length) {

			// Ändrar frågetexten
			questionBox.html(questions[index].question);

			// Html som ska sättas in i som svarsalternativ
			var ansHtml = "";

			// Skapar an knapp för varje svarsalternativ i ansHtml texten
			for (var i = 0; questions[index].answers.length > i ; i++) {
				ansHtml += '<button class="ansBtn" data-i="' + i + '">' + questions[index].answers[i] + '</button>';
			}

			// Sätter in knapparna på sidan
			answers.html(ansHtml);

			checkInput(index);
		} else {

			// Visa resultat
			showResults();
		}
	}

	// Registrera knapptryckningar
	function checkInput (index) {

		// Lysna på alla svarsknappar
		$(".ansBtn").click(function () {
			var _this = $(this);

			// Lägg till svaret i userAnswers
			userAnswers.push(_this.data("i"));

			// Läs in nästa fråga och öka currentQuestion
			loadQuestion(++currentQuestion);
		});
	}

	// Visa resultat
	function showResults () {

		// Ändra frågetiteln
		questionBox.html("Results");

		// Html som ska sättas in i som resultat
		var resHtml = "";
		for (var i = 0; i < questions.length; i++) {

			// Om svaret är rätt
			if (questions[i].correct == userAnswers[i]) {
				resHtml += '<p class="correct">' + questions[i].answers[userAnswers[i]] + '</p>';
			} else {
				// Om svaret inte är rätt
				resHtml += '<p class="incorrect">' + questions[i].answers[questions[i].correct] + ' var rätt svar. Du klickade på ' + questions[i].answers[userAnswers[i]] + '</p>';
			}
		}

		// Lägg till resHtml på sidan
		answers.html(resHtml);
	}

//

});
