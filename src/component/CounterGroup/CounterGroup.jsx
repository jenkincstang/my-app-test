import React from "react";
import Counter from "../Counter";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

class CounterGroup extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {size:0};
    }
    handleSizeChange = (event) => {
        this.setState({
            size: event.target.value?parseInt(event.target.value):0,
        })
    }

    render(){
        const initArray = [...Array(this.state.size).keys()];
        
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
                    groupSize={this.state.size} 
                    onIncrement={() => this.props.onIncrement()}
                    onDecrement={() => this.props.onDecrement()}
                    unmountCounter={this.props.unmountCounter}
                    key={key} />)
            }
        </div>;
    }

    

}

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
