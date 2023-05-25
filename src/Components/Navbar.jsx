import { useState, useRef, useEffect } from "react";
import TaskCard from "./TasKCard";
import ProfileCard from "./Profile";

function NavBar({ addTask }) {
  const [showTaskCard, setShowTaskCard] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const addTaskBtn = useRef(null);

  const handleTaskCard = () => {
    setShowTaskCard(!showTaskCard);
  };

  const handleProfileCard = () => {
    setShowProfileCard(!showProfileCard);
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.shiftKey && event.code === "KeyA") {
        addTaskBtn.current.click();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="nav-container">
          <div className="left-side">
            <button className="nav-btn">Today</button>
            <button className="nav-btn">Upcoming</button>
          </div>
          <h1 className="nav-brand">Check</h1>
          <div className="right-side">
            <div>
              <button
                className="nav-btn"
                onClick={handleTaskCard}
                ref={addTaskBtn}
              >
                Add Task
              </button>
              {showTaskCard && <TaskCard onAddTask={addTask} />}
            </div>
            <div>
              <button className="nav-btn" onClick={handleProfileCard}>Profile</button>
              {showProfileCard && <ProfileCard/>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
