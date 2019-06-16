
// When the user enters in text into the text area and then clicks the create button,
// use a factory function that creates a new DOM component
// that has a border, and includes it's own delete button.
// Insert that new component into the DOM.

// When the user clicks the Delete button, the containing card, and no other cards,
// should then be removed from the DOM. Not just made invisible, actually removed from the DOM. (remove child)

const container = document.querySelector("#textarea");
const createButton = document.querySelector("#create-btn");
let inputText = document.querySelector("#textarea").textContent;
let unique = 0;

if (container !== "") {
  createButton.addEventListener("click", () => {
    unique++;
    addComponentToDom(createComponent(unique));
  });
}

function addComponentToDom(poop) {
  document.getElementById("results").innerHTML += poop;
}

function createComponent(unique, inputText) {
  return `
  <div class="border" id="deleteCase-${unique}">
    <h3>Border Element</h3>
    <h4>${inputText}</h4>
    <button class="delete-btn" id="deleteBtn-${unique}">Delete</button>
  </div>
  `;
}
