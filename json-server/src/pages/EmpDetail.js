import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EmpDetail = () => {
  const [empData, setEmpData] = useState(null);
  const { empId } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/employee/" + empId)
      .then((res) => {
        setEmpData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="card" style={{ float: "center" }}>
        <div className="card-title">
          <h2> The Detail Employee </h2>
        </div>
        <div className="card-body">
          {empData && (
            <div>
              <h2>
                {" "}
                The Employee name is : <b> {empData.name} </b> {empData.id}{" "}
              </h2>
              <h2> Contact Details </h2>
              <h4> Email is : {empData.email} </h4>
              <h4> Phone is : {empData.phone} </h4>

              <Link className="btn btn-danger" to="/">
                {" "}
                Back to Lists{" "}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmpDetail;
