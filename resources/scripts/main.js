const input = document.querySelector("#reg_phone");

window.intlTelInput(input, {
    oadUtils: () => import("https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.0/build/js/utils.js"),
    initialCountry: "ru",
});
