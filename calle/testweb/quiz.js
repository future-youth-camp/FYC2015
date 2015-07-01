var names = [
  {
    name: "Calle",
    key: ["Hund", "Hane", "Medium"]
  },
  {
    name: "Missan",
    key: ["Katt", "Hona", "Obfärg","Liten"]
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
    key: ["Fågel", "Grön", "Hane", "Hona", "Vinte"]
  },
  {
    name: "Gustaf",
    key: ["Katt", "Orange", "Stor", "Hane"]
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
    key: ["Fågel", "Katt", "Hund", "Stor", "Vit", "Hane", "Hona", "Vinte"]
  },
  {
    name: "Dani",
    key: ["Fisk", "Hane", "Stor", "Liten", "Medium", "Vit"]
  },
  {
    name: "Krim",
    key: ["Katt", "Stor", "Medium", "Vit", "Hane"]
  },
  {
    name: "Bruno",
    key: ["Brun", "Stor", "Medium", "Hane"]
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
    key: ["Hona", "Hane", "Obfärg", "Vinte", "Vit", "Grå", "Medium", "Stor", "Liten"]
  },
  {
    name: "Sandy",
    key: ["Hona", "Hane", "Brun", "Orange", "Hund"]
  },
  {
    name: "Glenn",
    key: ["Katt", "Grå", "Medium", "Hane", "Stor"]
  },
  {
    name: "",
    key: ["", "", ""]
  },
  {
    name: "",
    key: ["", "", ""]
  },

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
  var q = [$("#q1"), $("#q2"), $("#q3"), $("#q4"), $("#q5"), $("#q6"), $("#q7")]

  // Svarsalternativen
  var s = [$("[name='s1']"), $("[name='s2']"), $("[name='s3']"), $("[name='s4']"), $("[name='s5']"), $("[name='s6']"), $("[name='s7']")]

  // Rätta svaren
  var answers = ["#s1_4", "#s2_2", "#s3_1", "#s4_3", "#s5_3", "#s6_3", "#s7_3"]

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
      /*  for (var k = 0; k < names[i].key.length; k++) {
          console.log(names[i].key[k]);
          if (targets[j].toLowerCase() == names[i].key[k].toLowerCase()) {
            count++;
            console.log(names[i].name);
            if (count > 1){
              matches.push(names[i].name);
            }
          }
        } */
      console.log(count);
    }

    function printNames(i) {
      for (var j = 0; j < targets.length; j++) {
        for (var k = 0; k < names[i].key.length; k++) {
          if (targets[j].toLowerCase() == names[i].key[k].toLowerCase()) {
            count++;
            if (count > 1){
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

    resCont.html(html);
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
