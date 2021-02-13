import React from "react";

const EmpTable = ({ empList }) => {
  return (
    <>
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
          {empList.map((employee) => (
            <tr key={employee.id.value}>
              <td>
                <img
                  src={employee.picture.thumbnail}
                  alt={employee.login.uuid}
                ></img>
              </td>
              <td>{employee.name.first + " " + employee.name.last}</td>
              <td>{employee.phone}</td>
              <td>{employee.cell}</td>
              <td>
                <a href={`mailto:` + employee.email}>{employee.email}</a>
              </td>
              <td>{employee.dob.date.substring(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EmpTable;
