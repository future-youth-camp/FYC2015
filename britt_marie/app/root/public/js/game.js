var cards = [];

var currentCard = 0;

var gameIsRunning = false;

$(document).ready(function () {
  $("#newgame").click(function () {
    if (!gameIsRunning) {
      $("#add-cards").toggleClass("hidden");
    } else {
      $(".flip-container").addClass("hidden");
      cards = [];
      gameIsRunning = false;
      currentCard = 0;
      $("#add-cards").removeClass("hidden");
      $("#start").removeClass("hidden");
    }
  });

  $("#next-card").click(function () {
    if (gameIsRunning) {
      updateCard(currentCard);
    } else {
      var card = {};
      card.front = $("#question").val();
      card.back = $("#answer").val();
      cards.push(card);
      $("#question").val("");
      $("#answer").val("");
      console.log(cards);
    }
  });

  $("#start").click(function () {
    $("#add-cards").addClass("hidden");
    $("#game").removeClass("hidden");
    $(".flip-container").removeClass("hidden");
    gameIsRunning = true;
    updateCard(currentCard);
    $("#start").addClass("hidden");
  })
});


function updateCard(index) {
   if (cards.length > index){
    $(".flip-container").removeClass("active")

    setTimeout(function () {
      $("#card-front").html(cards[index].front);
      $("#card-back").html(cards[index].back);
    }, 300);

    currentCard++;
   } else {
     alert("No more cards");
   }
}
