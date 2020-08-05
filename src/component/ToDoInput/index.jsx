import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import todolistApi from "../Axios"

class ToDoInput extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = { value: "" ,mark:false};
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    addItem = () => {
        this.props.addItem(this.state);
        this.setState({value: ""});
    }

    render() {
        console.log(this.state.value);
        console.log(this.state.mark);
        return (<div>
            <input type="text" value={this.state.value} onChange={this.handleChange}></input><button onClick={this.addItem}>ADD</button>
        </div>)
    }

    async componentDidMount() {
        todolistApi.getAllItems().then(result => {
            for(let i=0;i<result.data.length;i++){
                console.log(result.data[i].content);
                this.props.addItem({value:result.data[i].content,mark:result.data[i].status})
            }
            })
        }
}



const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch({type: "ADD_ITEM", item})
})

export default connect(null, mapDispatchToProps)(ToDoInput)
