import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Tabs from "./components/Tabs.jsx";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  const [todos, setTodos] = useState([
    { input: "Hello! add your first todo!", complete: true },
    { input: "Get the groceries!", complete: false },
    { input: "Learn how to web design", complete: false },
    { input: "Say hi to gran gran", complete: true },
  ]);

  const [selectedTab, setSelectedTab] = useState("Open");

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleCompleteTodo(index) {
    console.log(index);

    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo["complete"] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(currTodos) {
    localStorage.setItem("todo-db", JSON.stringify({ todos: currTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-db")) return;
    let db = JSON.parse(localStorage.getItem("todo-db"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
        selectedTab={selectedTab}
        todos={todos}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
