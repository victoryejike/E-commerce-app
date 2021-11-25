import React from "react";
import { usePaystackPayment } from 'react-paystack';
import { onSuccess, onClose } from "./paystack.config";

const PaystackCheckout = ({ price }) => {
    const payableAmount = price * 100;
    const initializePayment = usePaystackPayment({
        reference: (new Date()).getTime(),
        email: "victoryejike@gmail.com",
        amount: payableAmount,
        publicKey: 'pk_test_ef7586b4f027d1e7d0e9ec375b593d0b4700a0b8',
    });
    return (
      <div>
          <button onClick={() => {
              initializePayment(onSuccess, onClose)
          }}>Pay through Paystack</button>
      </div>
    );
};

export default PaystackCheckout;