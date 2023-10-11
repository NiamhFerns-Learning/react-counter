import React, { useState } from 'react';
import './App.css';

function Button({ handleClick }: any) {
  return (
    <>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>Count: {count}</h2>
      <Button handleClick={onClick} />
    </>
  );
}

function App() {
  return (
    <div className='App'>
      <h1>Counter</h1>
      <Counter />
    </div>
  );
}

export default App;
