import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

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
        "http://localhost:5000/account/login",
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
      <h1 style={{fontStyle: 'italic', marginBottom: "50px" }} className="text-center my-5">Login</h1>
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
        <button class="btn-submit" style={{marginTop: "40px"}}>

         <h3 style={{textDecorationLine: 'underline',fontWeight: 'bold', fontStyle: 'italic',}}> Login </h3> 

          </button>
      </form>
      
    </Fragment>
  );
};

export default Login;