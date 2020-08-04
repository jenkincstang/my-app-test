import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

class ToDoInput extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = { value: "" };
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    addItem = () => {
        this.props.addItem(this.state.value);
        this.setState({value: ""});
    }

    render() {
        console.log(this.state.value);
        return (<div>
            <input type="text" value={this.state.value} onChange={this.handleChange}></input><button onClick={this.addItem}>ADD</button>
        </div>)
    }
}



const mapDispatchToProps = (dispatch) => ({
    // onIncrement: () => dispatch({type: 'INCREMENT'}),
    addItem: (value) => dispatch({type: "ADD_ITEM", value}),
    deleteItem: (index) => dispatch({type: 'DELETE_ITEM', index})
})

export default connect(null, mapDispatchToProps)(ToDoInput)
