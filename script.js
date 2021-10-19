// const input_password = document.getElementById("input");        /* 用"元素id"找尋 */
const button_generate = document.querySelector("button");        /* 用"元素類型"找尋 */
const button_copy = document.querySelector("span.far");         /* 用"元素類型.class名稱"找尋 */
const button_copyActive = document.querySelector("span.fas");         /* 用"元素類型.元素名稱"找尋 */
const input_display = document.querySelector(".display").querySelector("input");     /* 用".class名稱"找尋底下的"元素類型" */

let chars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm12345678990";

var inputResult;

/* 輸入時就會log */
// input_password.oninput = () => {
//     inputResult = input_password.value;
// }

/* 按Enter時才會log */
// input_password.onchange = () => {
//     console.log("Final input text is : " + inputResult);
// }

button_generate.onclick = () => {
    console.log("Generate a ramdom password!");

    let i,
    ramdomPassword = "";
    button_copy.style.display = "block";
    button_copyActive.style.display = "none";

    for (i = 0; i < 16; i++) {
        ramdomPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    console.log("Password is already! " + ramdomPassword);
    
    input_display.value = ramdomPassword;
}

function copy() {
    console.log("Copy the result!")
    button_copy.style.display = "none";
    button_copyActive.style.display = "block";
    input_display.select();
    document.execCommand("copy");
}