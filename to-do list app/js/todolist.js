export default class ToDoList {
  constructor() {
    this._list = [];
  }

  getList() {
    return this._list;
  }

  clearList() {
    this._list = [];
  }

  addItemToDoList(itemObj) {
    this._list.push(itemObj);
  }

  removeItemFromList(id) {
    const list = this._list;
    for (let i = 0; i < list.length; i++) {
      if (this._list.id == id) {
        list[i].splice(i, 1);
        break;
      }
    }
  }
}
