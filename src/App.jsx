import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Input from './components/Input/Input.jsx';
import TotalCount from './components/TotalCount/TotalCount.jsx';
import List from './components/List/List.jsx';
import Empty from './components/List/Empty/Empty.jsx';
import PlaceStorage from './storages/placeStorage.js';

function App() {
  const [list, setList] = useState(PlaceStorage.getList());

  const addList = (newItem) => {
    setList((prev) => [...prev, newItem]);
    PlaceStorage.create(newItem);
  };
  const deleteList = (id) => {
    setList((prev) => prev.filter((item) => item.id !== id));
    PlaceStorage.remove(id);
  };

  return (
    <>
      <Header />
      <Input add={addList} />
      <TotalCount count={list.length} />
      {list.length === 0 ? (
        <Empty name="여행지" />
      ) : (
        <List list={list} remove={deleteList} />
      )}
    </>
  );
}

export default App;
