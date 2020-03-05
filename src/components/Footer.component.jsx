import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

export const Footer = () => {
    return (
        <footer className='mt-5'>
            <Container fluid={true}>
                <Row className='border-top justify-content-between'>
                    <Col className='p-0' md={3} sm={12}>
                        Deron Coffie
                    </Col>
                    <Col className='p-0 d-flex justify-content-end' md={3}>
                        This site was made by Deron Coffie
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
