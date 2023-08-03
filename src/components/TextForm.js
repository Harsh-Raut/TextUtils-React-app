import React,{useState} from 'react'

export default function TextForm(props) {
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    const handleUpClick=()=>{
        // console.log("uppercase btn cliclked"+text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to Upper Case","success")
    }
    const handleLoClick=()=>{
        // console.log("uppercase btn cliclked"+text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to Lower Case","success")

    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const[text,setText]=useState("");
    
  return (
    <>
        <div className="conatiner" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}  onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Upper-case</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lower-case</button>
        <button className="btn btn-primary mx-3" onClick={speak}>Speak</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h1>Your text summary</h1>
            <p>Words: {text.split(" ").length} and characters: {text.length}</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Write something for preview"}</p>
        </div>
   </>
    
  )
}
