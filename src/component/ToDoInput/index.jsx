import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import todolistApi from "../Axios"

class ToDoInput extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = { content: "", status: false };
    }

    handleChange = (event) => {
        this.setState({ content: event.target.value });
    }

    addItem = () => {
            todolistApi.postItem(this.state).then(res => {
            console.log(res);
            this.props.addItem({...res.data});
            this.setState({ content: "" });
        });
    }

    render() {
        return (<div>
            <input type="text" value={this.state.content} onChange={this.handleChange}></input><button onClick={this.addItem}>ADD</button>
        </div>)
    }

    async componentDidMount() {
        todolistApi.getAllItems().then(result => {
            result.data.map(item => this.props.addItem(item))
        })
    }
}



const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch({ type: "ADD_ITEM", item })
})

export default connect(null, mapDispatchToProps)(ToDoInput)
