import './Input.css';

const Input = () => {
  return (
    <div className="Input mw">
      <input type="text" placeholder="가고싶은 여행지를 등록하세요" />
      <button>
        Add <i className="fa-solid fa-circle-plus" />
      </button>
    </div>
  );
};

export default Input;
