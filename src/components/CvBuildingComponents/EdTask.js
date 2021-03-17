import React, { useState, useContext } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { CvContext } from "../../Context/ContextProvider";
const WebTask = ({ parentId, task, index }) => {
  const [taskFocused, setTaskFocused] = useState(false);
  const {
    clickedCategory,
    updateEdTaskInputs,
    addEdTask,
    deleteEdTask,
  } = useContext(CvContext);
  return (
    <>
      <li className="position-relative">
        {taskFocused && (
          <>
            <button
              onMouseDown={() => {
                addEdTask(parentId);
              }}
              className="addTask"
              name="addTask"
            >
              <i className="fas fa-plus-square"></i>
            </button>
            <button
              onMouseDown={() => {
                deleteEdTask(index, parentId);
              }}
              className="deleteTask"
              name="deleteTask"
            >
              <i className="fas fa-trash"></i>
            </button>
          </>
        )}
        <TextareaAutosize
          name="task"
          className={
            clickedCategory === "Web Development"
              ? "editInputs blue sz-14 tasks"
              : clickedCategory === "Digital Marketing"
              ? "editInputs dark-blue sz-14 tasks"
              : "editInputs grey sz-14 tasks"
          }
          placeholder="Task"
          onFocus={() => {
            setTaskFocused(true);
          }}
          onBlur={() => {
            setTaskFocused(false);
          }}
          value={task}
          onChange={(e) => {
            updateEdTaskInputs(e, index, parentId);
          }}
          type="text"
        />
      </li>
    </>
  );
};

export default WebTask;
