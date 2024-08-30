import { useState } from 'react';
import './Input.css';

const Input = ({ add }) => {
  const [text, setText] = useState('');

  const addToList = () => {
    const resultText = text.trim();
    if (resultText === '') {
      return;
    }
    add({ id: Date.now().toString(), title: resultText });
    setText('');
  };

  return (
    <div className="Input mw">
      <input
        type="text"
        placeholder="가고싶은 여행지를 등록하세요"
        value={text}
        onChange={({ target }) => setText(target.value)}
        onKeyUp={(event) => event.key === 'Enter' && addToList()}
      />
      <button onClick={addToList}>Add</button>
    </div>
  );
};

export default Input;
