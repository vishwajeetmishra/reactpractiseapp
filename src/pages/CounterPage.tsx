import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { type RootState, type AppDispatch } from "../store/store";
import { increment, decrement, incrementByAmount } from "../store/counterSlice";

type Props = {}

const CounterPage = (_props: Props) => {
    // Read state
    const count = useSelector((state: RootState) => state.counter.value);

    // Dispatch actions
    const dispatch = useDispatch<AppDispatch>();
    return (
        <React.Fragment>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Redux with TypeScript</h1>
                <p>Count: {count}</p>
                <button onClick={() => dispatch(increment())}>+1</button>
                <button onClick={() => dispatch(decrement())}>-1</button>
                <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
            </div>
        </React.Fragment>
    )
}

export default CounterPage