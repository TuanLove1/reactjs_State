import React, { Component } from "react";
import data from "./data.json";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      detail: data[0],
    };
  }
  // change state of detail when click on button
  handleChange = (data) => {
    this.setState({
      detail: data,
    });
  };
  render() {
    const { data, detail } = this.state;
    return (
      <div className="main">
        <div className="container">
          <h1 className="text-center">TRY CLASSES APP ONLINE</h1>
          <div className="model">
            <div className="banner">
              <img src="./img/model.jpg" alt="" />
            </div>
            <div className="title">
              <img src={detail.url} className="img-fluid" alt="" />
              <h2>{detail.name}</h2>
              <p>{detail.desc}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <img
                src="./img/v1.png"
                className="img-fluid"
                alt=""
                onClick={() => this.handleChange(data[0])}
              />
            </div>
            <div className="col-2">
              <img
                src="./img/v2.png"
                className="img-fluid"
                alt=""
                onClick={() => this.handleChange(data[1])}
              />
            </div>
            <div className="col-2">
              <img
                src="./img/v8.png"
                className="img-fluid"
                onClick={() => this.handleChange(data[2])}
                alt=""
              />
            </div>
            <div className="col-2">
              <img
                src="./img/v6.png"
                className="img-fluid"
                onClick={() => this.handleChange(data[3])}
                alt=""
              />
            </div>
            <div className="col-2">
              <img
                src="./img/v7.png"
                className="img-fluid"
                onClick={() => this.handleChange(data[4])}
                alt=""
              />
            </div>
            <div className="col-2">
              <img
                src="./img/v6.png"
                className="img-fluid"
                onClick={() => this.handleChange(data[5])}
                alt=""
              />
            </div>
            <div className="col-2">
              <img
                src="./img/v7.png"
                className="img-fluid"
                onClick={() => this.handleChange(data[6])}
                alt=""
              />
            </div>
            <div className="col-2">
              <img
                src="./img/v8.png"
                className="img-fluid"
                onClick={() => this.handleChange(data[7])}
                alt=""
              />
            </div>
            <div className="col-2">
              <img
                src="./img/v9.png"
                className="img-fluid"
                onClick={() => this.handleChange(data[8])}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
