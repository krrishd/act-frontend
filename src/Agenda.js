import React, { Component } from 'react';
import http from './http';

class AgendaItem extends Component {
  render() {
    let linkMarkup;
    
    if (!this.props.link) {
      linkMarkup = null;
    } else {
      linkMarkup = (<a className="itemLink button" href={this.props.link}>Go</a>);
    }

    const descriptionHash = btoa(this.props.description);
    
    return (
      <div className="actionItem" key={descriptionHash}>
        <p className="itemDescription">{this.props.description}</p>
        {linkMarkup}
        <div className="checkbox">
          <input
          type="checkbox"
          className={`checkbox checkbox-${descriptionHash}`}
          id={descriptionHash}
          onChange={this.toggleCheck} />
          <label htmlFor={descriptionHash}></label>
        </div>
      </div>
    );
  }

  toggleCheck = (e) => {
    let checkMapObj = {
      key: btoa(this.props.description)
    };
    if (e.target.checked) {
      checkMapObj.value = true;
    } else {
      checkMapObj.value = false;
    }
    this.props.toggleCheckMap(checkMapObj);
  }
}

class Agenda extends Component {
  constructor(props) {
    super(props);
    document.title = "act.";
    this.store = props.route.store;
    this.state = {
      description: null,
      actions: null,
      done: false,
      checkMap: {}
    };
    this.toggleCheckMap = this.toggleCheckMap.bind(this);
  }

  toggleCheckMap(checkMapObj) {
    let tempCheckMap = this.state.checkMap;
    tempCheckMap[checkMapObj.key] = checkMapObj.value;
    this.setState({
      checkMap: tempCheckMap
    });
  }

  componentDidMount() {
    http.GET(
      `${this.props.route.api}/api/cause/${this.props.params.id}`,
      (res) => {
        if (typeof res == 'string') {
          res = JSON.parse(res)[0];
        }
        this.setState({
          description: res.description,
          actions: res.actions.map(action => {
            return (<AgendaItem
              description={action.description}
              toggleCheckMap={this.toggleCheckMap}
              link={action.link} />);
            })
        });
      }
    );
  }

  render() {
    const self = this;
    const doneStatement = (() => {
      let exists = Object.keys(self.state.checkMap).some(function(k) {
        return self.state.checkMap[k] === true;
      });
      if (exists) {
        return 'you\'ve done';
      }
      return 'you can do';
    })();

    return (
      <div className="agenda fadeIn">
        <p className="description">{this.state.description}</p>
        <h1>{`Here's what ${doneStatement} about it.`}</h1>
        <div className="items">
          {this.state.actions}
        </div>
        <div className="share">
          <h3>Share your impact with friends:</h3>
          <input type="text" disabled value={document.URL} />
        </div>
      </div>
    );
  }
}

export default Agenda;
