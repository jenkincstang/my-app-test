import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux"

class ToDoItem extends React.Component {
    //todo remove
    constructor(props) {
        super(props);
    }


    
    render() {
        return <div>
            <label style={{
                textDecoration: this.props.item.status ? 'line-through' : 'none'
            }} onClick={() => this.props.updateItem(this.props.item)}>{this.props.item.content}</label>
            <button onClick={() => this.props.deleteItem(this.props.item.id)}>x</button>
        </div>
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteItem: (id) => dispatch({ type: 'DELETE_ITEM', id: id }),
    updateItem: (id) => dispatch({ type: 'UPDATE_ITEM', id: id }),
})

export default connect(null, mapDispatchToProps)(ToDoItem);