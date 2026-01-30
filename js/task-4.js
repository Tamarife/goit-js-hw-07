const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", event => {
    event.preventDefault();

    const {
        email,
        password
    } = loginForm.elements;

    const emailValue = email.value.trim()
    const passwordValue = password.value.trim();

    if (emailValue === "" || passwordValue === "") {
        alert('Всі поля повинні бути заповнені!');
        return;
    }
    const formData = {
        email: emailValue,
        password: passwordValue;
    };
    console.log(formData);

    loginForm.reset();


});

