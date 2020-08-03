import React from "react";
import Counter from "../Counter";


class CounterGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {size:0};
    }
    handleSizeChange = (event) => {
        this.setState({
            size:event.target.value?parseInt(event.target.value):0
        })
    }
    render(){
        const initArray = [...Array(this.state.size).keys()];

        return <div>
            <label>
                Group Size:
                <input onBlur={this.handleSizeChange} defaultValue={0}></input>
            </label>
            {
                initArray.map(key => <Counter key={key} />)
            }
        </div>;
    }
}

export default CounterGroup;