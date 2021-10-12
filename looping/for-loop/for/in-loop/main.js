var myInfo = {
  name: "Minh",
  age: 18,
  address: "Hanoi, VN",
};

for (var key in myInfo) {
  console.log(myInfo[key]);
}

var languages = ["JS", "PHP", "Ruby"];

for (var key in languages) {
  console.log(key);
}
