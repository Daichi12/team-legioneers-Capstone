import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = ( {setAuth} ) => {
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
      const body = { Employee_UserName, Employee_Password};
      const response = await fetch(
        "http://localhost:5000/account/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );
      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        //toast.success("Register Successfully");
      } else {
        setAuth(false);
        //toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="mt-5 text-center">Register</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="Employee_UserName"
          value={Employee_UserName}
          placeholder="username"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="password"
          name="Employee_Password"
          value={Employee_Password}
          placeholder="password"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <button className="btn btn-success btn-block">Submit</button>
      </form>
      <Link to="/login">Login</Link>
    </Fragment>
  );
};

export default Register;
