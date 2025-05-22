import React, { useState } from "react";

export default function TextForm(props) {

  // here we are using the toUpperCase() method to convert the text to uppercase.
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    if (text.length === 0) {
      props.showAlert("nothing to convert!", "warning");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("converted to uppercase!", "success");
    }
    // console.log(newText);
    //props.showAlert("converted to uppercase!", "success");
    // here we are using the setText() method to set the text to uppercase.
  };

  // to change the text to lowercase
  // here we are using the toLowerCase() method to convert the text to lowercase.
  const handleDownClick = () => {
    if (text.length === 0) {
      props.showAlert("nothing to convert!", "warning");
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("converted to lowercase!", "success");
    }
  };

  // here we are using the onChange event to change the text in the textarea.
  // onChange event is used to handle the change in the textarea.
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  // here we are using the clear text button to clear the text in the textarea.
  // here we are using the setText() method to set the text to empty string.
  const handleClearText = () => {
    // alert("clear text is clicked!"); to just check the functionality
    if (text.length === 0) {
      props.showAlert("nothing to clear!", "warning");
    } else {
      let newText = "";
      setText(newText);
      props.showAlert("text cleared!", "success");
    }
  };

  // here we are using the copy to clipboard button to copy the text in the textarea.
  // here we are using the navigator.clipboard.writeText() method to copy the text to clipboard.  
  const handleCopyClipboard = () => {
    // here I will write the code to copy the text to clipboard
    if (text.length === 0) {
      props.showAlert("nothing to copy!", "warning");
    } else {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
      props.showAlert("text copied to clipboard!", "success");
    }
  };

  // we are setting the text using the default text and will change with function setText();
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  // text = "new text" // wrong way to change the state
  // setText("new Text");  // correct way to change the state
  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }}
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
          Clear Text
        </button>
        <button
          disabled={text.length === 0} 
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopyClipboard}
          style={{
            backgroundColor: copied ? "green" : "#007bff",
            color: "white",
            border: "none",
            padding: "8px 16px",
            cursor: "pointer",
            borderRadius: "4px",
            transition: "background-color 0.3s",
          }}
        >
          {copied ? "Copied✅" : "Copy Text"}
        </button>
      </div>
      <div className="container my-3">
        <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Your text summary.</h1>
        <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
          {text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length} words and {text.length} character
        </p>
        <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{0.008 * text.split(" ").filter((ele) => { return ele.length !== 0 }).length} minutes needed to read this.</p>
        <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Preview</h2>
        <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{text.length===0?'nothing to preview':text}</p>
      </div>
    </>
  );
}
