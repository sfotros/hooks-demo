import React, { useState } from 'react';

const RandomHook = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);
  const [listName, setListName] = useState([]);
  const [currentName, setCurrentName] = useState('');

  const addName = () => {
    let temp = [...listName];
    temp.push(currentName);
    setListName(temp);
    setCurrentName('');
  };

  return (
    <div>
      <h1>Counter Hook</h1>
      <span>Count = {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <h2>{name}</h2>
      <input
        type='text'
        name=''
        value={name}
        placeholder='NAME:'
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      {show && <h2>I am on the Screen now</h2>}
      <button onClick={() => setShow(!show)}>Show</button>
      <p>;</p>
      <p>;</p>
      <p>;</p>
      <p>;</p>
      <input
        type='text'
        value={currentName}
        onChange={(e) => setCurrentName(e.target.value)}
      />
      <button onClick={addName}>ADD NAME</button>
      {listName.map((name, index) => {
        return <p key={index}>{name}</p>;
      })}
    </div>
  );
};
export default RandomHook;
