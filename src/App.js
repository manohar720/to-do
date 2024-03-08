import Todo from "./components/Todo";
import Header from "./components/Header/Header";
import "./App.css";
import { Form } from "./components/Form";
import { useState, useEffect } from "react";
import { ListItems } from "./components/ListItems";
function getDataAndUpdate() {
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

  let [todoList, setTodoList] = useState(getDataAndUpdate());

  let [editId, setEditId] = useState("");

  const addBtn = document.getElementById("myBtn");

  const addList = (e) => {
    if (e.target.innerText === "Add") {
      var error = document.getElementById("error");
      if (todoTitle === "" || todoDescription === "") {
        error.textContent = "Please enter a input";
        error.style.color = "red";
      } else {
        error.textContent = "";
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
    } else {
      let list = [...todoList];

      list.splice(editId, 1, { taskName: todoTitle });
      list.splice(editId, 1, { discription: todoDescription });
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
  }
  function editItem(id) {
    console.log("id: ", id);

    const editlist = [...todoList];
    const getTaskName = editlist[id].taskName;
    const getDiscription = editlist[id].discription;

    setTodoTitle(getTaskName);
    setTodoDescription(getDiscription);

    addBtn.innerText = "Save Change";

    setTodoList(editlist);

    setEditId(id);
  }

  return (
    <div className="App">
      <Header taskTitle="Todo" />
      <Form
        titleValue={todoTitle}
        discriptionValue={todoDescription}
        onChangeTitle={(e) => setTodoTitle(e.target.value)}
        onChangeDiscription={(e) => setTodoDescription(e.target.value)}
        addList={addList}
      />
      <ListItems
        todoList={todoList}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    </div>
  );
}

export default App;
