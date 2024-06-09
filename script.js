const solve = (ch) =>{
    let display = document.getElementById("display");
    display.value+=ch;
}
const Clear = () => {                     
    document.getElementById("display").value="";
}
const backspace = (ch) =>{
    let display = document.getElementById("display");
    display.value = display.value.slice(0,-1);
}
const result = (ch) =>{
    let display = document.getElementById("display");
    try{display.value = eval(display.value);}
    catch{
        display.value="Input valid value."
    }
}
