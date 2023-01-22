import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleNewTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleCategoryFilter(category) {
    setSelectedCategory(category);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        onCategoryFilter={handleCategoryFilter} 
      />
      <NewTaskForm onTaskFormSubmit={handleNewTask} categories={CATEGORIES} />
      <TaskList 
        tasks={tasks} 
        selectedCategory={selectedCategory} 
      />
    </div>
  );
}

export default App;

