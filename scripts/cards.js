
// When the user enters in text into the text area and then clicks the create button,
// use a factory function that creates a new DOM component
// that has a border, and includes it's own delete button.
// Insert that new component into the DOM.

// When the user clicks the Delete button, the containing card, and no other cards,
// should then be removed from the DOM. Not just made invisible, actually removed from the DOM. (remove child)

const container = document.querySelector("#textarea");
const createButton = document.querySelector("#create-btn");
let unique = 0;
let inputText = "No Text Entered.";


createButton.addEventListener("click", () => {
  unique++;
  if (container.value.length >= 1) {
    inputText = container.value;
  }
  addComponentToDom(createComponent(unique, inputText));
});

function addComponentToDom(poop) {
  document.getElementById("results").innerHTML += poop;
  let deleteButton = document.querySelectorAll(".delete-btn");
  deleteButton.forEach(button => {
    button.addEventListener("click", function () {
      splitsville();
    });
  });
}

function createComponent(unique) {
  return `
  <div class="border" id="deleteCase-${unique}">
    <h3>Border Element</h3>
    <h4>${inputText}</h4>
    <button class="delete-btn" id="deleteBtn-${unique}">Delete</button>
  </div>
  `;
}

function splitsville() {
  const parent = document.querySelector("#results");
  let idArray = event.target.id.split("-");
  let deleteId = "deleteCase-" + idArray[1];
  let uniqueId = document.getElementById(deleteId);
  parent.removeChild(uniqueId);
}