import logo from "./logo.svg";
import React from "react";
import { TodoItem } from "./srcs/TodoItem";
import { TodoList } from "./srcs/TodoList";
import "./App.css";

const todos = [
  { text: "PRACTICAR", completed: false },
  { text: "AJUSTAR CUENTAS", completed: false },
  { text: "CELEBRAR", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <div className="BoxFather4"></div>
      <div className="BoxFather">
        <h1 className="h1sc">Crea Una Nueva Tarea</h1>
        <h2 className="h2sc">Nombre de tarea</h2>
        <input className="inputxd" type="text" placeholder="¿Algo mas?"></input>
      </div>
      <button className="CreateTodoButton">+</button>
      <img
        width="300"
        height="300"
        className="UFA"
        src="https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-png-42.png"
      ></img>
      <div className="BoxFather1"></div>
      <div className="BoxFather2">
        <h1 className="h1sc1">TUS TAREAS</h1>
        <h2 className="h2sc1">3 de 5 Completas</h2>
        <input
          className="inputxd1"
          type="text"
          placeholder="Busquemos..."
        ></input>
      </div>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <div className="ufasaurio"></div>
    </React.Fragment>
  );
}

export default App;
