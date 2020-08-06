import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import todolistApi from "../Axios"

class ToDoItem extends React.Component {
    //todo remove
    constructor(props) {
        super(props);
    }

    updateItem = (item) => {
        this.props.updateItem(item.id);
        todolistApi.updateItem(item);
    }

    deleteItem = (id) => {
        this.props.deleteItem(id);
        todolistApi.deleteItem(id);
    }

    render() {
        return <div>
            <label style={{
                textDecoration: this.props.item.status ? 'line-through' : 'none'
            }} onClick={() => this.updateItem(this.props.item)}>{this.props.item.content}</label>
            <button onClick={() => this.deleteItem(this.props.item.id)}>x</button>
        </div>
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteItem: (id) => dispatch({ type: 'DELETE_ITEM', id: id }),
    updateItem: (id) => dispatch({ type: 'UPDATE_ITEM', id: id }),
})

export default connect(null, mapDispatchToProps)(ToDoItem);