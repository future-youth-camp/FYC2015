
$(document).ready(function () {
  var colors = ["red", "blue", "yellow", "green", "black", "orange", "brown", "pink" ]; // alla färger

  var currentColor = "red"; // nuvarande färg
  updateColor();


  function updateColor() {
    // Ladda ny färg
    var tempColor = getColor();
    $("#target").removeClass(currentColor);
    $("#target").addClass(tempColor);
    currentColor = tempColor;
    console.log("The new color is " + currentColor);

    $(".btn").each(function () {
      var _this = $(this);

      _this.attr("class", " ").addClass("btn");

      ranNum = Math.round(Math.random()*(colors.length-1));

      _this.addClass(colors[ranNum]);
    })

  }


  $(".btn").click(function () {
    console.log("you pressed " + $(this).data("color"));
    if ($(this).data("color") == currentColor) {
      console.log($(this).data("color"));
      // Ge poäng

      updateColor();
    }
    else {
      // Ge minuspoäng
    }
  });

  function getColor() {
    var done = false;
    var ranNum;
    while(!done){
      ranNum = Math.round(Math.random()*(colors.length-1));
      if (colors[ranNum] != currentColor){
        done = true;
      }
    }
    console.log(ranNum);
    return colors[ranNum];
  }
});
