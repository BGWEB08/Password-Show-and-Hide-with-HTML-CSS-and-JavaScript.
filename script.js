let eyeIcon = document.getElementById("show-icon");
let password = document.getElementById("password");

eyeIcon.onclick = () => {
    if(password.type === "password"){
        password.type = "text";
        eyeIcon.classList.replace("bi-eye-slash","bi-eye");
    }else{
        password.type = "password";
        eyeIcon.classList.replace("bi-eye","bi-eye-slash");
    }
}