import React,  {  useState } from "react";

export default function TextForm(props) {

  const handleUpperCase = () => {


    let newText = text.toUpperCase();
    console.log('hii');
    setText(newText);
  }

  const handleLowerCase = () => {


    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) => {

    console.log('on change');
    setText(event.target.value);
  }

  //Speak Text
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  //Copy Text
  const handleCopyText = () =>{

    var copytext = document.getElementById('exampleFormControlTextarea1');
    copytext.select();
    navigator.clipboard.writeText(copytext.value);

  }

  //remove extra spaces
  const handleExtraSpaces = () =>{

    let textWithExtraSpaces = text.split(/[  ]+/);
    setText(textWithExtraSpaces.join(' '));

  }

  const [text, setText] = useState('');
  //setText('hii nikhil');

  return (
    <>
    <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}} >
       <div className="mb-3">
            <h3>{props.heading}</h3>
            <textarea className="form-control" value={text} id="exampleFormControlTextarea1" style={{backgroundColor: props.mode==='dark'?'#193d3d':'white',color: props.mode==='dark'?'white':'black'}} rows="10" onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperCase}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Convert To LowerCase</button>
        <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
        <button type="submit" onClick={handleCopyText} className="btn btn-primary mx-2 my-2">Copy Text</button>
        <button type="submit" onClick={handleExtraSpaces} className="btn btn-primary mx-2 my-2">Remove Extra Space</button>
    </div>
    
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h3>Text Summery</h3>
            <p>characters:{text.length}</p>
            <p>word:{text.split(" ").length}</p>
            <p>Read Time: {0.008 * text.split(" ").length}</p>
            <h3>Preview</h3>
            <p>{text}</p>
    </div>
    </>
  )
}
