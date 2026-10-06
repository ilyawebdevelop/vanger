export default function btnUp() {
  const btnUp = document.querySelector(".btn-up");

  if (btnUp && window.matchMedia("(min-width:992px)").matches) {
    window.addEventListener("scroll", hanldeHide);
    hanldeHide();

    btnUp.addEventListener("click", () => {

      window.scrollTo(0, 0);
    });

    function hanldeHide() {
      if (window.scrollY < 250 || window.pageYOffset < 250) {
        btnUp.classList.add("_hidden");
      } else {
        btnUp.classList.remove("_hidden");
      }
    }
  }
}
