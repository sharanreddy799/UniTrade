import React, { useState } from 'react';
import './Auth.css';  // For custom styles (optional)
import { Link } from 'react-router-dom';
import swal from "sweetalert";
import AWS from "aws-sdk";
import { useNavigate } from 'react-router-dom';
import { AccessID, SecretID } from './common';
import logo from './Images/logo.png';
const SignupPage = () => {
  const navigate = useNavigate();
  const [emailID, setEmailID] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!emailID && !password && !confirmPassword) {
      swal({ title: "Info", text: "Please enter all fields", icon: "info", dangerMode: true, buttons: { confirm: "Ok" } });
    }
    else if (!emailID.includes("troy.edu")) {
      swal({ title: "Info", text: "Please enter valid email ID", icon: "info", dangerMode: true, buttons: { confirm: "Ok" } });
    }
    if (emailID && emailID.includes("troy.edu") && password && confirmPassword) {
      AWS.config.update({
        region: "us-east-1",
        accessKeyId: AccessID,
        secretAccessKey: SecretID,
      });
      var postData = {};
      postData.EmailID = emailID
      postData.password = password;
      var docClient = new AWS.DynamoDB.DocumentClient();
      var params = {
        TableName: 'Users',
        Item: postData
      };
      docClient.put(params, function (err, data2) {
        if (err) {
          swal({ title: "Error", text: err.message, icon: "error", dangerMode: true, buttons: { confirm: "Ok" } });
        } else {
          swal({ title: "Success", text: "Sign up success", icon: "success", dangerMode: true, buttons: { confirm: "Ok" } })
            .then((ok) => {
              if (ok) {
                navigate('/login');
              }
            })
        }
      })
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <img src={logo} />
        <h2>Signup for University Marketplace</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" value={emailID} onChange={(e) => { setEmailID(e.target.value) }} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter your password" value={password} onChange={(e) => { setPassword(e.target.value) }} autoComplete='off' />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" className="form-control" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} autoComplete='off' />
          </div>
          <button type="button" onClick={(e) => onSubmit(e)} className="btn btn-primary">Signup</button>
        </form>
        <p className="text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
