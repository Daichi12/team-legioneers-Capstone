const ammount = document.getElementById("ammount")
paypal
.Buttons({

    // Sets up the transaction when a payment button is clicked
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: ammount.value // Can reference variables or functions. Example: value: document.getElementById('...').value
          }
        }
      ]
      });
    },

    // Finalize the transaction after payer approval
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        // Successful capture! For dev/demo purposes:
           alert("Transaction completed by " + details.payer.name.given_name)

        // When ready to go live, remove the alert and show a success message within this page. For example:
        // var element = document.getElementById('paypal-button-container');
        // element.innerHTML = '';
        // element.innerHTML = '<h3>Thank you for your payment!</h3>';
        // Or go to another URL:  actions.redirect('thank_you.html');
      });
    }
  }).render("#paypal")