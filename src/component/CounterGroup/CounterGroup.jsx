import React from "react";
import Counter from "../Counter";
import { createStore } from 'redux'
import counter from '../../reducers'
import PropTypes from 'prop-types'

const store = createStore(counter)
class CounterGroup extends React.Component{
    constructor(props){
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }
    handleSizeChange = (event) => {
        this.setState({
            size:event.target.value?parseInt(event.target.value):0,
            totalValue:0
        })
    }
    handleIncrement(){
        this.props.onIncrement();
    }
    
    handleDecrement(){
        this.props.onDecrement();
    }
    render(){
        const {size, totalValue, onIncrement, onDecrement} = this.props;
        const initArray = [...Array(size).keys()];
        

        return <div>
            <label>
                Group Size:
                <input onBlur={this.handleSizeChange} defaultValue={0}></input>
            </label>
            <label>
                Total Number:{totalValue}
            </label>
            {
                initArray.map(key => <Counter 
                    groupSize={size} 
                    value = {store.getState()}
                    onIncrement={() => store.dispatch({ type: 'INCREMENT' })} 
                    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
                    key={key} />)
            }
        </div>;
    }
}

CounterGroup.propTypes = {
    size: PropTypes.number.isRequired,
    totalValue: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }
export default CounterGroup;