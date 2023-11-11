import React from "react";

function TextBox({ className, value, onChange, id, style, placeholder, type, defaultValue }) {
  return (
    <input
      className={`${className} text-box`}
      id={id}
      onChange={onChange}
      value={value}
      style={style}
      defaultValue={defaultValue}
      placeholder={placeholder ? placeholder : "type here..."}
      type={type ? type : "text"}
    />
  );
}

export default TextBox;
