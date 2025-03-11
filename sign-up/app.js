const pass = document.getElementById("user_password");
const confirm = document.getElementById("confirm_password");

const passDiv = document.querySelector(".password");
const para = document.createElement("p");
const node = document.createTextNode("*Passwords do not match");

para.setAttribute("id", "match");
para.appendChild(node);

passDiv.appendChild(para);

pass.addEventListener('keyup', () => {
    checkPass(pass, confirm);
})

confirm.addEventListener('keyup', () => {
    checkPass(pass, confirm);
})

function checkPass (pass, confirm) {
    if (pass.value === confirm.value && pass.value !== "") {
        pass.classList.remove('error');
        confirm.classList.remove('error');
        if (document.getElementById("match")) {
            passDiv.removeChild(para);
        }

        
    } else {
        pass.classList.add('error');
        confirm.classList.add('error');
        if (document.getElementById("match")) {
            passDiv.removeChild(para);
        }
        passDiv.appendChild(para);
    }
}