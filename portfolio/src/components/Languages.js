import React from 'react'
import javaIcon from '../icons/javaIcon.svg'
import javascriptIcon from '../icons/javascriptIcon.svg'
import pythonIcon from '../icons/pythonIcon.svg'
import reactIcon from '../icons/reactIcon.svg'
import home2 from '../images/home2.png'

export default function Languages() {
    return (
        <>
            <div className="languages">
                <h2>Some of the <span>languages</span> I work with</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={javaIcon} alt="Java icon"/>
                            <h3>Java</h3>
                        </div>
                        <p className="java-blurb">For responsive mobile applications</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={javascriptIcon} alt="Javascript icon"/>
                            <h3>Javascript</h3>
                        </div>
                        <p className="javascript-blurb">The webs most used programming language</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={pythonIcon} alt="python icon"/>
                            <h3>Python</h3>
                        </div>
                        <p className="python-blurb">The worlds most versatile language</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={reactIcon} alt="React icon"/>
                            <h3>React.js</h3>
                        </div>
                        <p className="React-blurb">The most used framework for Javascript</p>
                    </div>
                </div>
            </div>
            <img src={home2} alt=""/>
        </>
    )
}
