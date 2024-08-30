import Header from './components/Header/Header.jsx';
import Input from './components/Input/Input.jsx';
import TotalCount from './components/TotalCount/TotalCount.jsx';
import Item from './components/Item/Item.jsx';
import Empty from './components/Empty/Empty.jsx';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Input />
      <TotalCount />
      <ul className="List mw">
        <Item />
        <Empty />
      </ul>
    </>
  );
}

export default App;
