import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux"

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    deleteItem = () => {
        this.props.deleteItem(this.props.index);
    }

    changeComplete = () => {
        this.props.updateItem(this.props.index)
    }

    render() {
        return <div>
            <label style={{
                textDecoration: this.state.mark ? 'line-through' : 'none'
            }} onClick={this.changeComplete}>{this.props.value}</label>
            <button onClick={this.deleteItem}>x</button>
        </div>
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteItem: (index) => dispatch({ type: 'DELETE_ITEM', index }),
    updateItem: (index) => dispatch({ type: 'UPDATE_ITEM', index }),
})


export default connect(null, mapDispatchToProps)(ToDoItem);