import React from "react";

import { useState, useEffect } from "react";

//get local data and update to  todolist
function getDataAndUpdate() {
  const strData = localStorage.getItem("data");

  if (strData) {
    return JSON.parse(strData);
  } else {
    return [];
  }
}

function Todo() {
  let [todoTitle, setTodoTitle] = useState("");
  let [todoDescription, setTodoDescription] = useState("");

  let [todoList, setTodoList] = useState(getDataAndUpdate());

  let [editId, setEditId] = useState("");

  const addBtn = document.getElementById("myBtn");

  const handleInputText = function (event) {
    let getValue = event.target.value;

    setTodoTitle(getValue);
  };

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
    let reducelist = [...todoList];
    reducelist.splice(id, 1);

    setTodoList(reducelist);
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
    <>
      <hr />
      <div className="table-container table-danger">
        <table>
          <thead>
            <tr>
              <th width="10%">SL No.</th>
              <th width="20%">Task Name</th>
              <th width="45%">Discription</th>
              <th width="25%">Action</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((item, index) => {
              console.log("item: ", item);
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.taskName}</td>
                  <td>{item.discription}</td>
                  <td>
                    <i
                      className="delete-icon"
                      class="fa-solid fa-trash mx-2"
                      onClick={() => deleteItem(index)}
                    ></i>

                    <i
                      className="edit"
                      class="fa-solid fa-pen-to-square mx-2"
                      onClick={() => editItem(index)}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Todo;
