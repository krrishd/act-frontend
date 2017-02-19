import React, { Component } from 'react';
import {Link} from 'react-router';

class What extends Component {
  constructor(props) {
    super(props);
    document.title = "what's going on?";
    this.store = props.route.store;
  }

  textChange = (e) => {
    const text = "" || e.target.value;
    sessionStorage.setItem('act-desc', text);
  }

  render() {
    

    return (
      <div className="what fadeIn">
        <Link href="/" className="button back">Back</Link>
        <h1>what's going on in the world right now?</h1>
        <textarea onChange={this.textChange}></textarea>
        <p className="limit">280 character limit (2 tweets worth)</p>
        <Link href="/create/how" className="button">Next</Link>
      </div>
    );
  }
}

export default What;
