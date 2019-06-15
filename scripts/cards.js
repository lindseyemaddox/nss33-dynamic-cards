
// When the user enters in text into the text area and then clicks the create button,
// use a factory function that creates a new DOM component
// that has a border,
// and includes it's own delete button.

// Insert that new component into the DOM.

// When the user clicks the Delete button, the containing card, and no other cards,
// should then be removed from the DOM. Not just made invisible, actually removed from the DOM. (remove child)

const createButton = document.querySelector("#create-btn");
let container = document.querySelector("#main");
const lotsOfCreateButtons = document.querySelectorAll(".create-btn");

if (container !== "") {
  createButton.addEventListener("click", (index) => {

      addComponentToDom(createComponent());



  });
}

function addComponentToDom(index) {
  document.getElementById("results").innerHTML += index;
}

function createComponent() {
  return `
    <h3>Border Element</h3>
    <button>Delete</button>
  `;
}

function deleteComponentFromDom(parkComponent) {
  document.getElementById("results").innerHTML += parkComponent;
}

function deleteSearchComponent() {
  return `
  `;
}

