import React, { useMemo } from "react";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";



const useOptions = () => {
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize: '16px',
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );

    return options;
};

const SplitCardForm = ({ handlePayment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });

        handlePayment(payload.paymentMethod.id)
    };

    return (

        <>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <div className="form-group row">
                    <div className="col-md-3" >
                        <label>Card number</label>
                    </div>
                    <div className="col-md-9 col-xs-12">
                        <CardNumberElement style={{ padding: '10px' }} />
                    </div>
                </div>


                <div className="form-group row">
                    <div className="col-md-3" >
                        <label>Expiration date</label>
                    </div>
                    <div className="col-md-9 col-xs-12">
                        <CardExpiryElement />
                    </div>
                </div>


                <div className="form-group row">
                    <div className="col-md-3" >
                        <label>CVC</label>
                    </div>
                    <div className="col-md-9 col-xs-12">
                        <CardCvcElement />
                    </div>
                </div>

                <button className="btn btn-info" type="submit" disabled={!stripe}>
                    Pay with stripe
                </button>

            </form>

        </>
    );
};

export default SplitCardForm;