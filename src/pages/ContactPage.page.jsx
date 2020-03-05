import React, { Fragment } from 'react'
import { Hero } from "../components/Hero.component";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons'

export const ContactPage = ({ title }) => {
    return (
        <Fragment>
            <Hero title={title} />
            <Container className='link-container'>
                <Row className='justify-content-center'>
                    <Col className='text-center'>
                        <a
                            href='https://github.com/drinkcoffee101'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='github-link'
                        >
                            <FontAwesomeIcon icon={faGithub} size='6x' />
                        </a>
                    </Col>
                    <Col className='text-center'>
                        <a
                            href='https://www.linkedin.com/in/deron-coffie-067a3a3a/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='linkdin-link'
                        >
                            <FontAwesomeIcon icon={faLinkedin} size='6x' />
                        </a>
                    </Col>
                    <Col className='text-center'>
                        <a
                            href='mailto:dcoffie92@gmail.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='google-link'
                        >
                            <FontAwesomeIcon icon={faGoogle} size='6x' />
                        </a>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
