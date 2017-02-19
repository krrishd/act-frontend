import React, { Component } from 'react';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="home fadeIn">
        <a href="https://github.com/krrishd/act-frontend" class="github-corner" aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: fixed; top: 0; border: 0; left: 0; transform: scale(-1, 1);" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>
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
