import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import ToDoItem from "../ToDoItem"

class CompletedItemList extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        console.log(this.props.completedItems);
        return <div>
            {
                this.props.completedItems.map((item,index) => 
                    <ToDoItem value={item.value} mark={item.mark} index={index} key={index} />
                )
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        completedItems: state.todoItems
    }
}

export default connect(mapStateToProps)(CompletedItemList)
