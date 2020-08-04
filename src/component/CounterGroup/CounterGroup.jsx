import React from "react";
import Counter from "../Counter";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

<<<<<<< HEAD

const store = createStore(counter)
        
=======
>>>>>>> 7d18448b31c630d46df23726615eefe4c02eb5a5
class CounterGroup extends React.Component{
    
    constructor(props){
        super(props);
<<<<<<< HEAD
        // this.handleIncrement = this.handleIncrement.bind(this);
        // this.handleDecrement = this.handleDecrement.bind(this);
    }
    handleSizeChange = (event) => {
        return {
            type: "INPUT_CHANGE",
            size: event.target.value?parseInt(event.target.value):0
        }
    }
    // handleIncrement(){
    //     this.props.onIncrement();
    // }
    
    // handleDecrement(){
    //     this.props.onDecrement();
    // }

    render(){
        
        const {size, totalValue, onIncrement, onDecrement} = this.props;
        const initArray = [...Array(size).keys()];
=======
        this.state = {size:0};
    }
    handleSizeChange = (event) => {
        this.setState({
            size: event.target.value?parseInt(event.target.value):0,
        })
    }

    render(){
        const initArray = [...Array(this.state.size).keys()];
>>>>>>> 7d18448b31c630d46df23726615eefe4c02eb5a5
        
        return <div>
            <label>
                Group Size:
                <input onBlur={this.handleSizeChange} defaultValue={0}></input>
            </label>
            <label>
                Total Number:{this.props.sum}
            </label>
            {
                initArray.map(key => <Counter 
<<<<<<< HEAD
                    groupSize={size} 
                    value = {store.getState()}
                    // onIncrement={() => store.dispatch({ type: 'INCREMENT' })} 
                    // onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
=======
                    groupSize={this.state.size} 
                    onIncrement={() => this.props.onIncrement()}
                    onDecrement={() => this.props.onDecrement()}
                    unmountCounter={this.props.unmountCounter}
>>>>>>> 7d18448b31c630d46df23726615eefe4c02eb5a5
                    key={key} />)
            }
        </div>;
    }

    

}

<<<<<<< HEAD
CounterGroup.propTypes = {
    size: PropTypes.number.isRequired,
    totalValue: PropTypes.number.isRequired
    // onIncrement: PropTypes.func.isRequired,
    // onDecrement: PropTypes.func.isRequired
  }
export default CounterGroup;
=======
const mapStateToProps = (state) => {
    console.log(state);
    return {
        sum: state
    }
}

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch({type: 'INCREMENT'}),
    onDecrement: () => dispatch({type: 'DECREMENT'}),
    unmountCounter: (value) => dispatch({ type: "UNMOUNT_COUNTER", count: value })
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup);
>>>>>>> 7d18448b31c630d46df23726615eefe4c02eb5a5
