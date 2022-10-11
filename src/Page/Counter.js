import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement,reset, incrementByAmount } from './CounterSlice';

const Counter = () => {
    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch()
    const [amount , setAmount] = useState(0);

    const addValue = Number(amount) || 0;

    const resetAll = () =>{
        setAmount(0)
        dispatch(reset());
    }


    return (
        <div>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
               
                
            </div>
            <input
            type="text"
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            ></input>

<button onClick={() => dispatch( incrementByAmount(addValue))}> Add Amount</button>
<button onClick={resetAll}>Reset</button>
        </div>
        
    );
};

export default Counter;