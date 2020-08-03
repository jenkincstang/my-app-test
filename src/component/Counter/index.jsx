import React from "react";
import PropTypes from 'prop-types'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(){
        this.props.onIncrement();
    }
    
    decrement(){
        this.props.onDecrement();
    }

    render() {
        const {groupSize, value, onIncrement, onDecrement} = this.props
        return (
            <div>
                <button onClick={onDecrement}>-</button>
                <mark>{value}</mark>
                <button onClick={onIncrement}>+</button>
            </div>
        );

    }

}
Counter.propTypes = {
    groupSize: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDescrement: PropTypes.func.isRequired
}

export default Counter;