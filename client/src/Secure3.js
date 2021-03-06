
import React, { Component } from "react";

class Secure3 extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    fetch("/api/secure3").then((res) => {
      return res.text();
    }).then((data) => {
      this.setState({
        message: data
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Secure Component 3</h2>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Secure3;
