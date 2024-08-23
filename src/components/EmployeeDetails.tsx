import React, { useEffect, useState } from "react";
import Panel from "react-bootstrap/lib/Panel";
const axios = require("axios");

const EmployeeDetails = ({ val }: any) => {
  const [employeeDetails, setEmployeeDetails] = useState({
    data: {
      name: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      country: "",
      organization: "",
      jobProfile: "",
      additionalInfo: "",
    },
  });

  useEffect(() => {
    getEmployeeDetails(val);
  }, []);
  useEffect(() => {
    getEmployeeDetails(val);
  }, [val]);
  async function getEmployeeDetails(id: any) {
    try {
      const response = await axios.get("data/employee" + id + ".json"); // Replace with your local endpoint
      setEmployeeDetails(response);
    } catch (error: any) {
      console.error("Error fetching data:", error.message); // Handle the error
    }
  }
  if (!employeeDetails) return <p>Loading Data</p>;
  return (
    <div className="main-content">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title className="main-content-h3">
            {employeeDetails.data.name}
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body className="main-content-p">
          <p>Name : {employeeDetails.data.name}</p>
          <p>Email : {employeeDetails.data.email}</p>
          <p>Phone : {employeeDetails.data.phone}</p>
          <p>City : {employeeDetails.data.city}</p>
          <p>State : {employeeDetails.data.state}</p>
          <p>Country : {employeeDetails.data.country}</p>
          <p>Organization : {employeeDetails.data.organization}</p>
          <p>Job Profile : {employeeDetails.data.jobProfile}</p>
          <p>Additional Info : {employeeDetails.data.additionalInfo}</p>
        </Panel.Body>
      </Panel>
    </div>
  );
};

export default EmployeeDetails;
