import React, {useState} from 'react'
import styled from 'styled-components'
import {About} from '../styles'
import Toggle from '../components/Toggle'
import {AnimateSharedLayout} from 'framer-motion'
import {UseScroll} from './UseScroll'
import {scrollReveal} from '../animation'

export default function FaqSection() {
    const [element, controls] = UseScroll()

    return (
        <Faq variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <h2>Frequently Asked
                <span>Questions</span>
            </h2>
            <AnimateSharedLayout>
            <Toggle title="How do I get in Contact?">
                    <div className="answer">
                        <p>Email or phone is the best method</p>
                    </div>               
            </Toggle>
            <Toggle title="Where are you located?">
                    <div className="answer">
                        <p>Newbury, Berkshire</p>
                    </div>
            </Toggle>
            <Toggle title="Can you design mobile first applications?">
                    <div className="answer">
                        <p>Yes I sure can! Using react native or Java</p>
                    </div>               
            </Toggle>
            <Toggle title="When are you avalible for hire?">
                    <div className="answer">
                        <p>I am avalible for hire immediatly</p>
                    </div>                
            </Toggle>
            </AnimateSharedLayout>
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
