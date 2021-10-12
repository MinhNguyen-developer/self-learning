var languages = "Javascript";
for (var value of languages) {
  console.log(value);
}

var myInfo = {
  name: "Minh",
  age: 18,
};

for (var value of Object.keys(myInfo)) {
  console.log(myInfo[value]); // => Minh, 18
}

console.log(Object.values(myInfo)); // => ['Minh', 18]
