import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

class ToDoInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (<div>
        <input></input><button>ADD</button>
        </div>)
    }
}
export default ToDoInput