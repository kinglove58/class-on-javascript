import ToDoList from "./todolist";
import ToDoItem from "./todoitem";

const toDoList = new ToDoList();

// launch app

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  // Add Listeners

  // Procedure
  // load list item
  refreshThePage();
};

const refreshThePage = () => {
  clearListDisplay();
  // renderList();
  // clearItemEntryField();
  // setFocusOnItemEntry();
};

const clearListDisplay = () => {
  const parentElement = document.getElementById("listItem");
  deleteContents(parentElement);
};

const deleteContents = (parentElement) => {
  let child = parentElement.lastElementChild;
  while (child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
};

const renderList = () => {
  const list = toDoList.getList();
  list.forEach((item) => {
    buildListItem(item);
  });
};

const buildListItem = (item) => {
  const div = document.createElement(div);
  div.className = "item";
  const check = document.createElement("input");
  check.type = "checkbox";
  check.id = item.getid();
  // addClicklistenerToCheckbox(check);
  const label = document.createElement("label");
  label.htmlFor = item.getId();
  label.textContent = item.getItem();
  div.appendChild(check);
  div.appendChild(label);
  const container = document.getElementById("listItem");
  container.appendChild("div");
};
