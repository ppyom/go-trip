import Item from './Item/Item.jsx';
import './List.css';

const List = ({ list, remove }) => {
  return (
    <ul className="List mw">
      {list.map((item, idx) => (
        <Item key={`item_${idx}`} item={item} remove={() => remove(item.id)} />
      ))}
    </ul>
  );
};

export default List;
