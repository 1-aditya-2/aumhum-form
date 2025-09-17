import React from "react";
import "../styles/InputField.css";

const InputField = ({ label, name, value, onChange }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
