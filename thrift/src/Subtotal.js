import React, { useState } from 'react';
import './Subtotal.css'; 
import Currencyformat from"react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
function Subtotal()
{
  const [{basket},dispatch] = useStateValue();
 return (
  <div className='subtotal'>
    <Currencyformat
    renderText={(value)=> (
      <div>
      <p>
        Subtotal({basket.length} items) :
        <strong>
           {value}</strong>
           </p>
          </div>
    )
    }
decimalScale={2}
value={getBasketTotal(basket)}
displayType={"text"}
thousandSeparator={true}
prefix={"$"}
/>
<button>Proceed to Checkout </button>
</div>
);
  }
  export default Subtotal;
    
  

