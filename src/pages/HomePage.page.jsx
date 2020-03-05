import React, { Fragment } from 'react'
import { Hero } from '../components/Hero.component'
import MainCarousel from '../components/Carousel.component'

export const HomePage = ({ homeProps }) => {
    return (
        <Fragment>
            <Hero
                title={homeProps.title}
                subTitle={homeProps.subTitle}
                text={homeProps.text}
            />
            <MainCarousel />
        </Fragment>
    )
}
