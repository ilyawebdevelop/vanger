export default function servicesItemShadow() {
  const buttonsAccordion = document.querySelectorAll(".services__accordion-btn");

  if (buttonsAccordion.length) {
    buttonsAccordion.forEach(btn => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".services__item-body");

        item.classList.toggle("_shadow");
      })
    })
  }
}