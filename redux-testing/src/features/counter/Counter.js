import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const [incrementAmount, setIncrementAmount] = useState(0)

  const handleIncrementAmountChange = event => {
    setIncrementAmount(event.target.value)
  }

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <input
          type="number"
          value={incrementAmount}
          onChange={handleIncrementAmountChange}
        />
        <button
          aria-label="Increment by custom amount"
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by custom amount
        </button>
      </div>
    </div>
  )
}

export default Counter
