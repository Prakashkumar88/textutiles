import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Upper Case", "success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lower Case", "success");
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);

    // Reset the "Copied" state after a short delay (e.g., 2 seconds)
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control dark-mode" value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : '#121212',
              color: props.mode === 'dark' ? 'white' : 'black'
            }} id="myBox" rows="8"
            placeholder="Enter the Text...">
          </textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Upper Case</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lower Case</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear the Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy</button>
        {isCopied && <span className="text-success mx-2">Copied!</span>}
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((elemnt => { return elemnt.length != 0 })).length} word and {text.length} characters</p>
        <p>Time To Read The Content : {Math.abs(0.008 * (text.split(" ").filter((elemnt => { return elemnt.length != 0 })).length))}</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing To preview."}</p>
      </div>
    </>
  );
}
