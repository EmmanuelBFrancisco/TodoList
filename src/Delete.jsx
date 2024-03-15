const deleteTask = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };
  
  
  
  
  <ul>
    {todos.map((todo, index) => (
      <li key={index}>
        {todo} <button onClick={() => deleteTask(index)}>Delete</button>
      </li>
    ))}
  </ul>
  