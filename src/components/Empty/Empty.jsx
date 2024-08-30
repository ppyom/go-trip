import './Empty.css';

const Empty = ({ name = '리스트' }) => {
  return (
    <div className="Empty">
      <i className="fa-regular fa-clipboard" />
      <p>등록된 {name}가 없습니다.</p>
    </div>
  );
};

export default Empty;
