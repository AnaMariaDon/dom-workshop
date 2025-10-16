//navigator: Dennis, Emelie
//driver: Ana Maria

const box1 = document.createElement ("div");
const box2 = document.createElement ("div");
const box3 = document.createElement ("div");

const container = document.createElement("section");

container.classList.add ("container");
document.body.appendChild(container);

box1.textContent ="box1";
box2.textContent ="box2";
box3.textContent ="box3";



container.appendChild(box1);
container.appendChild(box2);
container.appendChild(box3);

box1.style.backgroundColor = "#f2c3";
box2.style.backgroundColor = "#e45";
box3.style.backgroundColor = "green";