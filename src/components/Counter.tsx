import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // Ініціалізація стану

  const increment = () => {
    setCount(count + 1); // Оновлення стану
  };

  const reset = () => {
    setCount(0);
  }

  return (
    <>
      <p>Лічильник: {count}</p>
      <button onClick={increment}>Збільшити</button>
      <button onClick={reset}>Оновити</button>
    </>
  );
};

export default Counter;