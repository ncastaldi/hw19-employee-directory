import React, { Component } from "react";

class Home extends Component {
  state = {
    result: {},
    search: "",
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Hello world</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
