import React, { useState } from "react";

export default function Textform(props) {
  const handleUPPERclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase", "success");
  };
  const handleCopy = () => {
    let Copytext = document.getElementById("mybox");
    Copytext.select();
    navigator.clipboard.writeText(Copytext.value);
    props.showAlert("Text Copied", "success");
  };
  const handlelowerclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase", "success");
  };
  const handleResetclick = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label">
            <h2
              style={{
                backgroundColor:
                  props.mode === "dark" ? "rgb(22 40 56)" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              {props.heading}
            </h2>
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="3"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
              // color: "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 " onClick={handleUPPERclick}>
          UPPER
        </button>
        <button className="btn btn-primary mx-1" onClick={handlelowerclick}>
          lower
        </button>
        <button className="btn btn-primary mx-1" onClick={handleResetclick}>
          reset
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy To ClipBoard
        </button>
      </div>
      <div className="container">
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {text.split(" ").length - 1} Word(s) and {text.length} Character(s)
          {/* {{text.split(" ")===''}} Word(s) and {text.length} Character(s) */}
        </p>
      </div>
    </>
  );
}
