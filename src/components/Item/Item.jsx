import './Item.css';

const Item = ({ item, remove }) => {
  return (
    <li className="Item">
      <p>인천 을왕리 해수욕장</p>
      <button>
        <i className="fa-regular fa-trash-can"></i>
      </button>
    </li>
  );
};

export default Item;
