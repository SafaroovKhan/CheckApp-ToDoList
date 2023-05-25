import {useState} from "react";
import './App.css'
import NavBar from './Components/Navbar'
import Today from './Components/Today';

function App() {
    const [tasks, setTasks] = useState([]);
  
    const addTask = (newTask) => {
      setTasks([...tasks, newTask]);
    };

    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
      };
  
    return (
      <>
        <NavBar addTask={addTask} />
        <Today tasks={tasks} deleteTask={deleteTask} />
      </>
    );
}

export default App
  

  
