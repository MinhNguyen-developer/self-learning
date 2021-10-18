const fruits = ["Banana", "Orange", "Apple", "Mango"];

const demo = document.querySelector("#demo");

fruits.forEach((value) => {
  const newFruits = `<li>${value}</li>`;
  let text = `<ul>${newFruits}</ul>`;
  demo.innerHTML = text;
});
