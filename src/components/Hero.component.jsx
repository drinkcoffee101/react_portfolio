import React from 'react'
import { Jumbotron, Container, Col, Row } from 'react-bootstrap'

export const Hero = ({ title, subTitle, text }) => {
    return (
        <Jumbotron className='bg-transparent jumbotron-fluid p-0'>
            <Container fluid={true}>
                <Row className='justify-content-center py-5'>
                    <Col md={8} sm={12}>
                        {title && <h1 id='title' className='font-weight-bolder'>{title}</h1>}
                        {subTitle && <h3 id='sub-title' className='display-4 font-weight-light'>{subTitle}</h3>}
                        {text && <h3 id='text' className='lead font-weight-light'>{text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron >
    )
}
