import React, { Component } from "react";
import data from "./data.json";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      detail: data[0],
    }
  }
  handleChange = (data) => {
    this.setState({
      detail: data,
    })
  }
  // change state of detail when click on button

  render() {
    const { data, detail } = this.state;
    return (
      <div className="main">
        <div className="row mini">
          <div className="col-md-4 content">
            <div className="content__img">
              <h1>TRY CLASSES APP ONLINE</h1>
              <img className="img-fluid" src="./img/model.jpg" alt />
            </div>
            <div className="text">
              <img className="img-fluid" src={detail.url} alt />
              <p>{detail.name}</p>
              <p>
                {detail.desc}.
              </p>
            </div>
          </div>
          <div className="col-md-8 kinh">
            <div className="row align-items-center">
              <div className="col-2">
                <img className="img-fluid" onClick={() => { this.handleChange(data[0]) }} src="./img/v1.png" alt />
              </div>
              <div className="col-2">
                <img className="img-fluid" onClick={() => { this.handleChange(data[1]) }} src="./img/v2.png" alt />
              </div>
              <div className="col-2">
                <img className="img-fluid" onClick={() => { this.handleChange(data[2]) }} src="./img/v3.png" alt />
              </div>
              <div className="col-2">
                <img className="img-fluid" onClick={() => { this.handleChange(data[3]) }} src="./img/v4.png" alt />
              </div>
              <div className="col-2">
                <img className="img-fluid" onClick={() => { this.handleChange(data[4]) }} src="./img/v5.png" alt />
              </div>
              <div className="col-2">
                <img className="img-fluid" onClick={() => { this.handleChange(data[5]) }} src="./img/v6.png" alt />
              </div>
              <div className="col-2">
                <img className="img-fluid" onClick={() => { this.handleChange(data[6]) }} src="./img/v7.png" alt />
              </div>
              <div className="col-2">
                <img className="img-fluid" onClick={() => { this.handleChange(data[7]) }} src="./img/v8.png" alt />
              </div>
              <div className="col-2">
                <img className="img-fluid" onClick={() => { this.handleChange(data[8]) }} src="./img/v9.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
