const imgContainer = document.querySelector(".container");
const img = document.querySelector("img");

imgContainer.addEventListener("mousemove", (e) => {
  const xPos = e.clientX - e.target.offsetLeft;
  const yPos = e.clientY - e.target.offsetTop;

  img.style.transformOrigin = `${xPos}px ${yPos}px`;
  img.style.transform = "scale(2)";
});

imgContainer.addEventListener("mouseleave", () => {
  img.style.transformOrigin = `center`;
  img.style.transform = "scale(1)";
});
