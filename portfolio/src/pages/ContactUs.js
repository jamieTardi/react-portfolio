import React from 'react';
import { motion } from 'framer-motion'
import { pageAnimation, titleAnim, projectLineAnim } from '../animation'
import styled from 'styled-components'
import Toggle from '../components/Toggle'

export default function ContactUs() {
    return (
        <ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Contact me</motion.h2>
                    <motion.div variants={projectLineAnim} className="line"></motion.div>
                </Hide>
            </Title>
            <Hide>
            <Social variants={titleAnim}>
            <Circle classname="circle"/>
            <Toggle title="Contact me by Phone">
                
                <h3 className="message">My Phone Number is: 07557990224</h3>
                </Toggle>
               </Social>
                </Hide>
                <Hide>
                <Social variants={titleAnim}>
                <Circle classname="circle"/>
                <Toggle title="Send me a E-mail">
                <h3 className="message">My E-mail is jamie.tardi@gmail.com</h3>
                </Toggle>
                </Social>
                </Hide>
                <Hide>
                <Social variants={titleAnim}>
                <Circle classname="circle"/>
                <Toggle title="Check me out on Github!">
                <h3 className="message"><LinkStyled href="https://github.com/jamieTardi" target="_blank">Click on this to go to my GitHub</LinkStyled></h3>
                </Toggle>
                </Social>
                </Hide>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)` 
padding: 5rem 10rem;
color: #353535;
min-height: 90vh;
.line{
height: 0.5rem;
background: #00D261;
margin-bottom: 3rem
}
`

const Title = styled(motion.div)` 
margin-bottom: 4rem;
color: white;
`

const Hide = styled(motion.div)`
overflow: hidden;
`

const Social = styled(motion.div)`
display: flex;
align-items: center;
gap: 2rem;
margin-bottom: 2rem;
cursor: pointer;
h2{
    margin-left: 2rem
}


`

const Circle = styled.div`
border-radius: 50%;
min-width: 3rem;
height: 3rem;
background: #4C545D;

`

const LinkStyled = styled.a`
text-decoration: none;
color: white;
`