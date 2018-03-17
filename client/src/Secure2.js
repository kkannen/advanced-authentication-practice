
import React, { Component } from "react";

class Secure2 extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    fetch("/api/secure2").then((res) => {
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
        <h2>Secure Component 2</h2>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Secure2;
