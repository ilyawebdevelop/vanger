export default function singleMoreToggle() {
  const btn = document.querySelector(".single__btn-more");

  if (btn) {
    const more = document.querySelector(".single__more");

    btn.addEventListener("click", () => {
      if (more.classList.contains("_open")) {
        more.classList.remove("_open");
        btn.textContent = "Смотреть проект полностью";
      } else {
        more.classList.add("_open");
        btn.textContent = "Свернуть все экраны";
      }
    })
  }
}