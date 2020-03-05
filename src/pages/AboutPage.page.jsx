import React, { Fragment } from 'react'
import { Hero } from "../components/Hero.component";
import { About } from '../components/About.component'

export const AboutPage = ({ title }) => {
    return (
        <Fragment>
            <Hero title={title} />
            <About />
        </Fragment>
    )
}
