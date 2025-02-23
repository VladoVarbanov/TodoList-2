import React from "react";
import TodoCard from "./TodoCard.jsx";

export default function TodoList(props) {
  const { selectedTab, todos } = props;
  const filterTodosList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);

  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        let realIndex;
        todos.find((val, valIndex) => {
          if (val.input === todo.input) {
            realIndex = valIndex;
          }
        });

        return (
          <TodoCard
            key={todoIndex}
            todo={todo}
            todoIndex={realIndex}
            {...props}
          />
        );
      })}
    </>
  );
}
