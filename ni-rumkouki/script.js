let map = new Map();

map.set('A', 'O');
map.set('B', 'P');
map.set('C', 'K');
map.set('D', 'T');
map.set('E', 'I');
map.set('F', 'V');
map.set('G', 'J');
map.set('H', 'W');
map.set('I', 'E');
map.set('J', 'G');
map.set('K', 'C');
map.set('L', 'R');
map.set('M', 'N');
map.set('N', 'M');
map.set('O', 'A');
map.set('P', 'B');
map.set('Q', 'X');
map.set('R', 'L');
map.set('S', 'Z');
map.set('T', 'D');
map.set('U', 'Y');
map.set('V', 'F');
map.set('W', 'H');
map.set('X', 'Q');
map.set('Y', 'U');
map.set('Z', 'S');

map.set('a', 'o');
map.set('b', 'p');
map.set('c', 'k');
map.set('d', 't');
map.set('e', 'i');
map.set('f', 'v');
map.set('g', 'j');
map.set('h', 'w');
map.set('i', 'e');
map.set('j', 'g');
map.set('k', 'c');
map.set('l', 'r');
map.set('m', 'n');
map.set('n', 'm');
map.set('o', 'a');
map.set('p', 'b');
map.set('q', 'x');
map.set('r', 'l');
map.set('s', 'z');
map.set('t', 'd');
map.set('u', 'y');
map.set('v', 'f');
map.set('w', 'h');
map.set('x', 'q');
map.set('y', 'u');
map.set('z', 's');
//mapping
var inputtext = document.getElementById("tobetranslated");
var button = document.getElementById("translatebutton");
var outputtext = document.getElementById("translated");
//variables and function below
button.onclick = function() {

    var text = inputtext.value;
    var output = ""
    //alert(text)
    for (var i = 0; i < text.length; i++) {
        
        if (map.has(text[i])) {
            output += map.get(text[i]);
        }
        else {
            output += text[i];
        }
        //output += text[i]
        //console.log(text[i]);
    }
    outputtext.value = output;
    console.log(output)
    
};