import React, { useEffect, useState } from 'react';
import "./Auth.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";
import AWS from "aws-sdk";
import { AccessID, SecretID } from './common';
const LoginPage = () => {
    const navigate = useNavigate();
    const [emailID, setEmailID] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!emailID && !password) {
            swal({ title: "Info", text: "Please enter all fields", icon: "info", dangerMode: true, buttons: { confirm: "Ok" } });
        }
        else if (!emailID.includes("troy.edu")) {
            swal({ title: "Info", text: "Please enter valid email ID", icon: "info", dangerMode: true, buttons: { confirm: "Ok" } });
        }
        if (emailID && emailID.includes("troy.edu") && password) {
            AWS.config.update({
                region: "us-east-1",
                accessKeyId: AccessID,
                secretAccessKey: SecretID,
            });
            var docClient = new AWS.DynamoDB.DocumentClient();
            var params = {
                TableName: 'Users',
                id: emailID
            };
            docClient.get(params, function (err, data2) {
                if (err) {
                    console.log(err);
                    swal({ title: "Error", text: "User Not exists", icon: "error", dangerMode: true, buttons: { confirm: "Ok" } });
                } else {
                    navigate('/dashboard');
                }
            })
        }
    }

    return (
        <div className="auth-container">
            <div className="auth-card">
                <img src="./Images/logo.png" style={{ height: "30px", width: "30px" }} />
                <h2>Login to University Marketplace</h2>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter your email" value={emailID} onChange={(e) => { setEmailID(e.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter your password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <button type="button" onClick={(e) => onSubmit(e)} className="btn btn-primary">Login</button>
                </form>
                <p className="text-center">
                    Don’t have an account? <Link to="/signup">Signup</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
