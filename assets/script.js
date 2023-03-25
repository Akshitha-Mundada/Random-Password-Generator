const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let generate_btn = document.getElementById('generate-btn');
let firstPassword = document.getElementById('first-password');
let secondPassword = document.getElementById('second-password');

generate_btn.addEventListener('click', passwordGenerator);

function passwordGenerator() {
    firstPassword.textContent = null;
    secondPassword.textContent = null
    for (let i = 1; i < 16; i++) {
        let randomIndexNumberOne = Math.floor(Math.random() * characters.length);
        let randomIndexNumberTwo = Math.floor(Math.random() * characters.length);

        firstPassword.textContent += characters[randomIndexNumberOne];
        secondPassword.textContent += characters[randomIndexNumberTwo];
    }
}