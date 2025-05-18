import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        // console.log(newText);
    }

    const handleDownClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        // console.log(newText);
    }
    
    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value)
    }

    const handleClearText = () =>{
      // alert("clear text is clicked!"); to just check the functionality
      if(text.length === 0){
        alert("nothing to clear!");
      }else{
        let newText = '';
        setText(newText);
      }
    }
    const handleCopyClipboard = () =>{
      // here I will write the code to copy the text to clipboard
      if(text.length === 0){alert("nothing to copy!");}
      else{
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(()=> setCopied(false),1000);
      }
    }

    // we are setting the text using the default text and will change with function setText();
    const [text,setText] = useState('');
    const [copied,setCopied] = useState(false);
    // text = "new text" // wrong way to change the state
    // setText("new Text");  // correct way to change the state
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleDownClick}>Convert to LowerCase</button> 
        <button className="btn btn-primary" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary mx-3" onClick={handleCopyClipboard} style={{
          backgroundColor: copied ? 'green' : '#007bff',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          cursor: 'pointer',
          borderRadius: '4px',
          transition: 'background-color 0.3s',
        }}>{copied ? 'Copied✅' : 'Copy'}</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary.</h1>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length} minutes needed to read this.</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
