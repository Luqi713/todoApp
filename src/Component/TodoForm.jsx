import React, { useState } from "react";

function TodoForm() {
  const [date, setDate] = useState("");
  const [work, setWork] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddWork = () => {
    if (work !== "") {
      let data = {
        time: date,
        Work: work,
      };
      let newItem = [...todoList, data];
      setTodoList(newItem);
      setWork("");
      console.log(todoList);
    }
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <input
              className="form-control"
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className="col-6">
            <input
              className="form-control"
              type="text"
              placeholder="Work description"
              value={work}
              onChange={(e) => {
                setWork(e.target.value); // Corrected from setdate to setWork
              }}
            />
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleAddWork}
            >
              Add Work
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        {todoList.length > 0 ? (
          <table className="table table-success table-striped">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Work Description</th>
              </tr>
            </thead>
            <tbody>
              {todoList.map((item, index) => (
                <tr key={index}>
                  <td>{item.time}</td>
                  <td>{item.Work}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No items to display</p>
        )}
      </div>
    </>
  );
}

export default TodoForm;
