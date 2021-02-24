var result = document.getElementById("result");

function edit(elem) {
    result.value = result.value + elem.textContent;
}

function cal(){
    result.value = new Function("return " + result.value)();
}

function reset(){
   result.value = "";
}