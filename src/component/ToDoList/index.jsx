import React from "react";
import ToDoItem from "../ToDoItem";

class ToDoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {size:5};
    }

    render(){
        const initArray = [...Array(this.state.size).keys()];
        return (<div>
            {
                initArray.map(key => <ToDoItem 
                    
                  value=""  key={key} />)
            }
        </div>)
    }
}

export default ToDoList;