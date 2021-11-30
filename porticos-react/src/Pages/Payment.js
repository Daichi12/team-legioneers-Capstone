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
      <div>
       
    <Link to="/Home" type="button" id="link" className="btn btn-primary" style={{verticalAlign:"middle" ,shape:'rect',height:"50px", width:"750px",position:'absolute', left:'0px', top:'350px', backgroundColor: "gold", color: "blue", borderColor: "black" ,border: '1px solid rgba(0,0,0,1)',fontSize:"20px", textAlign:"center" }}>Return To Home Page </Link>
     
    <PayPalButton 
      createOrder={(data, actions) => this.createOrder(data, actions)}
        onApprove={(data, actions) => this.onApprove(data, actions)}
     
        
      />
      </div>
     
      
   
    );
    
  }
 
}
export default Payment;