import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Input from './components/Input/Input.jsx';
import TotalCount from './components/TotalCount/TotalCount.jsx';
import Item from './components/Item/Item.jsx';
import Empty from './components/Empty/Empty.jsx';
import * as PlaceStorage from './storages/placeStorage.js';

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
      <ul className="List mw">
        {list.length === 0 ? (
          <Empty />
        ) : (
          list.map((item, idx) => (
            <Item
              key={`item_${idx}`}
              item={item}
              remove={() => deleteList(item.id)}
            />
          ))
        )}
      </ul>
    </>
  );
}

export default App;
