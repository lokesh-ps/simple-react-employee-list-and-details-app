import React, { useState, useEffect } from "react";
import Panel from "react-bootstrap/lib/Panel";
import Button from "react-bootstrap/lib/Button";
import EmployeeDetails from "./EmployeeDetails";
import "./Styles.css";
const axios = require("axios");
const Employees = (value: any) => {
  const [selectedEmployee, setselectedEmployee] = useState(1);
  const [employeeList, setEmployeeList] = useState<any>();

  async function getEmployeeData() {
    try {
      const response = await axios.get("/data/employeelist.json"); // Replace with your local endpoint
      setEmployeeList(response);
    } catch (error: any) {
      console.error("Error fetching data:", error.message); // Handle the error
    }
  }
  useEffect(() => {
    getEmployeeData();
  }, []);
  if (!employeeList) return <p>Loading Data</p>;
  else
    return (
      <div className="addmargin">
        <div className="sidebar">
          {employeeList.data.map((employee: any) => (
            <Panel bsStyle="info" key={employee.name} className="sidebar-item">
              <Panel.Heading>
                <Panel.Title componentClass="h3">{employee.name}</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <p>{employee.email}</p>
                <p>{employee.phone}</p>
                <Button
                  bsStyle="info"
                  onClick={() => setselectedEmployee(employee.id)}
                >
                  Click to View Details
                </Button>
              </Panel.Body>
            </Panel>
          ))}
        </div>
        <div className="col-md-6">
          <EmployeeDetails val={selectedEmployee} />
        </div>
      </div>
    );
};
export default Employees;
