import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

export default class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((response) => {
      this.setState({ employee: response.data });
    });
  }

  render() {
    return (
      <div>
        <div className="card col-md-6 offset-md-3">
          <h2 className="text-center">View Employee Details</h2>
          <div className="card-body">
            <div className="row">
              <label> Employee First Name : </label>
              <div>{this.state.employee.firstName}</div>
            </div>
            <div className="row">
              <label> Employee Last Name : </label>
              <div>{this.state.employee.firstName}</div>
            </div>
            <div className="row">
              <label> Employee Email : </label>
              <div>{this.state.employee.firstName}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
