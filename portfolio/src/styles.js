import styled from 'styled-components'
import {motion} from 'framer-motion'

export const About = styled(motion.div)`
min-height: 90vh;
min-width: 100vw;
display: flex;
align-items: center;
justify-content: space-around;
padding: 5rem 5rem;
color: white;
@media (max-width: 600px){
    padding: 5rem 4rem;
    h2{
        font-size: 2rem;
    }
}
`
export const Description = styled.div`
flex: 1;
padding-right: 5rem;
h2{
    font-weight: lighter;
}
`
export const Image = styled.div`
flex:1;
img{
width: 100%;
height: 80vh;
}
@media(max-width: 600px){
    display: none;
}
`

export const Hide = styled.div`
overflow: hidden;
`