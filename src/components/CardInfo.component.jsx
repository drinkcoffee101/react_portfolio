import React from 'react'
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'

export const CardInfo = ({ title, subTitle, link }) => {

    const style = useSpring({ opacity: 1, from: { opacity: 0 } })

    return (
        <animated.div className='g-card-info' stlye={style}>
            <p className='g-card-title'>{title}</p>
            <p className='g-card-sub-title'>{subTitle}</p>
            <a href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='card-link'
            ><FontAwesomeIcon icon={faExternalLinkSquareAlt} size='2x' /></a>
        </animated.div>
    )
}
