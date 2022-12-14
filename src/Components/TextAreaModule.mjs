import React, { useState } from "react";

export default function TextAreaModule() {

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleOnLowerCase = ()=>{
        setText(text.toLowerCase());
    }

    const handleOnUpperCase = ()=>{
        setText(text.toUpperCase());
    }

    const handleOnCamelCase = ()=>{
        setText(text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()));
    }

    const handleOnSentenceCase = ()=>{
      //setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
      setText(SentenceCase(text));
    }
    const handleOnAlternateCase = ()=>{
      setText(text.split('').map((c,i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join(''));
    }

    const handleOnTitleCase = ()=>{
      setText(text.toLowerCase().replace(/\b\w/g, s => s.toUpperCase()));
    }

    function SentenceCase(str) {
      var sentence = str.toLowerCase().split(".");
      for(var i = 0; i< sentence.length; i++){
        sentence[i] = sentence[i].trim();
        sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1).toLowerCase();
      }
      return sentence.join(". ");
   }

   const handleOnCopyText = ()=>{
    navigator.clipboard.writeText(text);
  }
  
  const handleOnClearText = ()=>{
    setText("");
  }

  const handleExtraSpaces = ()=>{
    setText(text.split(/[ ]+/).join(" "));
  }

  const [text, setText] = useState("");

  return (
    <>
      <div className="form-group my-3">
        <h2>Enter your text</h2>
        <textarea className="form-control" id="mytextarea" rows="8" value={text} onChange={handleOnChange}></textarea>
      </div>
      <div className="my-3">
        <button type="button" className="btn btn-primary" onClick={handleOnLowerCase}>Lowercase</button>
        <button type="button" className="mx-1 btn btn-primary" onClick={handleOnUpperCase}>Uppercase</button>
        <button type="button" className="mx-1 btn btn-primary" onClick={handleOnCamelCase}>Camel Case</button>
        <button type="button" className="mx-1 btn btn-primary" onClick={handleOnSentenceCase}>Sentence Case</button>
        <button type="button" className="mx-1 btn btn-primary" onClick={handleOnTitleCase}>Title Case</button>
        <button type="button" className="mx-1 btn btn-primary" onClick={handleOnAlternateCase}>Alternate Case</button>
        <button type="button" className="mx-1 btn btn-primary"onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button type="button" className="mx-1 btn btn-primary" onClick={handleOnCopyText}>Copy Text</button>
        <button type="button" className="mx-1 btn btn-primary" onClick={handleOnClearText}>Clear Text</button>
      </div>
      <div className="container">
        <h2>Text Summary</h2>
        <p>{text.length === 0 ? 0 : text.split(" ").length} words, {text.length} characters</p>
        <p>{text.length === 0 ? 0 : 0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
