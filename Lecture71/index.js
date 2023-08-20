// ReplaceChild & RemoveChild Method Examples

// var newElement = document.createElement("li");
// var newText = document.createTextNode("Bhaskar Gupta");

// newElement.appendChild(newText);

var list = document.getElementById("list");


var oldElement = list.children;
console.log(oldElement);


var oldElement = list.children[0];
console.log(oldElement);


var oldElement = list.children[4];
// ReplaceChild
// list.replaceChild(newElement,oldElement)

var oldElement = list.children[3];
// RemoveChild
list.removeChild(oldElement)