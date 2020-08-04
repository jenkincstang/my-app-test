import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = { value: 0, groupSize: 0 };
    }
    //todo arrow function
    onDecrease = () => {
        this.setState((preState) => ({
            value: preState.value - 1,
        }));
        this.props.onDecrement();
    };
    onIncrease = () => {
        this.setState((preState) => ({
            value: preState.value + 1,
        }));

        this.props.onIncrement();
    };
    

    render() {
        return (
            <div>
                <button onClick={this.onDecrease}>-</button>
                <mark>{this.state.value}</mark>
                <button onClick={this.onIncrease}>+</button>
            </div>
        );

    }

    componentWillUnmount() {
        console.log(this.state);
        this.props.unmountCounter(this.state.value);
      }

}

Counter.propTypes = {
    groupSize: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Counter;