import React from "react";

const TextToggle = ({ title, label, show, setShow }) => {
  return (
    <div>
      <h2>
        {title}
        <button onClick={() => setShow(!show)} style={{ float: "right" }}>
          {show ? "hide" : "show"}
        </button>
      </h2>
      {show && <p>{label}</p>}
    </div>
  );
};

export default TextToggle;
