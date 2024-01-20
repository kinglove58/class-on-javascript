export default class ToDoItem {
  constructor() {
    this.id = null;
    this.item = null;
  }

  getId() {
    return this._id;
  }

  setId(id) {
    this.id = id;
  }

  getItem() {
    return this.item;
  }

  setItem(item) {
    this.item = item;
  }
}
