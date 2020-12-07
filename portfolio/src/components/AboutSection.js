import React from 'react'
import code from '../images/code.svg'
//styles imported
import {About, Description, Image, Hide} from '../styles'

export default function AboutSection() {
    return (
        //Styled div
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2><span>Hello.</span> My name is Jamie</h2>
                    </Hide>
                    <Hide>
                        <h2>I am a front-end engineer</h2>
                    </Hide>
                    <Hide>
                        <h2>Take a look at my work</h2>
                    </Hide>
                </div>
                <p className="contact-paragraph">Contact me below!</p>
                <button className="contact-button">Contact me</button>
            </Description>
            <Image>
                <img src={code}  alt="Random Image"/>
            </Image>
        </About>
    )
}




