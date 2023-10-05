function resetForm() {
    // console.log(this);
    this.login.value = "";
    this.password.value = "";
}

document.querySelector('[data-form]').addEventListener("submit", function (e) {
    e.preventDefault();
    const loginVal = this.login.value;
    const passwordVal = this.password.value;
    // console.log(this.check.checked);
    console.log(loginVal, passwordVal);
    // this.reset();
    if (loginVal === "" || passwordVal === "" || !this.check.checked) {
        console.log("Error");
        this.classList.add("req9");
    } else {
        console.log("ok status");
    }
    resetForm.call(this)
});