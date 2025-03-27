const popupButtons = document.querySelectorAll(".popup-button");
const popup = document.querySelector(".popup");
const sendButton = document.querySelector(".popup__button");
const inp = document.querySelector(".popup__phone");

function valiP(p) {
    // Regex pattern for common phone number formats
    const patt = /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
    return patt.test(p);
}

popupButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
        popup.classList.add("pop");
    })
})

document.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.classList.remove("pop");
    }
})

sendButton.addEventListener("click", (e) => {
    if (!valiP(inp.value)) {
        e.preventDefault();

        const popupRequired = document.querySelector('.popup__required');
        const popupPhone = document.querySelector('.popup__phone');

        // Добавляем классы
        popupRequired.classList.add('required-active');
        popupPhone.classList.add('less-margin');

        // Убираем классы через 3 секунды
        setTimeout(() => {
            popupRequired.classList.remove('required-active');
            popupPhone.classList.remove('less-margin');
        }, 3000); // 3000 миллисекунд = 3 секунды
    }
});

