var names = [
  {
    name: "Calle",
    key: ["Hund", "Hane", "Medium", "Brun", "Orange", "Vit", "Grå", "Obfärg"]
  },
  {
    name: "Missan",
    key: ["Katt", "Hona", "Obfärg","Liten", "Brun", "Orange", "Vit", "Grå"]
  },
  {
    name: "Snöboll",
    key: ["Katt", "Hane", "Hona", "Vinte","Vit"]
  },
  {
    name: "Sten",
    key: ["Fisk", "Grå", "Stor", "Hane", "Hona", "Vinte"]
  },

  {
    name: "Elisia",
    key: ["Fågel", "Obfärg", "Hona", "Vinte", "Orange", "Vit"]
  },
  {
    name: "Gustaf",
    key: ["Katt", "Orange", "Stor", "Hane", "Medium", "Liten", "Gustaf"]
  },
  {
    name: "Frappe",
    key: ["Hund", "Brun", "Medium", "Hane", "Hona", "Vinte"]
  },
  {
    name: "Zelda",
    key: ["Katt", "Hona", "Medium", "Vit"]
  },
  {
    name: "Marshmellow",
    key: ["Fågel", "Katt", "Hund", "Stor", "Vit", "Hane", "Hona", "Vinte", "Mar"]
  },
  {
    name: "Dani",
    key: ["Fisk", "Hane", "Stor", "Liten", "Medium", "Vit", "Brun"]
  },
  {
    name: "Krim",
    key: ["Katt", "Stor", "Medium", "Vit", "Hane", "Grå", "Obfärg"]
  },
  {
    name: "Bruno",
    key: ["Brun", "Stor", "Medium", "Hane", "Hund", "Fisk", "Fågel"]
  },
  {
    name: "Sam",
    key: ["Fågel", "Katt", "Hund", "Medium", "Obfärg", "Hane", "Hona", "Vinte", "Brun", "Orange", "Vit", "Grå"]
  },
  {
    name: "Iben",
    key: ["Fågel", "Medium", "Vit","Obfärg", "Orange", "Vit", "Grå" ,"Hane", "Hona", "Vinte"]
  },
  {
    name: "Quinn",
    key: ["Hona", "Hane", "Obfärg", "Vinte", "Vit", "Grå", "Medium", "Stor", "Liten", "Brun"]
  },
  {
    name: "Sandy",
    key: ["Hona", "Hane", "Brun", "Orange", "Hund"]
  },
  {
    name: "Glenn P Karlsson",
    key: ["Katt", "Grå", "Medium", "Hane", "Stor"]
  },
  {
    name: "Stew",
    key: ["Orange", "Hund", "Katt", "Vit", "Grå", "Hane", "Brun", "Obfärg"]
  },
  {
    name: "Sluggo",
    key: ["Fisk", "Hane", "Hona", "Vinte", "Orange", "Vit", "Grå","Obfärg", "Brun"]
  },
  {
    name: "Sixten",
    key: ["Fisk", "Katt", "Hane", "Obfärg", "Orange", "Vit", "Grå", "Brun"]
  },
  {
    name: "Godzila",
    key: ["Fisk", "Stor", "Liten", "Obfärg", "Hane", "Hona"]
  },
  {
    name: "Doge",
    key: ["Hund", "Toot", "Obfärg", "Vinte"]
  },
  {
    name: "Kiwi",
    key: ["Fågel", "Obfärg", "Hane", "Hona", "Liten", "Medium", "Brun"]
  },
  {
    name: "Mango",
    key: ["Fågel", "Orange", "Liten", "Stor", "Medium", "Hane", "Hona"]
  },
  {
    name: "Tweety",
    key: ["Fågel", "Orange", "Obfärg", "Hona", "Liten"]
  },
  {
    name: "Nemo",
    key: ["Fisk", "Orange", "Hane", "Liten", "Medium"]
  },

  {
    name: "Fenan",
    key: ["Fisk", "Hane", "Hona"]
  },
  {
    name: "Doris",
    key: ["Fisk", "Obfärg", "Hona"]
  },
  {
    name: "Björne",
    key: ["Brun", "Stor", "Liten", "Hund", "Katt", "Liten"]
  },
  {
    name: "Röda Traktorn Rolf",
    key: ["Orange", "Katt", "Hane", "Stor", "Bra"]
  },
  {
    name: "Laser Lennart",
    key: ["Orange", "Katt", "Bra", "Hane"]
  }
]

var count = 0;

var matches = [];

$(document).ready(function(){
  var targets = [];
  // Nästaknappen
  var next_question_btn = $("#next_question")

  // Resultaten
  var current_result = 0
  var result = $("#result")
  var result_container = $("#result_container")

  // Frågorna
  var q = [$("#q1"), $("#q8"), $("#q2"), $("#q3"), $("#q4"), $("#q5"), $("#q6"), $("#q7")]

  // Svarsalternativen
  var s = [$("[name='s1']"), $("[name='s8']"), $("[name='s2']"), $("[name='s3']"), $("[name='s4']"), $("[name='s5']"), $("[name='s6']"), $("[name='s7']")]

  // Rätta svaren
  var answers = ["#s1_4", "#s8_2", "#s2_2", "#s3_1", "#s4_3", "#s5_3", "#s6_3", "#s7_3"]

  // Nuvarande fråga
  var current_question = 0

  // När man klickar på nästa fråga
  next_question_btn.click(function(){
    // Kolla om svaret är rätt
    if(check_answer() === false) {
      return
    }
    console.log(result)
    // Göm nuvarande fråga
    hide_current()
    // Visa nästa fråga
    show_next()
    // Öka nuvarande fråga-räknaren med 1
    increase_question_counter()
    // Om sista, visa resultat
    if(last_question()) {
      render_result()
    }
  })

  function last_question() {
    if(current_question >= q.length) {
      return true
    } else {
      return false
    }
  }

  function render_result() {
    console.log("Rendering");
    for (var i = 0; i < names.length; i++) {
      count = 0;
      printNames(i);

      console.log(count);
    }

    function printNames(i) {
      for (var j = 0; j < targets.length; j++) {
        for (var k = 0; k < names[i].key.length; k++) {
          if (targets[j].toLowerCase() == names[i].key[k].toLowerCase()) {
            count++;
            if (count > 2){
              matches.push(names[i].name);
              return;
            }
          }
        }
      }
    }

    next_question_btn.fadeOut()
    result_container.hide().removeClass("hidden").fadeIn()
    console.log(targets);
    console.log(matches);
    var resCont = $("#result_container");

    var html = "";
    for (var i = 0; i < matches.length; i++) {
      html += '<li class="match">' + matches[i] + '</li>'
    }

    html += '<button class="btn btn-primary" id="restartBtn">Starta om!</button>'

    resCont.html(html);

    $("#restartBtn").click(function () {
      window.location.reload();
    })
  }

  function check_answer() {
    //Standardvärde är falskt,
    var result_given = false
    if($(answers[current_question]).is(":checked")){
      current_result += 1
      result.html(current_result)
      result_given = true
    }
    s[current_question].each(function(){
      if($(this).is(":checked")){
        result_given = true
        targets.push($(this).val());

      }
    })
    return result_given
  }

  function hide_current() {
    q[current_question].fadeOut().addClass("hidden")
  }

  function show_next() {
    if(current_question + 1 < q.length) {
      q[current_question + 1].hide().removeClass("hidden").fadeIn()
    }
  }

  function increase_question_counter() {
    current_question += 1
  }

})
