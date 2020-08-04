import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux"

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render () {
        return <div>
            <label>{this.props.value}</label>
            <button>x</button>
        </div>
    }
}

export default ToDoItem;