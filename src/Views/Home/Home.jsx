import React, { Component } from "react";
import API from "../../utils/API";

class Home extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    this.generateEmployeeList();
  }

  generateEmployeeList = () => {
    API.search()
      .then((res) => this.setState({ results: res.data.results })) //console.log(res.data.results))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h1>Employee Directory</h1>
            </div>
          </div>
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Profile Picture</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Birthday</th>
                </tr>
              </thead>
              <tbody>
                  {this.state.results.map(employee => (
                      <tr>
                          <td><img src={employee.picture.thumbnail} alt={employee.login.uuid}></img></td>
                          <td>{employee.name.first + " " + employee.name.last}</td>
                          <td>{employee.cell}</td>
                          <td>{employee.email}</td>
                          <td>{employee.dob.date.substring(0, 10)}</td>
                      </tr> 
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
