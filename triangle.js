var angles = document.querySelectorAll(".angle");
var checkBtn = document.querySelector("#Check-btn");
var msg = document.querySelector("#message");
msg.style.display = "none";

function checkNegative(ent) {
    if (ent.target.value < 0) {
        msg.innerText = "Please enter a positive number"
        msg.style.display = "block";
    } else {
        msg.innerText = "";
    }
}

function checkHandler() {
    let sum = 0;
    for (let i = 0; i < angles.length; i++) {
        sum += Number(angles[i].value);
    }
    if (sum === 180) {
        msg.innerText = " Woahh!!!🥳 The given angles makes a triangle";

        msg.style.display = "block";
    } else {
        msg.innerText = "The given angles cannot make a triangle 🤧";
        msg.style.display = "block";
    }
}
checkBtn.addEventListener("click", checkHandler);
for (let i = 0; i < angles.length; i++) {
    angles[i].addEventListener("input", checkNegative);
}