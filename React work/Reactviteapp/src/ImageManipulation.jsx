import React, { useState } from 'react'
import cat from './download.jpeg'
import './imgman.css'

function ImageManipulation() {
    const[height,setHeight]=useState(100);
    const[width,setWidth]=useState(100);
    const[angle,setAngle]=useState(30);
    const[red,setRed]=useState();
    const[green,setGreen]=useState();
    const[blue,setBlue]=useState();



    function enhanceHeight(){
        setHeight(height+20)

    }
    function enhanceWidth(){
        setWidth(width+20)
    }
    function dorotate(){
        setAngle(angle+30);

    }
    function changecolor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    
    }
  return (
    <div className='container'>
        <div style={{marginTop:'70px',marginLeft:'200px',height:'200px',width:'200px',border:'2px solid red',backgroundColor:`RGB(${red},${green},${blue})`}}>
            <img src={cat} height={height} width={width} style={{transform:`rotate(${angle}deg)`}} alt='cat image' />
        </div>
        <div style={{marginTop:'100px',border:'2px solid red',paddingLeft:'40px'}}>
            <button onClick={enhanceHeight}> Enhance Height</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={enhanceWidth}>EnhanceWidth</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={changecolor}>ColorChange</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={dorotate}>Rotate</button>
        </div>
    </div>
  )
}

export default ImageManipulation