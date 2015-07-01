var cards = [
  {
    front: "q",
    back: "a"
  }
];

var currentCard = 0;

var gameIsRunning = false;

$(document).ready(function () {
  $("#newgame").click(function () {
    $("#add-cards").removeClass("hidden");
  });

  $("#next-card").click(function () {
    if (gameIsRunning) {
      updateCard(currentCard);
    } else {
      var card = {};
      card.front = $("#question").val();
      card.back = $("#answer").val();
      cards.push(card);
      console.log(cards);
    }
  });

  $("#start").click(function () {
    $("#add-cards").addClass("hidden");
    $("#game").removeClass("hidden");
    gameIsRunning = true;
    updateCard(currentCard);

  })
});


function updateCard(index) {
   if (cards.length > index){
    $(".flip-container").removeClass("active")
    $("#card-front").html(cards[index].front);
    $("#card-back").html(cards[index].back);
    currentCard++;
   } else {
     alert("Done!");
   }
}
