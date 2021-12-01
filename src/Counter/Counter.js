import React from "react";
import { connect } from "react-redux";
import Controls from "./Controls";
import Value from "./Value";
import * as actions from "../redux/counter/counter_actions";

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div>
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      ></Controls>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToProps = {
  onIncrement: actions.increment,
  onDecrement: actions.decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
