import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export const MainNavBar = ({ title }) => {
    return (
        <NavBar
            className='border-bottom'
            expand='lg'
            bg='dark' 
            variant='dark'
        >
            <NavBar.Brand>{title}</NavBar.Brand>
            <NavBar.Toggle
                className='border-0' aria-controls='navbar-toggle' />
            <NavBar.Collapse id='navbar-toggle'>
                <Nav className='ml-auto'>
                    <Link className='nav-link' to='/react_portfolio'>Home</Link>
                    <Link className='nav-link' to='/about'>About</Link>
                    <Link className='nav-link' to='/contact'>Contact</Link>
                </Nav>
            </NavBar.Collapse>
        </NavBar>
    )
}
