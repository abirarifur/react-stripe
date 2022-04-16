import './App.css';
import StripeContainer from './component/StripeContainer';
import spatula from './asstes/pro01.jpg'
import { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

function App() {
  const [product] = useState({
    name: "spatula",
    price: 10.00
  })
  function handleToken(token, addresses) {
    console.log(token, addresses);
  }
  return (
    <div className="App">
      <h1>The Spatula Store</h1>
      {product ? <><h3>$10.00</h3> <img src={spatula} alt="" /></>: ''}
      <StripeCheckout stripeKey='pk_test_51KpDsTSABMecmyJbgLCohvtLvUCG834KZSASnRhbM5XBrkJepiiyiFAkG1GOgo9EPPZBj0fi2o0TOooPjJ3X9DCf00WoqC8Sfq'
      token={handleToken}
      />
    </div>
    
  );
}

export default App;
