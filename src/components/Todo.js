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
  let [inputText, setinputText] = useState("");

  let [todoList, setTodoList] = useState(getDataAndUpdate());

  let [editId, setEditId] = useState("");

  const addBtn = document.getElementById("myBtn");

  const handleInputText = function (event) {
    let getValue = event.target.value;

    setinputText(getValue);
  };

  const addList = (e) => {
    if (e.target.innerText === "Add") {
      var error = document.getElementById("error");
      if (inputText === "") {
        error.textContent = "Please enter a input";
        error.style.color = "red";
      } else {
        error.textContent = "";
        let newtodoItems = {
          taskName: inputText,
        };

        let updatedTodoArray = [...todoList];

        updatedTodoArray.push(newtodoItems);

        setTodoList(updatedTodoArray);

        setinputText("");
      }
    } else {
      let list = [...todoList];

      list.splice(editId, 1, { taskName: inputText });
      setTodoList(list);
      addBtn.innerText = "Add";
      setinputText("");
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
    setinputText("");
  }
  function editItem(id) {
    const editlist = [...todoList];
    const getTaskName = editlist[id].taskName;

    setinputText(getTaskName);

    addBtn.innerText = "Save Change";

    setTodoList(editlist);
    setEditId(id);
  }
  function handleChecked(e, index) {
    if (e.target.checked === true) {
      console.log("checked");
    } else console.log("unchecked");
  }

  return (
    <>
      <div className="form">
        <input
          className="inputBox"
          type="text"
          placeholder="take a note"
          onChange={handleInputText}
          value={inputText}
        ></input>

        <button className="addBtn" id="myBtn" type="button" onClick={addList}>
          Add
        </button>
      </div>
      <p id="error"></p>

      <hr />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Task Name</th>
              <th>Checklist</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.taskName}</td>
                  <td>
                    <input
                      type="checkbox"
                      name="checklist"
                      onClick={(e) => handleChecked(e, index)}
                    />
                  </td>
                  <td>
                    <button
                      className="deleteBtn"
                      onClick={() => deleteItem(index)}
                    >
                      del
                    </button>
                    <button className="editBtn" onClick={() => editItem(index)}>
                      edit
                    </button>
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
