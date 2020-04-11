import React, { useCallback } from 'react';
import { useSelector, useDispatch, connet } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
};

const mapStateToProps = state => ({
  number: state.counter.number
});

const mapDispatchToProps = dispatch => ({
  increase : () => {
    console.log('increase')
  },
  decrease : () => {
    console.log('decrease');
  },
});

export default CounterContainer;
