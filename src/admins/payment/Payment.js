import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51IhDEfIND59cbOpUwul5ICrhnWfWS2CdFR3KudB8PhbToQqyVfUa2mOKu28QQ8iNP6OzoQxjlBD9hdwXkJhZArNl00CoFvQ6YG');

const Payment = ({ handlePayment }) => {
    return (
        <Elements stripe={stripePromise}>
            <SplitCardForm handlePayment={handlePayment} ></SplitCardForm>
        </Elements>
    );
};

export default Payment;