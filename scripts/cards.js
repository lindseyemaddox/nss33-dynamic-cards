
// When the user enters in text into the text area and then clicks the create button,
// use a factory function that creates a new DOM component
// that has a border,
// and includes it's own delete button.
// Insert that new component into the DOM.

// When the user clicks the Delete button, the containing card, and no other cards,
// should then be removed from the DOM. Not just made invisible, actually removed from the DOM. (remove child)

const container = document.querySelector("#textarea");
const createButton = document.querySelector("#create-btn");

if (container !== "") {
  createButton.addEventListener("click", () => {
    addComponentToDom(createComponent());

    let deleteButton = document.querySelectorAll(".deleteBtn");




      deleteButton.forEach(button => {
        button.addEventListener("click", function (button) {
          let buttonId = event.target.id;
          let idArray = buttonId.split("-");
          let idNumber = idArray[1];
          let deleteId = "deleteBtn-" + idNumber;
          let deleteBtn = document.getElementById(deleteId).textContent;
          deleteComponentFromDom(deleteSearchComponent(idNumber));
        });
      });

  });
    }





function addComponentToDom(idNumber) {
  document.getElementById("results").innerHTML += idNumber;
}

function createComponent(idNumber) {
  return `
  <div class="border" id="deleteCase-${idNumber}">
    <h3>Border Element</h3>
    <button class="deleteBtn" id="deleteBtn-${idNumber}">Delete</button>
  </div>
  `;
}

function deleteComponentFromDom(idNumber) {
  document.getElementById("results").innerHTML += idNumber;
}

function deleteSearchComponent(child) {
  return `
    ${child}
  `;
}