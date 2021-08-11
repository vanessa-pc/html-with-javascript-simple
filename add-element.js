// create a new h2 element
const newDiv = document.createElement("h2");

// and give it some content
const newContent = document.createTextNode("Click on the button above!");

// add the text node to the newly created h2
newDiv.appendChild(newContent);

// add the newly created element and its content into the DOM
const existingDiv = document.getElementById("my-target-element");
document.body.appendChild(newDiv, existingDiv);