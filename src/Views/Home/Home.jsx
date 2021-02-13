import React, { Component } from "react";
import API from "../../utils/API";

class Home extends Component {
  state = {
    result: {},
    search: "",
  };

  componentDidMount() {
    this.generateEmployeeList();
  }

  generateEmployeeList = () => {
    API.search()
      .then((res) => this.setState({ result: res.data.results })) //console.log(res.data.results))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Employee Directory</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
