import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { toast } from "react-toastify";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    employee_username: "",
    employee_password: ""
  });

  const { employee_username, employee_password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { employee_username, employee_password };
      const response = await fetch(
        "http://localhost:5000/account/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="mt-5 text-center">Login</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="username"
          value={employee_username}
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="password"
          name="password"
          value={employee_password}
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <button class="btn btn-success btn-block">Submit</button>
      </form>
    </Fragment>
  );
};

export default Login;