var names = [
   {
     name: "jsheru",
     sex: "male",
     animal: "gnagare"
   }
]




function CheckAnswers(argument) {
  // body...
  var matches = [];

  for (var i = 0; i < names.length; i++) {
    if (names[i].sex == targetSex && names[i].animal == targetAnimal) {
      matches.push(names[i].name)
    }
  }
}
