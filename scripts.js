'use strict';
const encryptMessage = document.getElementById("encrypt-text");
const encryptButton = document.getElementById("encrypt-button");
const decryptButton = document.getElementById("decrypt-button");
const decryptBox = document.getElementById("decrypt-box");
const decryptTextarea = document.getElementById("decrypt-textarea");
const copyButton = document.getElementById("copy-button");
const checkText = new RegExp(/[A-Z0-9áÁ-ýÝ`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/);
const inputAlert = "All characters should be lowercase and with non especial characters"

function removeDecryptBox(){
    decryptTextarea.value = "";
    
    decryptBox.style.display = "none";
    decryptTextarea.style.display = "block";
    copyButton.style.display = "block";     
}

function depolyDecryptBox(){
    decryptTextarea.value = "";
    
    decryptBox.style.display = "block";
    decryptTextarea.style.display = "none";
    copyButton.style.display = "none";     
}


function encryptText (message) {
    if ((checkText.test(message))){
        alert(inputAlert)    
    } else {
        const letters = {"a":"ai", "e":"enter", "i":"imes", "o":"ober", "u":"ufat"}
        
        let words= message;
        words = words.replace(/a|e|i|o|u/g, i => letters[i]);

        if(words === ""){
            depolyDecryptBox()
        } else {
            removeDecryptBox();
            decryptTextarea.value += words;
        } 
    }
}

function decryptText (message) {
    if (checkText.test(message)){
        alert(inputAlert)        
    } else {
        const letters = {"ai":"a", "enter":"e", "imes":"i", "ober":"o", "ufat":"u"}
        
        let words= message
        words = words.replace(/ai|enter|imes|ober|ufat/g, i => letters[i]);

        if (words === ""){
            depolyDecryptBox()
        }else {
            removeDecryptBox();
            decryptTextarea.value += words;
            
        } 
    }
}

encryptButton.onclick = function () {
    encryptText(encryptMessage.value);
}

decryptButton.onclick = function () {
    decryptText(encryptMessage.value);
}

copyButton.onclick = function () {
    navigator.clipboard.writeText(decryptTextarea.value);
    encryptMessage.value = "";
    depolyDecryptBox();
    encryptMessage.focus();

}

