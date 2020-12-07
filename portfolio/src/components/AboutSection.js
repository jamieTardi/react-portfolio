import React from 'react'
import home1 from '../images/home1.png'

export default function AboutSection() {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2><span>Hello. My name is Jamie</span></h2>
                    </div>
                    <div className="hide">
                        <h2><span>I am a front-end engineer</span></h2>
                    </div>
                    <div className="hide">
                        <h2><span>Take a look at my work</span></h2>
                    </div>
                </div>
                <p className="contact-paragraph">Contact me below!</p>
                <button className="contact-button">Contact me</button>
            </div>
            <div className="image">
                <img src={home1} alt="Random Image"/>
            </div>
        </div>
    )
}
