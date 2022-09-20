import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpperClick = ()=>{
        //console.log("uppercase was clicked");
        let NewText = text.toUpperCase();
        setText(NewText);
        props.showAlert("convert to upper case","success");
    }
    const handleOnChange = (event)=>{
        //console.log("on change");
        setText(event.target.value)  //textarea ke inside type krne ke liye
    }
    const handleLowerClick = ()=>{
        let NewText = text.toLowerCase();
        setText(NewText);
        props.showAlert("convert to lower case","success");
    }
    const handleReverseClick = ()=>{
        let NewText = text.split('').reverse().join('');
        setText(NewText);
    }
    const handleClearClick = ()=>{
        let NewText = ('');
        setText(NewText);
    }

    const [text, setText] = useState('');
    //text = 'new text' //wrong way to change the state
    //setText("new");  // correct way to change the state
    return (
        <>
        <div className='container'style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='light'? 'white' :'grey',
                   color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpperClick}>Convert to uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLowerClick}>Convert to uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleReverseClick}>Convert to reversecase</button>
            <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear</button>
        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
             <h1>Your text summary</h1>
             <p>{text.split(" ").length} words and {text.length} characters</p>
             <p>{0.008* text.split(" ").length} Mnitues read</p> 
             <h2>Perview</h2>
              <p>{text.length>0 ? text : "enter something in preview box"}</p>
        </div>
        </>
    )
}
