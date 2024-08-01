import React, {useState} from 'react'


export default function TextForm(props) {
    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value)
    }

    const handleUpClick = () =>{
        console.log("Upper Case Button Clicked!");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () =>{
        console.log("Upper Case Button Clicked!");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been copied to clipboard!", "success");
    }

    const handleSentenceCase=()=>{
        console.log("Lower Case button clicked!"+""+text);
        let newText=text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(newText)
    }

    const [text, setText] = useState('');
  return (
    <>
        <div>
            <div className="mb-3 my-5" style={{color: props.mode==='warning'?'black':'white'}}>
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{backgroundColor: props.mode==='warning'?'white':'#232d38', color:props.mode==='warning'?'black':'white'}}></textarea>
                    <button type="button" className="btn btn-secondary my-2" onClick={handleUpClick}>UPPERCASE</button>
                    <button type="button" className="btn btn-secondary mx-3" onClick={handleLowClick}>lowercase</button>
                    <button type="button" className="btn btn-secondary mx-1" onClick={handleCopy}>Copy to Clipboard</button>
                    <button type="button" className="btn btn-secondary mx-3" onClick={handleSentenceCase}>Sentence Case</button>
            </div>
        </div>
        <div className="container" style={{color: props.mode==='warning'?'black':'white'}}>
            <h2>Text Sumamry</h2>
            <p><b>{(text.split(" ").length)-1} </b>Words and <b>{text.length} </b>letters.</p>
            <p>{(0.008 * ((text.split(" ").length)-1)).toFixed(3)} minutes read.</p>
            <h2>Preview: </h2>
            <p>{text.length>0?text:"Enter something in the text box above to preview it here."}</p>
        </div>
    </>
  )
}
