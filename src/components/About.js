import React,  {  useState } from "react";


export default function About(props) {

    const [myStyle, setMyStyle] = useState({ color:'white', backgroundcolor: 'black' });

    const [btnText, setBtnText] = useState('Dark Mode');

    const  toggleStyle = () => {

        if(myStyle.color === 'white'){

            setMyStyle(
                { color:'black', backgroundColor: 'white' }

            )
            setBtnText('Light Mode');

        }
        else
        {
            setMyStyle(
                { color:'#000', backgroundColor: 'black' }

            )
            setBtnText('Dark Mode');
        }

    }

  return ( 
    <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong style={{color: props.mode==='dark'?'gray':'black'}}> Text Utilities gives you a way to analyze your text quickly and efficiently. Be it word count, character count and make text in uppercase or lower case.</strong> 
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong style={{color: props.mode==='dark'?'gray':'black'}}>Text Utilities is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</strong> 
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong> rowser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong style={{color: props.mode==='dark'?'gray':'black'}}>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</strong> This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera.
            </div>
            </div>
        </div>
        </div>
        <div className="container my-3">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
        </div>
    </div>
  )
}
