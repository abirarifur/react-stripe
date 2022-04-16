import './App.css';
import StripeContainer from './component/StripeContainer';
import spatula from './asstes/pro01.jpg'
import { useState } from 'react';

function App() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className="App">
      <h1>The Spatula Store</h1>
      {showItem ? <StripeContainer /> : <><h3>$10.00</h3> <img src={spatula} alt="" /> <button onClick={() => setShowItem(true)}>Purchase</button> </>}
    </div>
  );
}

export default App;
