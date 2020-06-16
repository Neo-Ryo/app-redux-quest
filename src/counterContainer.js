import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  counter: state,
});

const CounterComponent = ({ counter, dispatch }) => (
  <div>
    <p>{counter}</p>
    <button onClick={() => dispatch({ type: "ADD" })}>+</button>
    <button onClick={() => dispatch({ type: "REMOVE" })}>-</button>
  </div>
);

export default connect(mapStateToProps)(CounterComponent);
