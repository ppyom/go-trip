const STORAGE_KEY = 'go-trip-place';
const DEFAULT_VALUE = '{}';

const getByLocalStorage = () =>
  JSON.parse(localStorage.getItem(STORAGE_KEY) || DEFAULT_VALUE);
const saveToLocalStorage = () =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(placeList));

const placeList = getByLocalStorage();

const getList = () => {
  return Object.values(placeList);
};
const create = (item) => {
  placeList[item.id] = item;
  saveToLocalStorage();
};
const remove = (id) => {
  delete placeList[id];
  saveToLocalStorage();
};

export { getList, create, remove };
