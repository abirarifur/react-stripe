import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = "pk_test_51KpDsTSABMecmyJbgLCohvtLvUCG834KZSASnRhbM5XBrkJepiiyiFAkG1GOgo9EPPZBj0fi2o0TOooPjJ3X9DCf00WoqC8Sfq";

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    const options = {
        // passing the client secret obtained from the server
        clientSecret: '{{CLIENT_SECRET}}',
      };
    
      return (
        <Elements stripe={stripeTestPromise} options={options}>
          <PaymentForm />
        </Elements>
      );
}
