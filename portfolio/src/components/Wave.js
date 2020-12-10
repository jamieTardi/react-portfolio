import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

export default function Wave() {
    return (
        <WaveAvg
            width="3013"
            height="408"
            viewBox="0 0 3013 408"
            fill="none"
            width="40"
            xmlns="http://www.w3.org/2000/svg">
            <motion.path
                initial={{
                pathLength: 0,
                pathOffset: 1
            }}
                animate={{
                pathLength: 1,
                pathOffset: 0
            }}
            transition={{duration: 2}}
                d="M3.5 271.5C599.806 -292.16 1573.5 215.499 1585.5 215C1597.5 214.5 2331.21 595.316 3010.5 271.5"
                strokeOpacity="0.5"
                stroke="#00D261"
                strokeWidth="10"
                />

        </WaveAvg>

    )
}

const WaveAvg = styled.svg `
position:absolute;
left: -30;
z-index: -1;
top: 35%;
width: 100vw
`
