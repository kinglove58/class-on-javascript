import ToDoItem from "./todoitem.js";
import ToDoList from "./todolist.js";

const toDoList = new ToDoList();

//Launch app

document.addEventListener("readystatechange", (event) => {
  if (event.target.readystate === "complete") {
    initApp();
  }
});

const initApp = () => {
  const itemEntryForm = document.querySelector("#itemEntryForm");
  itemEntryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    processSubmission();
  });

  const clearItem = document.querySelector("#clearItems");
  clearItem.addEventListener("click", (event) => {
    const list = toDoList.getList();
    if (list.length) {
      const confirmed = confirm("Are you sure you want to delete your items");

      if (confirmed) {
        toDoList.clearList();
        updatePersistentData(toDoList.getList());
        refreshThePage();
      }
    }
  });
  //procedure
  loadListObject();
  refreshThePage();
};

const loadListObject = () => {
  const storedList = localStorage.getItem("myToDoList");
  if (typeof storedList !== "string") return;
  const parsedList = JSON.parsedList.forEach((itemObj) => {
    const newToDoItem = createNewItem(itemObj._id, itemObj.item);
    toDoList.addItemToDoList(newToDoItem);
  });
};

const refreshThePage = () => {
  clearListDisplay();
  renderList();
  clearItemEntryField();
  setFocusOnItemEntry();
};

const clearListDisplay = () => {
  const parentElement = document.querySelector("#listItem");
  deleteContents(parentElement);
};

const renderList = () => {
  const list = toDoList.getList();
  list.forEach((item) => {
    buildListItem(item);
  });
};

const buildListItem = () => {
  const div = document.createElement("div");
  div.className = "item";
  const check = document.createElement("check");
  check.type = "checkbox";
  check.id = item.getId();
  check.tabIndex = 0;
  addClickListenerTocheckbox(check);
  const label = document.createElement("label");
  label.htmlFor = item.getId();
  label.textContent = item.getItem();
  div.appendChild(check);
  div.appendChild(label);
  const container = document.querySelectorAll("#listItems");
  container.appendChild(div);
};

const addClickListenerTocheckbox = (checkbox) => {
  checkbox.addEventListener("click", (event) => {
    if (checkbox.checked) {
      toDoList.removeItemFromList(checkbox.id);
      updatePersistentData(toDoList.getList());
    }
  });
};
