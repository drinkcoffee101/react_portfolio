import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'react-bootstrap'
import './App.css';
// import { Footer } from './components/Footer.component';
import { HomePage } from './pages/HomePage.page';
import { AboutPage } from './pages/AboutPage.page';
import { ContactPage } from './pages/ContactPage.page';
import { MainNavBar } from './components/NavBar.component';

class App extends Component {

  state = {
    title: 'Deron Coffie',
    headerLinks: [
      { title: 'Home', path: '/' },
      { title: 'About', path: '/about' },
      { title: 'Contact', path: '/contact' },
    ],
    home: {
      title: 'Adapt | Create | Deliver',
      subTitle: 'Projects that make an impact',
      text: 'Checkout my projects below'
    },
    about: {
      title: 'About Me'
    },
    contact: {
      title: 'Get in touch'
    }
  }

  render() {
    const { home, about, contact, title } = this.state
    
    return (
      <Router>
        <Container className='p-0' fluid={true}>
          <MainNavBar title={title} />
          <Route
            path='/'
            exact
            render={() => <HomePage homeProps={home} />}
            subtitle={home.subtitle}
            text={home.text}
          />
          <Route
            path='/about'
            render={() => <AboutPage title={about.title} />}
          />
          <Route
            path='/contact'
            render={() => <ContactPage title={contact.title} />}
          />
          {/* <Footer /> */}
        </Container>
      </Router>
    );
  }
}

export default App;
