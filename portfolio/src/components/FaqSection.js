import React from 'react'

export default function FaqSection() {
    return (
        <div className="faq">
            <h2>Frequently Asked <span>Questions</span></h2>
            <div className="question">
                <h4>How do I get in Contact?</h4>
                <div className="answer">
                    <p>Email or phone is the best method</p>
                </div>
            </div>
            <div className="question">
                <h4>Where are you located?</h4>
                <div className="answer">
                    <p>Newbury, Berkshire</p>
                </div>
            </div>
            <div className="question">
                <h4>Can you design mobile first applications?</h4>
                <div className="answer">
                    <p>Yes I sure can! Using react native or Java</p>
                </div>
            </div>
            <div className="question">
                <h4>When are you avalible?</h4>
                <div className="answer">
                    <p>I am avalible for hire immediatly</p>
                </div>
            </div>
        </div>
    )
}
