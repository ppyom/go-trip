import Header from './components/Header/Header.jsx';
import Input from './components/Input/Input.jsx';
import TotalCount from './components/TotalCount/TotalCount.jsx';
import Item from './components/Item/Item.jsx';
import Empty from './components/Empty/Empty.jsx';
import './App.css';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  const addList = (newItem) => {
    setList((prev) => [...prev, newItem]);
  };
  const deleteList = (id) => {
    setList((prev) => prev.filter((item) => item.id !== id));
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
