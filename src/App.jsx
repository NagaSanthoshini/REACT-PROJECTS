import { useState } from 'react';
import './App.css';
import Todolist from './Todolist';

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);


  const changeHandler = (e) => {
    setTask(e.target.value);
  };


  const submitHandler = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask(""); 
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <>
      <div>
        <center>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">TODO APPLICATION</h5>
              <form onSubmit={submitHandler}>
                <input
                  type="text"
                  name="Task"
                  placeholder="Enter your task"
                  value={task}
                  onChange={changeHandler}
                />{" "}
                &nbsp;&nbsp;
                <input type="submit" value="Add Task" name="Add" /> &nbsp;
              </form>
              <Todolist todolist={todos} deleteTodo={deleteTodo} />
            </div>
          </div>
        </center>
      </div>
    </>
  );
}

export default App;
