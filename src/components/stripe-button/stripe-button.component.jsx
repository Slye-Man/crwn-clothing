import React from "react";
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JSzyvED3OsFivHuo7mzoO6NgJapxdfSNM1Eo4meiJCSqzgpGlOx9elO8Z8zHn49RKrbLx8XIh3LwsfeTq2EpXHb00iGpO1tri';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAdress
            currency = 'ZAR'
            image = 'https://svgshare.com/i/CUz/svg'
            description={`Your total is R${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey }
        />
    );
};

export default StripeCheckoutButton;