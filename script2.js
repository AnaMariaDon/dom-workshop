// Dennis, Ana-Maria
//Emelie

const button1 = document.createElement("button");
button1.textContent = "bakgroundsfärg";

const button2 = document.createElement("button");
button2.textContent = "lägg till stycke";

const button3 = document.createElement("button");
button3.textContent = "ta bort senaste stycket";

const button4 = document.createElement("button");
button4.textContent = "name";

document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);
document.body.appendChild(button4);

button1.addEventListener("click", () => {
  document.body.style.backgroundColor = "#e0f2fe";
});

button2.addEventListener("click", () => {
  const nyP = document.createElement("p");
  nyP.textContent = "Jag sov 9h";
  document.body.appendChild(nyP);
});

button3.addEventListener("click", () => {
  const allP = document.querySelectorAll("p");
  const lastP = allP[allP.length - 1];
  if (lastP) {
    lastP.remove();
  }
});

button1.addEventListener("click", () => {
  document.body.style.backgroundColor = "#e0f2fe";
});
