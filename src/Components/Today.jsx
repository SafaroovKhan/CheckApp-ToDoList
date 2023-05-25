function Today({ tasks, addTask, deleteTask }) {
  const today = new Date();
  const dateOptions = { weekday: "short", month: "short", day: "numeric" };
  const dateString = today.toLocaleDateString("en-US", dateOptions);
  
  const handleDeleteTask = (index) => {
    deleteTask(index);
  };

  return (
    <div className="today">
      <div className="today-container">
        <div className="today-date">
          <h1 className="today-date-header">Today</h1>
          <p className="today-date-text">{dateString}</p>
        </div>
        <div className="today-tasks">
          <ol className="today-task-list">
            {tasks.map((task, index) => (
              <div className="today-task">
                <input type="checkbox" className="check-task-box"/>
                <li className="today-task-text" key={index}>{task}</li>
                <button className="task-del-btn" onClick={() => handleDeleteTask(index)}>
                  <i className="fa-solid fa-trash del-task-icon"></i>
                </button>
              </div>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Today;
