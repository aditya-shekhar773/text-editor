import React, { useState } from 'react'

const Text = (props) => {

    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        let oldText = text.toLowerCase();
        setText(oldText)
    }

    const handleClearClick = () =>{
        let clear = "";
        setText(clear)
        
    }

    const handleOnChange = (e) => {
        console.log("on Change");
        setText(e.target.value)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }    

  return (
    <div className='ml-10 mt-6 text-black'>
        <h1 className='text-5xl font-semibold'>{props.heading}</h1>
        <div className='flex gap-2 mt-2'>
            <button disabled={text.length===0} className='bg-green-400 px-2 py-2 rounded-lg hover:bg-green-800' onClick={handleUpClick}>Uppercase</button>
            <button disabled={text.length===0} className='bg-green-400 px-2 py-2 rounded-lg hover:bg-green-800' onClick={handleLoClick}>Lowercase</button>
            <button disabled={text.length===0} className='bg-green-400 px-2 py-2 rounded-lg hover:bg-green-800' onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className='bg-green-400 px-2 py-2 rounded-lg hover:bg-green-800' >Sentence Case</button>
            <button disabled={text.length===0} className='bg-green-400 px-2 py-2 rounded-lg hover:bg-green-800' >Download Text</button>
            <button disabled={text.length===0} className='bg-green-400 px-2 py-2 rounded-lg hover:bg-green-800' onClick={handleCopy}>Copy Text</button>
        </div>
        <form className='rounded-lg  bg-white p-2 shadow-xl block max-w-7xl mt-1'>
            <textarea className='w-full border text-lg text-black focus:ring-blue-500' onChange={handleOnChange} value={text} placeholder='Enter any text' rows="12"></textarea>
            <div className='ml-1'>
                <h2 className='text-black font-semibold text-2xl'>Your Text Summery</h2>
                <p className='font-semibold'>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} chracter</p>
            </div>
        </form>
    </div>
  )
}

export default Text
