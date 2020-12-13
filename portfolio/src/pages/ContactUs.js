import React from 'react';
import { motion } from 'framer-motion'
import { pageAnimation, titleAnim, projectLineAnim } from '../animation'
import styled from 'styled-components'
import Toggle from '../components/Toggle'
import contactImg from '../images/contactImg.svg'
import gitHub from '../icons/github.svg'

export default function ContactUs() {
    return (
        <ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Contact me</motion.h2>
                    <motion.div variants={projectLineAnim} className="line"></motion.div>
                </Hide>
            </Title>
            <ImageFormContainer>
            <ImageStyled src={contactImg} alt="Contact Image"/>
          <FormStyled action="https://formspree.io/f/xqkgyyva" method="POST">

              <label htmlFor="Name">Name:</label>
              <InputStyled type="text"/>
              <label htmlFor="Email">Email:</label>
              <InputStyled type="email"/>
              <TextareaStyled name="Message" id="" cols="30" rows="10" placeholder="Write a message"/>
              <input className="inputBtn" type="submit" value="Send"/>
          </FormStyled>
          </ImageFormContainer>
          <SocialContainer>
          <ImgLink href="https://github.com/jamieTardi" target="_blank"><GitHubImg src={gitHub} alt="github"/></ImgLink>
          </SocialContainer>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)` 
padding: 5rem 10rem;
color: #353535;
min-height: 90vh;
@media(max-width: 600px){
    padding: 1rem;
}
.line{
height: 0.5rem;
background: #00D261;
margin-bottom: 3rem;
position: relative;

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

const FormStyled = styled.form`
display: flex;
flex-direction: column;
color: white;
max-width: 50%;
@media (max-width: 800px){
    min-width: 100%;
}
`

const InputStyled = styled.input`
margin-bottom: 1rem;
font-size: 1.2rem;
margin-top: 0.3rem;
`

const TextareaStyled = styled.textarea`
margin-bottom: 1rem;
font-family: 'Montserrat', sans-serif;
`

const ImageStyled = styled.img`
width: 50%;
@media (max-width: 800px){
    display: none;
}
`

const ImageFormContainer = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: space-between;
gap: 1rem;
`

const GitHubImg = styled.img`
width: 10vw;
height: 10vh;
cursor: pointer;
`

const SocialContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 1rem;
`

const ImgLink = styled.a`
width: 10vw;
height: 10vh;
display: flex;
justify-content: center;

`