import React, { Fragment, Children } from 'react'
import { Hero } from "../components/Hero.component";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

const contactItems = [
    {
        href: 'https://github.com/drinkcoffee101',
        linkStyle: 'github-link',
        icon: faGithub,
    },
    {
        href: 'https://www.linkedin.com/in/deron-coffie-067a3a3a/',
        linkStyle: 'linkdin-link',
        icon: faLinkedin,
    },
    {
        href: 'mailto:dcoffie92@gmail.com',
        linkStyle: 'google-link',
        icon: faGoogle,
    },
    {
        href: 'public/DeronCoffieResume.pdf',
        linkStyle: 'resume-link',
        icon: faFileDownload,
    }
]

export const ContactPage = ({ title }) => {
    return (
        <Fragment>
            <Hero title={title} />
            <Container className='link-container'>
                <Row className='justify-content-center'>
                    {Children.toArray(contactItems.map(item =>
                        <Col className='text-center'>
                            <a
                                href={item.href}
                                target='_blank'
                                rel='noopener noreferrer'
                                className={item.linkStyle}
                                download
                            >
                                <FontAwesomeIcon icon={item.icon} size='6x' />
                            </a>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Fragment>
    )
}
