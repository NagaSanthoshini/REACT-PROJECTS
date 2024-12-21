import React from 'react';

const Todolist = ({ todolist, deleteTodo }) => {
  return (
    <div>
      {todolist.map((todo, index) => (
        <div key={index}>
          <h5>
            {todo} &nbsp;
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default Todolist;
