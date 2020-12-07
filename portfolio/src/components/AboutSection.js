import React from 'react'
import code from '../images/code.svg'
//styles
import styled from 'styled-components'

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

//Styled component

const About = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-around;
padding: 5rem 10rem;
color: white;
`
const Description = styled.div`
flex: 1;
padding-right: 5rem;
h2{
    font-weight: lighter;
}
`
const Image = styled.div`
flex:1;
img{
width: 100%;
height: 80vh;

}
`

const Hide = styled.div`
overflow: hidden;
`
