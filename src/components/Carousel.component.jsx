import React, { Component, Children } from 'react'
import { Card } from "./Card.component";
import arcade from '../assets/images/arcade.jpg'
import fire from '../assets/images/fire.jpg'
import spark from '../assets/images/spark.jpg'
import { Container, Row } from 'react-bootstrap';

export default class MainCarousel extends Component {

    state = {
        items: [
            {
                id: 0,
                title: 'Kindler',
                subTitle: 'Date planning React Native app',
                imgSrc: fire,
                gitHubLink: 'https://github.com/satchelsmidt/Date_Planner',
                videoLink: 'https://www.youtube.com/watch?v=9QN2OPpL3Kc&feature=emb_title',
                selected: false
            },
            {
                id: 1,
                title: 'Deron Coffie',
                subTitle: 'Github',
                imgSrc: arcade,
                gitHubLink: 'https://github.com/drinkcoffee101',
                videoLink: '',
                selected: false
            },
            {
                id: 2,
                title: 'SparkCourse',
                subTitle: 'Electronic music focused course builder using free resoucres found on the web',
                imgSrc: spark,
                gitHubLink: 'https://github.com/drinkcoffee101/SparkCourse',
                videoLink: 'https://www.youtube.com/watch?v=DciZfwRgUnc&feature=emb_title',
                selected: false
            },
        ]
    }

    handleCardClick = id => {

        const items = [...this.state.items]

        items[id].selected = items[id].selected ? false : true

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false
            }
        })

        this.setState({ items })
    }

    makeItems = items => {
        return Children.toArray(items.map(item => {
            return <Card
                item={item}
                click={e => this.handleCardClick(item.id, e)}
            />
        }))
    }

    render() {
        const { items } = this.state

        return (
            <Container fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(items)}
                </Row>
            </Container>
        )
    }
}
