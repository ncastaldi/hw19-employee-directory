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
              <h5>Click 'Name' head to sort or use Search box to filter results</h5>
            </div>
          </div>
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Profile Picture</th>
                  <th scope="col">Name</th>
                  <th scope="col">Office Phone</th>
                  <th scope="col">Cell Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Birthday</th>
                </tr>
              </thead>
              <tbody>
                  {this.state.results.map(employee => (
                      <tr key={employee.id.value}>
                          <td><img src={employee.picture.thumbnail} alt={employee.login.uuid}></img></td>
                          <td>{employee.name.first + " " + employee.name.last}</td>
                          <td>{employee.phone}</td>
                          <td>{employee.cell}</td>
                          <td><a href={`mailto:`+employee.email}>{employee.email}</a></td>
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
