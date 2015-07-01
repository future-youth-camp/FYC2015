
$(document).ready(function() {

    var gameover = false;

    //Time length
    var timeLength = 3000;

    var colors = ["red", "blue", "yellow", "green", "black", "orange", "white", "pink"]; // alla färger

    var currentColor = "red"; // nuvarande färg

    var timer = setTimeout(function() {
        updateColor();
    }, timeLength);

    var score = 10;

    updateColor();

    function newTimer() {
        window.clearTimeout(timer);
        timer = setTimeout(function() {
            removeScore(10);

            updateColor();
        }, timeLength);
    }

    function updateColor() {
        // console.log(timer);
        // window.clearTimeout(timer);
        // setTimeout(updateColor(), timeLength)

        newTimer();

        console.log("hello");

        // Ladda ny färg
        var tempColor = getColor();
        $("#target").removeClass(currentColor);
        $("#target").addClass(tempColor);
        currentColor = tempColor;
        console.log("The new color is " + currentColor);

        $(".btn").each(function() {
            var _this = $(this);
            _this.attr("class", " ").addClass("btn");
            ranNum = Math.round(Math.random() * (colors.length - 1));
            _this.addClass(colors[ranNum]);
        });
    }


    $(".btn").click(function() {
        console.log("you pressed " + $(this).data("color"));
        if ($(this).data("color") == currentColor) {
            console.log($(this).data("color"));
            addScore(10);

            updateColor();
        } else {
            removeScore(5);
        }
    });

    function getColor() {
        var done = false;
        var ranNum;
        while (!done) {
            ranNum = Math.round(Math.random() * (colors.length - 1));
            if (colors[ranNum] != currentColor) {
                done = true;
            }
        }
        console.log(ranNum);
        return colors[ranNum];
    }

    function addScore(p) {
        score += p;
        $("#score").html(score);
    }

    function removeScore(p) {
        score -= p;
        $("#score").html(score);
        if (score <= -10 && !gameover) {
            gameOver();
        }
    }

    function gameOver() {
        gameover = true;

        window.clearTimeout(timer);

        $(".game").fadeOut(1000);
        //$(".gameOver").hide(0);
        //$(".gameOver").removeClass("hidden");
        //$(".gameOver").fadeIn(2000);

    }
});
