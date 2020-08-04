import React from "react";
import ToDoItem from "../ToDoItem";
import ToDoInput from "../ToDoInput"
import { connect } from "react-redux";

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props.items);
        return (<div>
            {
                this.props.items.map((item, index) => <ToDoItem

                    value={item.value} mark={item.mark} index={index} key={index} />)
            }

        </div>)
    }

    // addItem = () => {
    //     this.state.map((item) => {})
    // }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        items: state.todoItems
    }
}

export default connect(mapStateToProps)(ToDoList)

// export default ToDoList;