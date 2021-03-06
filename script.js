const container = document.querySelector(".container");
const clear = document.querySelector("#clear");

// creates 256 squares
for (let i = 1; i <= 256; ++i) {
  const div = document.createElement("div");
  div.classList.add("square");
  container.appendChild(div);
}

// changes color of squares when cursos hovers over
container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("square")) e.target.classList.add("draw");
  console.log(e.target);
});

// new
clear.addEventListener("click", (e) => {
  //   document.querySelectorAll(".square").forEach((square) => {
  //     square.classList.remove("draw");
  //   });

  let userInput = prompt("How many H/V squares do you want: ");
  if (userInput > 100) {
    alert("Maximum number of squares H/V is a 100");
    return;
  }
  container.setAttribute(
    "style",
    `grid-template-columns: repeat(${userInput}, 1fr);`
  );

  let squareTotal =
    userInput * userInput -
    Array.from(document.querySelectorAll(".square")).length;
  for (let i = 1; i <= squareTotal; ++i) {
    const div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
  }
});
