import React, { Component } from 'react';
import {
  browserHistory,
  Link
} from 'react-router';

import qwest from 'qwest';

class How extends Component {
  constructor(props) {
    super(props);
    document.title = "how?";
    this.store = props.route.store;
    this.state = {
      items: this.store.getAll()
    };
  }

  render() {
    const items = this.generateItemList();

    return (
      <div className="how fadeIn">
        <Link href="/" className="button back">Back</Link>
        <h1>how can you have a tangible impact on it?</h1>
        <div className="addResource">
          <a
            href="#"
            onClick={this.addItem}
            className="button">+</a>
          <input
            type="text"
            className="desc"
            placeholder="a short description..." />
          <input
            type="url"
            className="link"
            placeholder="link" />
        </div>
        <div className="items">
          {items}
        </div>
        <a
          href="#"
          className="button nextButton"
          onClick={this.submitItems}>Next</a>
      </div>
    );
  }

  submitItems = (e) => {
    e.preventDefault();
    
    const payload = {
      description: sessionStorage.getItem('act-desc'),
      actions: this.store.getAll()
    }
    
    const handler = (xhr, res) => {
      res = JSON.parse(res);
      sessionStorage.removeItem('act-desc');
      this.store.reset();
      browserHistory.push(`/how/${res.shortId}`);
    }

    qwest
      .post(
        `${this.props.route.api}/api/new-cause`,
        payload,
        {
          cache: true
        }
      )
      .then(handler);
  }

  addItem = (e) => {
    e.preventDefault();
    const description = document.querySelector('.desc').value;
    const link = (() => {
      const raw = (document.querySelector('.link').value).trim();
      if (raw.trim().length < 1) {
        return null;
      } else if (
        !raw.trim().includes('http://') &&
        !raw.trim().includes('https://')) {
          const withPrefix = 'http://' + raw.trim();
          return withPrefix;
      } else {
        return raw;
      }
    })();

    const key = btoa(description);
    
    const actionItem = {
      description,
      link,
      key
    };
    
    this.store.addItem(actionItem);
    this.setState({
      items: this.store.getAll()
    });
  }

  // checkbox intended for final page
  /*generateItem(description, link) {
    let linkMarkup;
    
    if (!link) {
      linkMarkup = null;
    } else {
      linkMarkup = (<a className="itemLink" href={link}>Go</a>);
    }

    const descriptionHash = btoa(description);
    
    return (
      <div className="actionItem">
        <p className="itemDescription">{description}</p>
        {linkMarkup}
        <input
          type="checkbox"
          className={`checkbox checkbox-${descriptionHash}`} />
      </div>
    );
  }*/

  generateItem(description, link) {
    let linkMarkup;
    
    if (!link) {
      linkMarkup = null;
    } else {
      linkMarkup = (<a className="itemLink button" href={link}>Go</a>);
    }
    
    const descriptionHash = btoa(description);

    return (
      <div
        className="actionItem"
        key={descriptionHash}
        data-key={descriptionHash}>
        <p className="itemDescription">{description}</p>
        {linkMarkup}
      </div>
    );
  }

  generateItemList() {
    const items = this.state.items.map((item) => {
      return this.generateItem(item.description, item.link);
    });
    return items;
  }
}

export default How;
