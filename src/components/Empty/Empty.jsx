import './Empty.css';

const Empty = () => {
  return (
    <li className="Empty">
      <i className="fa-regular fa-clipboard" />
      <p>등록된 여행지가 없습니다.</p>
    </li>
  );
};

export default Empty;
