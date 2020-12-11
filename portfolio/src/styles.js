import styled from 'styled-components'
import {motion} from 'framer-motion'

export const About = styled(motion.div)`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-around;
padding: 5rem 5rem;
color: white;
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
`

export const Hide = styled.div`
overflow: hidden;
`