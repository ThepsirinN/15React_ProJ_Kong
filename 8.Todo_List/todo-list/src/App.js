import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List";
import Alert from "./components/Alert";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [showState, setShowState] = useState({
    show: false,
    title: "",
    color: "",
  });

  const [checkEditStatus, setCheckEditStatus] = useState(false);
  const [editID, setEditID] = useState(-1);

  const handleOnClickSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      // null
      setShowState({
        show: true,
        title: "You must enter data",
        color: "red-error",
      });
    } else if (checkEditStatus && todo) {
      //edit
      const updateResult = todoList.map((element) => {
        if (element.id === editID) {
          return { ...element, title: todo };
        }
        return element;
      });
      setTodoList(updateResult);
      setShowState({
        show: true,
        title: "Successfully Update Todo",
        color: "edit-succ",
      });
      setCheckEditStatus(false);
      setEditID(-1);
      setTodo("");
    } else {
      // add
      setTodoList((prev) => {
        const newItem = [
          ...prev,
          {
            id: uuidv4(),
            title: todo,
          },
        ];
        return newItem;
      });
      setShowState({
        show: true,
        title: "Successfully add todo",
        color: "success",
      });
      setTodo("");
    }
  };

  const removeItem = (id) => {
    const removedTodo = todoList.find((todo) => todo.id === id);
    console.log(removedTodo);
    const newTodo = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodo);
    setShowState({
      show: true,
      title: `Successfully remove ${removedTodo.title}`,
      color: "pink-delete",
    });
  };

  const editItem = (id) => {
    const edittedTodo = todoList.find((todo) => todo.id === id);
    setCheckEditStatus(true);
    setEditID(id);
    setTodo(edittedTodo.title);
  };

  return (
    <section className="container">
      <h1>Todo List App</h1>
      <Alert
        showState={showState}
        setShowState={setShowState}
        todoList={todoList}
      />
      <form className="form-group" onSubmit={handleOnClickSubmit}>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            value={todo}
            onChange={({ target }) => {
              setTodo(target.value);
            }}
          />
          <button type="submit" className="submit-btn">
            {checkEditStatus ? "Edit Todo" : "Add Todo"}
          </button>
        </div>
      </form>
      <section className="list-container">
        {todoList.map((todo, index) => {
          return (
            <List
              key={index}
              title={todo.title}
              id={todo.id}
              removeItem={removeItem}
              editItem={editItem}
            />
          );
        })}
      </section>
    </section>
  );
}

export default App;
