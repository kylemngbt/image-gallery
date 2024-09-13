const scrollContainer = document.querySelector(".gallery");
const backBtn = document.querySelector("#back-btn");
const nextBtn = document.querySelector("#next-btn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
})

nextBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft += 900;
})

backBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 900;
})