import React, { useEffect, useState } from 'react';
import './App.css';

import TodoList from './components/todoList';
import { dotoListStateInterFace } from './interface';

function App() {

  const [todoList, setTodoList] = React.useState<dotoListStateInterFace>({
    isPending: [
      {
        id: 1,
        title: "test1"
      },
      {
        id: 2,
        title: "test2"
      },
      {
        id: 3,
        title: "test3"
      },
      {
        id: 4,
        title: "test4"
      }
    ],
    isDone: [
      {
        id: 2,
        title: "test2"
      }
    ]
  });

  useEffect(() => {
    getAllTodoList()
  }, []);

  function getAllTodoList() {

  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList 
        setTodoList={setTodoList}
        todoList={todoList}
      />
    </div>
  );
}

export default App;
