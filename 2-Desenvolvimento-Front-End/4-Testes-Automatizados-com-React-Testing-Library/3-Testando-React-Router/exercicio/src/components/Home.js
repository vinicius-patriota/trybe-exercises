import { Component } from 'react';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

class Home extends Component {
  render() {
    return (
      <div id='home-container' data-testid='home-container'>
        <About />
        <Projects />
        <Contact />
      </div>
    )
  }
}

export default Home
