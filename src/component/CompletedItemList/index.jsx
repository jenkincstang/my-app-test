import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import ToDoItem from "../ToDoItem"

class CompletedItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    //todo
    render() {
        console.log(this.props.completedItems);
        return <div>
            {
                this.props.completedItems.map((item, index) =>
                    <ToDoItem item={item} key={index} />
                )
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        completedItems: state.todoItems.filter(item => item.mark)
    }
}

export default connect(mapStateToProps)(CompletedItemList)
