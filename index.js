const textArea=document.getElementById("userInput");
const copy=document.getElementById('copy');
const clear=document.getElementById('clear');
textArea.addEventListener("input",()=>{
let text=textArea.value;
text=text.toLowerCase();
let conv=toTifinagh(text);
textArea.value=conv;
}
)
function toTifinagh(input){
switch(input[input.length-1]){
case "a":
input=input.replace("a","ⴰ");
break;
case "b":
input=input.replace("b","ⴱ");
break;
case "g":
input=input.replace("g","ⴳ");
break;
case "ǧ":
input=input.replace("ǧ","ⴵ");
break;
case "d":
input=input.replace("d","ⴷ");
break;
case "ḍ":
input=input.replace("ḍ","ⴹ");
break;
case "e":
input=input.replace("e","ⴻ");
break;
case "f":
input=input.replace("f","ⴼ");
break;
case "k":
input=input.replace("k","ⴽ");
break;
case "h":
input=input.replace("h","ⵀ");
break;
case "ḥ":
input=input.replace("ḥ","ⵃ");
break;
case "ɛ":
input=input.replace("ɛ","ⵄ");
break;
case "x":
input=input.replace("x","ⵅ");
break;
case "q":
input=input.replace("q","ⵇ");
break;
case "i":
input=input.replace("i","ⵉ");
break;
case "j":
input=input.replace("j","ⵊ");
break;
case "l":
input=input.replace("l","ⵍ");
break;
case "m":
input=input.replace("m","ⵎ");
break;
case "n":
input=input.replace("n","ⵏ");
break;
case "u":
input=input.replace("u","ⵓ");
break;
case "r":
input=input.replace("r","ⵔ");
break;
case "ṛ":
input=input.replace("ṛ","ⵕ");
break;
case "ɣ":
input=input.replace("ɣ","ⵖ");
break;
case "s":
input=input.replace("s","ⵙ");
break;
case "ṣ":
input=input.replace("ṣ","ⵚ");
break;
case "c":
input=input.replace("c","ⵛ");
break;
case "č":
input=input.replace("č","ⵞ");
break;
case "t":
input=input.replace("t","ⵜ");
break;
case "ṭ":
input=input.replace("ṭ","ⵟ");
break;
case "w":
input=input.replace("w","ⵡ");
break;
case "y":
input=input.replace("y","ⵢ");
break;
case "z":
input=input.replace("z","ⵣ");
break;
case "ẓ":
input=input.replace("ẓ","ⵥ");
}
for(let i=0;i<input.length;i++){
    switch(input[i]){
case "a":
input=input.replace("a","ⴰ");
break;
case "b":
input=input.replace("b","ⴱ");
break;
case "g":
input=input.replace("g","ⴳ");
break;
case "ǧ":
input=input.replace("ǧ","ⴵ");
break;
case "d":
input=input.replace("d","ⴷ");
break;
case "ḍ":
input=input.replace("ḍ","ⴹ");
break;
case "e":
input=input.replace("e","ⴻ");
break;
case "f":
input=input.replace("f","ⴼ");
break;
case "k":
input=input.replace("k","ⴽ");
break;
case "h":
input=input.replace("h","ⵀ");
break;
case "ḥ":
input=input.replace("ḥ","ⵃ");
break;
case "ɛ":
input=input.replace("ɛ","ⵄ");
break;
case "x":
input=input.replace("x","ⵅ");
break;
case "q":
input=input.replace("q","ⵇ");
break;
case "i":
input=input.replace("i","ⵉ");
break;
case "j":
input=input.replace("j","ⵊ");
break;
case "l":
input=input.replace("l","ⵍ");
break;
case "m":
input=input.replace("m","ⵎ");
break;
case "n":
input=input.replace("n","ⵏ");
break;
case "u":
input=input.replace("u","ⵓ");
break;
case "r":
input=input.replace("r","ⵔ");
break;
case "ṛ":
input=input.replace("ṛ","ⵕ");
break;
case "ɣ":
input=input.replace("ɣ","ⵖ");
break;
case "s":
input=input.replace("s","ⵙ");
break;
case "ṣ":
input=input.replace("ṣ","ⵚ");
break;
case "c":
input=input.replace("c","ⵛ");
break;
case "č":
input=input.replace("č","ⵞ");
break;
case "t":
input=input.replace("t","ⵜ");
break;
case "ṭ":
input=input.replace("ṭ","ⵟ");
break;
case "w":
input=input.replace("w","ⵡ");
break;
case "y":
input=input.replace("y","ⵢ");
break;
case "z":
input=input.replace("z","ⵣ");
break;
case "ẓ":
input=input.replace("ẓ","ⵥ");
}
}

return input;
}
function add(letter){
const start=textArea.selectionStart;
const end=textArea.selectionEnd;
const text=textArea.value;
textArea.value=text.slice(0,start)+letter+text.slice(end);
textArea.focus();
}
function Clear(){
textArea.value="";
}
function Copy(){
    textArea.select();
    document.execCommand("copy");
}
clear.addEventListener("click",Clear);
copy.addEventListener("click",Copy);