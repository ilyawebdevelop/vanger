export default function select() {
  const buttons = document.querySelectorAll(".select__button");

  if (buttons.length) {
    const allSelects = document.querySelectorAll(".select");

    allSelects.forEach((s) => {
      const input = s.querySelector(".select__input");
      s.addEventListener("click", (e) => {
        e.stopPropagation();

        if (e.target.classList.contains("select__item")) {
          input.value = e.target.textContent;
        }
      });
    });

    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const select = btn.closest(".select");

        if (select.classList.contains("_open")) {
          handleClose(select);
        } else {
          handleOpen(select);
        }
      });
    });

    function handleOpen(select) {
      select.classList.add("_open");
      document.body.addEventListener("click", handleClose);
    }
    function handleClose(select) {
      const isDOM = (obj) => obj instanceof Node;
      if (isDOM(select)) {
        select.classList.remove("_open");
      } else {
        const openSelect = document.querySelector(".select._open");
        openSelect?.classList.remove("_open");
      }

      document.body.removeEventListener("click", handleClose);
    }
  }
}
