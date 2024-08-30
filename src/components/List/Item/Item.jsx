import './Item.css';

const Item = ({ item, remove }) => {
  return (
    <li className="Item">
      <p>{item.title}</p>
      <button onClick={remove}>
        <i className="fa-regular fa-trash-can"></i>
      </button>
    </li>
  );
};

export default Item;
