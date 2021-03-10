import React from "react";

const Input = ({ input, onChange }) => {
  return (
    <div className="container form-group">
      <textarea
        value={input}
        placeholder="Enter Custom Input"
        onChange={onChange}
        name="input"
        type="text"
        id={input}
        className="form-control"
        style={{ height: 500, width: 1000, backgroundColor: "black", boxSizing: "fixed" }}
      ></textarea>
    </div>
  );
};

export default Input;
