import StyleContext from "@ant-design/cssinjs/lib/StyleContext";
import { NoStyleItemContext } from "antd/es/form/context";
import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {

const [text,setText] = useState("");
const [category,setCategory] = useState("Code");

function handleSubmit(event) {
  event.preventDefault();
  onTaskFormSubmit({text, category});
  setText("");
  setCategory("Code");
}

return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map(cat => <option key={category} value={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

