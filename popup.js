function refresh(){
    var textContent = document.getElementById('editor-textarea').value;
    document.getElementById('viewer').srcdoc = textContent;
}


function changeColor(newColor) {
    document.querySelectorAll("body").style.backgroundColor = newColor;
}
function run(){
    refresh();
}


document.addEventListener ('DOMContentLoaded', function(){


}, false);
