function addElement () {
    let newDiv = document.createElement("div",bus);
    let newContent = document.createTextNode('Hi there and greetings!');
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementsByClassName('carousel');
  document.body.insertBefore(newDiv, currentDiv);
}