import React from "react";
import TodoCard from "./TodoCard.jsx";

export default function TodoList(props) {
  const { todos } = props;
  const tab = "All";
  const filterTodosList =
    tab === "All"
      ? todos
      : tab === "Complete"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);
  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        return <TodoCard key={todoIndex} todo={todo} />;
      })}
    </>
  );
}
