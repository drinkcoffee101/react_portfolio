import React from 'react'
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Container, Row, Col } from 'react-bootstrap';

export const CardInfo = ({ title, subTitle, gitHubLink, videoLink }) => {

    const style = useSpring({ opacity: 1, from: { opacity: 0 } })

    return (
        <animated.div className='g-card-info' stlye={style}>
            <p className='g-card-title'>{title}</p>
            <p className='g-card-sub-title'>{subTitle}</p>
            <Container style={{ paddingTop: '1rem' }}>
                <Row>
                    <Col className='text-center'>
                        <a
                            href={gitHubLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='card-link'
                        ><FontAwesomeIcon icon={faGithub} size='2x' /></a>
                    </Col>
                    {videoLink ?
                        <Col className='text-center'>
                            <a
                                href={videoLink}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='card-link'
                            ><FontAwesomeIcon icon={faYoutube} size='2x' /></a></Col> : ''}
                </Row>
            </Container>
        </animated.div>
    )
}
