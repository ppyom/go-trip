import Item from './Item/Item.jsx';
import './List.css';

const List = ({ list, remove }) => {
  return (
    <ul className="List mw">
      {list.map((item) => (
        <Item key={item.id} item={item} remove={() => remove(item.id)} />
      ))}
    </ul>
  );
};

export default List;
