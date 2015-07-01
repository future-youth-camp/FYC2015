$(document).ready( function () {

$(".f2").hide();
$(".f3").hide();
$(".f4").hide();
$(".f5").hide();
$(".f6").hide();
$(".f7").hide();
$(".f8").hide();
$(".f9").hide();
$(".f10").hide();
$(".f11").hide();
$(".f12").hide();
$(".f13").hide();
$(".f14").hide();
$(".f15").hide();

var points
var current_question
current_question = 0
points = 0
  $( ".btn1" ).on( "click", function() {

    if (this.id == "f1btn"){
      points = points + 2
       // Det ska vara en delay här
      document.getElementById(this.id).style.background="lightgreen";
    } else if (this.id == "f1btn2", "f1btn3", "f1btn4" ) {
      points = points - 1
            document.getElementById(this.id).style.background="red";
    }
  });

  var q = [$(".f1"), $(".f2"), $(".f3"), $(".f4"), $(".f5"), $(".f6"), $(".f7"), $(".f8"), $(".f9"), $(".f10"), $(".f11"), $(".f12"), $(".f13"), $(".14"), $(".f15"), ]

function next_question() {
current_question++

}
function hide_current() {
  $(q[current_question]).hide()
}

function show_nextquestion() {
 q[next_question].addClass("show")
}

})
