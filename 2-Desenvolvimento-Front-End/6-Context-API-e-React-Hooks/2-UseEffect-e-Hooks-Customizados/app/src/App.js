import React, { useState, useEffect } from 'react';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleChange = ({ target }) => {
    const { value } = target;

    if (value) {
      setTodo(value);
    } else {
      setTodo('');
    };
  };

  const handleClick = () => {
    if (todo.length > 0) {
      setTodoList(todoList.concat(todo));
    };
  };

  const removeFromList = (index) => {
    const arr = [...todoList];
    arr.splice(index, 1);
    setTodoList(arr);
  }

  return (
    <div>
      <input onChange={(event) => handleChange(event)} />
      <button onClick={handleClick}>Add</button>
      <ul>
        { todoList.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={ () => removeFromList(index) }>X</button>
            </li>
        )) }
      </ul>
    </div>
  );
};

export default App;
