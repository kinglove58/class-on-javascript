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
};
