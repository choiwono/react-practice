import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Counter from '../components/Counter';
import { increment, decrement } from '../modules/counter';

const CounterContainer = () => {
    //const test = useSelector(state => { counter : state.counter })
    console.group(increment);
    const counter = useSelector(state => state.counter, []);
    const dispatch = useDispatch()
    // useDispatch를 활용한 예제
    const increase = useCallback(() => dispatch(increment()),[dispatch]);
    const decrease = useCallback(() => dispatch(decrement()), [dispatch]);

    return (
      <Counter number={counter} onIncrease={increase} onDecrease={decrease} />
    );
};


export default CounterContainer;