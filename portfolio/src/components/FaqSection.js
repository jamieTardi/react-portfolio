import React from 'react'
import styled from 'styled-components'
import {About} from '../styles'

export default function FaqSection() {
    return (
        <Faq>
            <h2>Frequently Asked
                <span>Questions</span>
            </h2>
            <div className="question">
                <h4>How do I get in Contact?</h4>
                <div className="answer">
                    <p>Email or phone is the best method</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Where are you located?</h4>
                <div className="answer">
                    <p>Newbury, Berkshire</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Can you design mobile first applications?</h4>
                <div className="answer">
                    <p>Yes I sure can! Using react native or Java</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>When are you avalible?</h4>
                <div className="answer">
                    <p>I am avalible for hire immediatly</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    )
}

const Faq = styled(About)`
display: block;
span{
    display: block;
}
h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
.faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
}
.question{
    padding: 3rem 0rem;
    cursor: pointer;
}
.answer{
    padding: 2rem 0rem;
    p{
        padding: 1rem 0rem
    }
}
`
