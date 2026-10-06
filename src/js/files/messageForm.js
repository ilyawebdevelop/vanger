export default function messageForm() {
  const buttons = document.querySelectorAll("[data-message-form-btn]");

  if (buttons.length) {
    const inputMessage = document.querySelector("#message-form");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const message = btn.dataset.messageFormBtn;
        inputMessage.value = message;
      });
    });

    // получаем модалку, в которой находится инпут с сообщением
    const modal = document.querySelector("#price-learn-modal");

    modal.addEventListener("hide.bs.modal", () => {
      // очищаем инпут при закрытии
      inputMessage.value = "";
    });
  }
}
