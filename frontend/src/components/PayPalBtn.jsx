import { PayPalButton } from "react-paypal-button-v2";
import React from "react";

export function PayPalBtn(props) {
  const {
    amount,
    currency,
    createSubscription,
    onApprove,
    catchError,
    onError,
    onCancel
  } = props;

  const paypalClientId = "AX5L_vANdNQp4tFV5-BoBrhJGgUr-zidQeIWIUArIb44WB3aL1co_OGDWJ4q9K2fXAeZlcsFqlADt9TB";

  return (
    <PayPalButton
      amount={amount}
      currency={currency}
      createSubscription={(data, details) => createSubscription(data, details)}
      onApprove={(data, details) => onApprove(data, details)}
      onError={(err) => onError(err)}
      catchError={(err) => catchError(err)}
      onCancel={(err) => onCancel(err)}
      options={{
        clientId: paypalClientId,
        vault: true,
      }}
      style={{
        // shape: "rect",
        // color: "gold",
        // layout: "horizontal",
        label: "subscribe",
      }}
    />
  );
}

export default PayPalBtn;



// https://medium.com/analytics-vidhya/paypal-subscription-in-react-1121c39b26be



/* 
// Silver Plan
<div id="paypal-button-container-P-04Y63651XD7465802MQGER2Q"></div>
<script src="https://www.paypal.com/sdk/js?client-id=AX5L_vANdNQp4tFV5-BoBrhJGgUr-zidQeIWIUArIb44WB3aL1co_OGDWJ4q9K2fXAeZlcsFqlADt9TB&vault=true&intent=subscription" data-sdk-integration-source="button-factory"></script>
<script>
  paypal.Buttons({
      style: {
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'subscribe'
      },
      createSubscription: function(data, actions) {
        return actions.subscription.create({
          // Creates the subscription 
          plan_id: 'P-04Y63651XD7465802MQGER2Q'
        });
      },
      onApprove: function(data, actions) {
        alert(data.subscriptionID); // You can add optional success message for the subscriber here
      }
  }).render('#paypal-button-container-P-04Y63651XD7465802MQGER2Q'); // Renders the PayPal button
</script> 


// Gold Plan
<div id="paypal-button-container-P-2A0850199B392714UMQGEUDA"></div>
<script src="https://www.paypal.com/sdk/js?client-id=AX5L_vANdNQp4tFV5-BoBrhJGgUr-zidQeIWIUArIb44WB3aL1co_OGDWJ4q9K2fXAeZlcsFqlADt9TB&vault=true&intent=subscription" data-sdk-integration-source="button-factory"></script>
<script>
  paypal.Buttons({
      style: {
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'subscribe'
      },
      createSubscription: function(data, actions) {
        return actions.subscription.create({
          // Creates the subscription 
          plan_id: 'P-2A0850199B392714UMQGEUDA'
        });
      },
      onApprove: function(data, actions) {
        alert(data.subscriptionID); // You can add optional success message for the subscriber here
      }
  }).render('#paypal-button-container-P-2A0850199B392714UMQGEUDA'); // Renders the PayPal button
</script>




*/