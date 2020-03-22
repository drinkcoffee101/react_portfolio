import React from 'react'
import { NavLink } from 'react-router-dom'
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
                    <NavLink className='nav-link' to='/'>Home</NavLink>
                    <NavLink className='nav-link' to='/about'>About</NavLink>
                    <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                </Nav>
            </NavBar.Collapse>
        </NavBar>
    )
}
