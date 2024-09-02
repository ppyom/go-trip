class PlaceStorage {
  static #DEFAULT_VALUE = '{}';
  static #STORAGE_KEY = 'go-trip-place';
  static #placeList = this.#getByLocalStorage();
  static #getByLocalStorage() {
    return JSON.parse(
      localStorage.getItem(this.#STORAGE_KEY) || this.#DEFAULT_VALUE,
    );
  }
  static #saveToLocalStorage() {
    localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(this.#placeList));
  }
  static getList() {
    return Object.values(this.#placeList);
  }
  static create(item) {
    this.#placeList[item.id] = item;
    this.#saveToLocalStorage();
  }
  static remove(id) {
    delete this.#placeList[id];
    this.#saveToLocalStorage();
  }
}

export default PlaceStorage;
