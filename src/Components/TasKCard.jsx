import { useState, useRef, useEffect } from "react";
import CalendarCard from "./CalendarCard";

function TaskCard({ onAddTask }) {
const [newTask, setNewTask] = useState("");
const [closeTaskCard, setCloseTaskCard] = useState(true);
const [showCalendarCard, setShowCalendarCard] = useState(false);
const addButtonRef = useRef(null);

const handleCalendarCard = () => {
setShowCalendarCard(!showCalendarCard);
};

const handleCloseTaskCard = () => {
setCloseTaskCard(!closeTaskCard);
};

const handleAddTask = () => {
if (newTask.trim() !== "") {
  onAddTask(newTask);
  setNewTask("");
  handleCloseTaskCard();
}
};

useEffect(() => {
const handleKeyPress = (event) => {
  if (event.key === "Enter") {
    addButtonRef.current.click();
  }
};

document.addEventListener("keydown", handleKeyPress);

return () => {
  document.removeEventListener("keydown", handleKeyPress);
};
}, []);

return (
<>
  {closeTaskCard && (
    <div className="taskcard-container">
      <div className="taskcard-input">
        <input
          type="text"
          className="taskcard-task-input"
          placeholder="Enter Task"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
      </div>
      <div className="taskcard-btns">
        <div>
          <button
            className="taskcard-date-btn"
            onClick={handleCalendarCard}
          >
            Date
          </button>
          {showCalendarCard && <CalendarCard />}
        </div>
        <div className="taskcard-right-btns">
          <button
            className="cancel-task-btn"
            onClick={handleCloseTaskCard}
          >
            Cancel
          </button>
          <button
            className="add-task-btn"
            onClick={handleAddTask}
            ref={addButtonRef}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )}
</>
);
}

export default TaskCard;
