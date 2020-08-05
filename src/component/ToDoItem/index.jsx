import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux"

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    render() {
        return <div>
            <label style={{
                textDecoration: this.props.item.mark ? 'line-through' : 'none'
            }} onClick={() => this.props.updateItem(this.props.item.id)}>{this.props.item.value}</label>
            <button onClick={() => this.props.deleteItem(this.props.item.id)}>x</button>
        </div>
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteItem: (id) => dispatch({ type: 'DELETE_ITEM', index: id }),
    updateItem: (id) => dispatch({ type: 'UPDATE_ITEM', index: id }),
})

export default connect(null, mapDispatchToProps)(ToDoItem);