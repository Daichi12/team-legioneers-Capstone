import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'
import Contact from "./Contact";
import { bill } from './Contact';
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

class Payment extends React.Component {

  createOrder(data, actions) {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: bill,
          },
        },
      ],
    });
  }

  onApprove(data, actions) {
    return  actions.order.capture();
  }

  render() {
   
    return (
      <div 
      className="wrap mcb-wrap two-third  valign-top clearfix"
      style={{
        padding:"1px 50px 1px",
       marginTop:"60px",
        backgroundColor: "#98dace",
       height:"650px",
    width:"650px",
    position:"relative", left:"500px",
    borderBlockColor:"black", borderWidth:"2px"
      }}
    >
      <h2 style={{textAlign:"center", marginTop:"80px",textDecorationLine: "none"}}>Paypal Transaction</h2>
    
      <div style={{marginTop:"80px"}}> 
  
   <Link to="/Home" type="button" id="link"  className="btn btn-primary" style={{verticalAlign:"middle" ,shape:'rect',height:"50px", width:"550px",position:'absolute', top:'475px', backgroundColor: "#fac43e", color: "black",fontFamily:"futura", fontSize:"20px", textAlign:"center" }}>Return To Home Page </Link>
     
    <PayPalButton  
      createOrder={(data, actions) => this.createOrder(data, actions)}
        onApprove={(data, actions) => this.onApprove(data, actions)}
     
        
      />
      </div>
      </div>
      
   
    );
    
  }
 
}
export default Payment;