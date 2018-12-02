import React, { Component } from 'react';

import './Home.css';

import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div className="page">
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Home;
