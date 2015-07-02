$(document).ready(function() {

    var q = [
        $(".f1"), $(".f2"), $(".f3"), $(".f4"), $(".f5"), $(".f6"), $(".f7"), $(".f8"), $(".f9"), $(".f10"), $(".f11"), $(".f12"), $(".f13"),
        $(".f14"), $(".f15")
    ];
    var a = ["f1btn", "f2btn2", "f3btn3", "f4btn2", "f5btn", "f6btn4", "f7btn", "f8btn2", "f9btn", "f10btn3", "f11btn2", "f12btn2", "f13btn", "f14btn", "f15btn3"];
    var points = 0;
    var currentQuestion = 0;
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
    $(".resultat").hide();


    $(".btn").on("click", function() {

        if (this.id == a[currentQuestion]) {
            points++;
            hide_current();
            show_nextquestion();
            currentQuestion++;
            if (currentQuestion > q.length-1) {
                show_result();
            }
            document.getElementById(this.id).style.background = "lightgreen";
        } else {
            points = points - 1;
            document.getElementById(this.id).style.background = "red";
        }
    });


    function show_result() {
        $(".resultat").html("Ditt resultat blev: " + points + " av 15 möjliga");
        $(".resultat").slideDown();
        hide_current();
    }

    function hide_current() {
        $(q[currentQuestion]).slideUp();
    }

    function show_nextquestion() {
        console.log(q[currentQuestion+1]);
        $(q[currentQuestion + 1]).slideDown();
    }
})
