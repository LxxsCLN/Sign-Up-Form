const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirmpassword");
const errortext = document.querySelector("#errortext");


password.addEventListener("input", (e) => checkPaswords());
confirmpassword.addEventListener("input", (e) => checkPaswords());

function checkPaswords(){
    if (confirmpassword.value === "" || password.value === "") return;
        if (password.value !== confirmpassword.value){
            errortext.style.visibility = "visible";
            password.classList.add("error");
            confirmpassword.classList.add("error");
        }
        else {
            errortext.style.visibility = "hidden";
            password.classList.remove("error");
            confirmpassword.classList.remove("error");
        }
}
