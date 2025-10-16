//Navigator: Emelie, Ana Maria
//Driver: Dennis

const container = document.querySelector("container");
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const button4 = document.createElement("button");
const text = document.createElement("p");

button1.textContent = "Change Color";
button2.textContent = "Add Text";
button3.textContent = "Clear Text";

text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A nisi ducimus quo suscipit nulla nostrum accusamus aliquam, reiciendis fugiat iusto nobis laboriosam ipsam, adipisci fuga ratione sunt beatae dolorum. Tempore.";


document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);

document.body.appendChild(text);

button1.addEventListener("click", () => {
    text.style.backgroundColor = "#125497";
});

button2.addEventListener("click", () => {
    text.textContent += "Lägger till text ";
});

button3.addEventListener("click", () => {
    text.textContent = "";
});

