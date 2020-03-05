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
                subTitle: 'Date planning phone react native app',
                imgSrc: fire,
                link: 'https://github.com/satchelsmidt/Date_Planner',
                selected: false
            },
            {
                id: 1,
                title: 'Deron Coffie',
                subTitle: 'Github',
                imgSrc: arcade,
                link: 'https://github.com/drinkcoffee101',
                selected: false
            },
            {
                id: 2,
                title: 'SparkCourse',
                subTitle: 'Date planning phone react native app',
                imgSrc: spark,
                link: 'https://github.com/drinkcoffee101/SparkCourse',
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
