import React from 'react'
import { tsPropertySignature } from '@babel/types'
import smallImage1 from './image1.png'
import LowerTaskBar from './LowerTaskBar'
export default function Textbox(props) {
    return (
        <div>
             <div className="image1">
                <img src={smallImage1}></img>
             </div>
            <div className="mainBodyTextBox1">
                <h3>name of person, @symbol, time sinse tweet ,caption , website, </h3>
                <h3>time since tweet</h3>
            <div className="photoBox">
                <h2>hello</h2>
            </div>
            </div>
            <div className="bob">
                <LowerTaskBar/>
            </div>
        
        </div>
    )
}