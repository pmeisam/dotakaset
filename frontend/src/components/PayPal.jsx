import React from "react"; // rfc

import PayPalBtn from "./PayPalBtn";

const paypalSubscribe = (data, actions) => {
  return actions.subscription.create({
    plan_id: "P-49690677HG9807049MQBJBIY",
  });
};
const paypalOnError = (err) => {
  console.log("Error");
};
const paypalOnApprove = (data, detail) => {
  // call the backend api to store transaction details
  console.log("Payapl approved");
  console.log(data.subscriptionID);
};

function Paypal() {
  return (
    <div className="App">
      <PayPalBtn
        amount="10"
        currency="USD"
        createSubscription={paypalSubscribe}
        onApprove={paypalOnApprove}
        catchError={paypalOnError}
        onError={paypalOnError}
        onCancel={paypalOnError}
      />
    </div>
  );
}

export default Paypal;
















// export default function PayPal() {
//   const paypal = useRef();

//   useEffect( () => {
//     console.log("in use effect")
//     window.paypal.Buttons( {
//         createOrder: (data, actions, err) => {
//             return actions.order.create({
//                 intent: "CAPTURE",
//                 purchase_units: [{
//                     description: "Cool Looking Table",
//                     amount: {
//                         currency_code: "USD",
//                         value: 6.99
//                     }
//                 }]
//             })
//         },
//         onApprove: async (data, actions) => {
//             const order = await actions.order.capture()
//             console.log("Successful order: ", order)
//         },
//         onError: (err) => {
//             console.log("Error:", err)
//         }
//     } ).render(paypal.current)
//   }, []);

//   return (
//     <div>
//       <div ref={paypal}></div>
//     </div>
//   );
// }











{
  /* <div id="paypal-button-container-P-49690677HG9807049MQBJBIY"></div> */
}
{
  /* <script src="https://www.paypal.com/sdk/js?client-id=AQHLvCwrFsXCncWcFedoYfwAipiyJe5-lsbzDf-6ngY2cBW2IcyI8ektHJu1uZ44uwfTGPjdQwKyyOzk&vault=true&intent=subscription" data-sdk-integration-source="button-factory"></script> */
}
{
  /* <script> */
}
//   paypal.Buttons({
//   style: {
//   shape: 'rect',
//   color: 'gold',
//   layout: 'vertical',
//   label: 'subscribe'
//   },
//   createSubscription: function(data, actions) {
// return actions.subscription.create({
//   /* Creates the subscription */
//   plan_id: 'P-49690677HG9807049MQBJBIY'
// });
//   },
//   onApprove: function(data, actions) {
// alert(data.subscriptionID); // You can add optional success message for the subscriber here
//   }
//   }).render('#paypal-button-container-P-49690677HG9807049MQBJBIY'); // Renders the PayPal button
// </script>
