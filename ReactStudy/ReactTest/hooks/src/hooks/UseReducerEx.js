import { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type === 'Increase') {
        return {
            count: state.count + 1
        };
    }
    return state;
};

export default function UseReducerEx() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <p>Clicked <b>{state.count}</b> times</p>
            <button onClick={click}>Click!</button>
        </div>
    );

    function click() {
        dispatch({ type: 'Increase' });
    }
};