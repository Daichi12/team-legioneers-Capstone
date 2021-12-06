import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import { toast } from "react-toastify";

var PostData = 
  [
    {
        "reservation_id": 21,
        "reservation_name": "Chris",
        "reservation_time": "2021-11-19T13:57",
        "group_size": 4,
        "phone": "787-943-6147",
        "notes": "Test"
    },
    {
        "reservation_id": 22,
        "reservation_name": "Chris",
        "reservation_time": "2021-11-19T13:57",
        "group_size": 4,
        "phone": "787-943-6147",
        "notes": "Test"
    },
    {
        "reservation_id": 23,
        "reservation_name": "Chris",
        "reservation_time": "2021-11-19T13:57",
        "group_size": 4,
        "phone": "787-943-6147",
        "notes": "Test"
    },
]


const Login = ( {setAuth} ) => {
  const [inputs, setInputs] = useState({
    Employee_UserName: "",
    Employee_Password: ""
  });

  const { Employee_UserName, Employee_Password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { Employee_UserName, Employee_Password };
      const response = await fetch(
        "/account/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();
      console.log(parseRes);
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true)
        toast.success("Logged in Successfully");
      } else {
        toast.error(parseRes);
        setAuth(false)
       
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  
  return (
    <Fragment>
      <h1 className="text-center my-5">Login</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="Employee_UserName"
          value={Employee_UserName}
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="password"
          name="Employee_Password"
          value={Employee_Password}
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <button class="btn btn-success btn-block">Submit</button>
      </form>
      <Link to="/register">Register</Link>
      <h1></h1>
      {PostData.map((postDetail, index) => {return <h6> ID: {postDetail.reservation_id}, Name: {postDetail.reservation_name}, Time: {postDetail.reservation_time}, group size: {postDetail.group_size}, phone: {postDetail.phone},  </h6>})}
    </Fragment>
  );
};

export default Login;