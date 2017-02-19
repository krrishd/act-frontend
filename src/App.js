import React, { Component } from 'react';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="home fadeIn">
        <div className="hero">
          <div className="heroText">
            <h1>act.</h1>
            <p className="tagline">Channel your feelings about current events and politics into tangible impact.</p>
          </div>
          <div className="cta">
            <Link className="button" href="/create/what">Get Started</Link>
          </div>
        </div>
        <div className="details">
          <div className="screen">
            <img src="/screen.png" />
          </div>
          <div className="detailText">
            <h1>Don’t be left wondering what you can do. Just do it.</h1>
            <p>If you're an everyday citizen, you likely feel helpless when you see issues detached from your personal life. Find out what you can do to turn your sympathy into help.</p>
            <p>If you're an activist, you probably find yourself frustrated when there's a lot of sympathy for your important cause but not as much action. Make that action accessible to those who want to help.</p>
            <p>If you're someone with a platform; most of the valuable help activists need is straightforward, just not known by those who are willing. Use your platform and share it with your following. Apply that impact at scale.</p>
          </div>
        </div>
        <footer>
          <p>&copy; 2017 Krish Dholakiya. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
