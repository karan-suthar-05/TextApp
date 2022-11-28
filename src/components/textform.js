import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
         let newText = text.toUpperCase();
         setText(newText);
         props.ShowAlert("Converted to Uppercase..","success");
 
    }
    const handleLwClick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.ShowAlert("Converted to Lowercase..","success");
    }
    const handleReClick = ()=>{
        let newtext="" ;
        let i;
        for(i=text.length-1;i>=0;i--)
        {
            newtext += text[i];
        }
        // console.log(newtext);
        setText(newtext);
        props.ShowAlert("Converted to Reverse..","success");
    }
    const handleClClick = ()=>{
        setText("");
        props.ShowAlert("Cleare Text..","success");
    }
    const handleChange = (event)=>{
        // console.log("onchange");
        setText(event.target.value);
    }
    const handleCoClick = ()=>{
        navigator.clipboard.writeText(text);
        props.ShowAlert("Copy Text..","success");
    } 
    const handlespClick = ()=>{
        let newText = text.split(/[ ] + /);
        setText(newText.join(" ")); 
        props.ShowAlert("Cleare extra spaces..","success");
    }
    const [text,setText] = useState("Enter the text here..");
    // let word = 0;
    // text.split(" ").forEach((e)=>{
    //     if(e!=="")
    //     {
    //         word++;     
    //     }
    // })
    props.changeHome("Home");
    document.title = "Text-Home";
    return (
        <>
    <div className='container'>
       <div className="mb-3"> 
        <h1 className={`my-3 text-${props.TextMode==='light'?'black':'light'}`}>{props.heading}</h1>
        <textarea className={`form-control text-${props.TextMode==='light'?'black':'light'} bg-${props.TextMode==='light'?'light':'dark'}`}  value={text} onChange={handleChange}   id="text" rows="8"></textarea>
        <button disabled={text.length===0} className='btn btn-primary m-2' onClick=         {handleUpClick}>Uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary m-2' onClick=     {handleLwClick}>Lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary m-2' onClick={handleReClick}>Reverse</button> 
        <button disabled={text.length===0} className='btn btn-primary m-2' onClick={handlespClick}>Clear Spaces</button> 
        <button disabled={text.length===0} className='btn btn-primary m-2' onClick={handleCoClick}>Copy</button> 
        <button disabled={text.length===0} className='btn btn-primary m-2' onClick={handleClClick}>Clear</button>
        </div>
    </div>
    <div className={`container my-3 text-${props.TextMode==='light'?'black':'light'}`}>
        <h1>Your text summary : </h1>
        <h3>word :{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} &nbsp;  Characters : {text.length}</h3>
        
        <h4>{0.008 * text.split(/\s+/).filter((e)=>{return e.length!==0}).length} Minutes to read.</h4>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Please enter the text for preview here...'}</p>
    </div>
    </>
  )
}
