import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const About = () => {
    return (
        <Container fluid={true}>
            <Row className='justify-content-center'>
                <Col md={8}>
                    <p>Hi! My name is Deron Coffie. I am a full stack web developer with experience in Flask, Express JS, Node JS, MySQL, MongoDB, and React.</p>
                    <p>I dream of one day combining my love for art and music with my passion for coding.</p>
                    <p>Currently, I am working on gaining more experience with React and Python.</p>
                    <p>My latest project, Kindler, is a mobile application built with the goal of providing individuals and those in relationships with the tools to empower them during the decision making process of going out on a date with someone. The app was built using React Native, Node JS, Express JS, and MongoDB.</p>
                    <p>If I'm not coding I am probably making music! Check out my tunes on <a href='https://open.spotify.com/artist/4N2fjMIdgYgsbFi1Rziz4m' target='_blank' rel="noopener noreferrer">Spofity</a>.</p>
                </Col>
            </Row>
        </Container>
    )
}
