import Header from "./components/Header/Header";
import "./App.css";
import { Form } from "./components/Form";
import { useState, useEffect } from "react";
import { ListItems } from "./components/ListItems";
import { TypeWriter } from "./components/TypeWriter";
function getDataFromLocal() {
  const strData = localStorage.getItem("data");

  if (strData) {
    return JSON.parse(strData);
  } else {
    return [];
  }
}

function App() {
  let [todoTitle, setTodoTitle] = useState("");
  let [todoDescription, setTodoDescription] = useState("");

  let [todoList, setTodoList] = useState(getDataFromLocal());

  let [editId, setEditId] = useState("");

  const addBtn = document.getElementById("myBtn");
  var error = document.getElementById("error");

  const addList = (e) => {
    if (e.target.innerText === "Add") {
      if (todoTitle === "" || todoDescription === "") {
        error.textContent = "Please enter a input";
        error.style.color = "red";
      } else {
        let newtodoItems = {
          taskName: todoTitle,
          discription: todoDescription,
        };

        let updatedTodo = [...todoList];

        updatedTodo.push(newtodoItems);

        setTodoList(updatedTodo);

        setTodoTitle("");
        setTodoDescription("");
      }
      //if innerText of button is  save then
    } else {
      let list = [...todoList];

      list.splice(editId, 1, {
        taskName: todoTitle,
        discription: todoDescription,
      });

      setTodoList(list);
      addBtn.innerText = "Add";
      setTodoTitle("");
      setTodoDescription("");
    }
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(todoList));
  }, [todoList]);

  function deleteItem(id) {
    let delList = [...todoList];
    delList.splice(id, 1);

    setTodoList(delList);
    addBtn.innerText = "Add";
    setTodoTitle("");
    setTodoDescription("");
  }
  function editItem(id) {
    const editlist = [...todoList];
    const getTaskName = editlist[id].taskName;
    const getDiscription = editlist[id].discription;

    setTodoTitle(getTaskName);
    setTodoDescription(getDiscription);

    addBtn.innerText = "Save";

    setTodoList(editlist);

    setEditId(id);
  }

  return (
    <div className="App">
      <Header taskTitle="Todo App" />
      <Form
        titleValue={todoTitle}
        discriptionValue={todoDescription}
        onChangeTitle={(e) => {
          setTodoTitle(e.target.value);
          {
            error.textContent = "";
          }
        }}
        onChangeDiscription={(e) => {
          setTodoDescription(e.target.value);
          {
            error.textContent = "";
          }
        }}
        addList={addList}
      />
      <span id="error"></span>

      <ListItems
        todoList={todoList}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    </div>
  );
}

export default App;
