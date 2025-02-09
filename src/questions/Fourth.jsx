//make a todo list INSERT , UPDATE, DELETE FUNCTIONALITY

import React, { useState } from "react";

const Fourth = () => {
  const [text, setText] = useState("");
  const [value, setValue] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleClick = () => {
    if (text.trim() === "") return;

    if (editIndex !== null) {
      const updatedIndex = value.map((item, index) =>
        index === editIndex ? text : item
      );
      setValue(updatedIndex);
      setEditIndex(null);
    } else {
      setValue([...value, text]);
    }
    setText("");
  };

  const handleDelete = (indexValue) => {
    const deleteInput = value.filter((_, index) => {
      return indexValue !== index;
    });
    setValue(deleteInput);
  };

  const handleUpdate = (index) => {
    setText(value[index]);
    setEditIndex(index);
  };

  return (
    <>
      {editIndex !== null ? (
        <div>
          Add-:{" "}
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleClick}>Update</button>
        </div>
      ) : (
        <div>
          Add-:{" "}
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleClick}>Add</button>
        </div>
      )}
      <div>
        <ul>
          {value.map((item, index) => (
            <li key={index}>
              {item} <button onClick={() => handleDelete(index)}>Delete</button>{" "}
              <button onClick={() => handleUpdate(index)}>Update</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Fourth;
