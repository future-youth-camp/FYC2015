var names = [
   {
     name: "Koby",
     sex: "male",
     animal: "gnagare",
     color: "black"
   }
]
var targets = ["male, dog, black"]
var matches = [];

for (var i = 0; i < names.length; i++) {
  if (names[i].sex == targetSex && names[i].animal == targetAnimal && names[i].color == tragetColor) {
    matches.push(names[i].name)
  }

}
