import React from "react";
import Counter from "../Counter";


class CounterGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {size:0,totalValue:0};
    }
    handleSizeChange = (event) => {
        this.setState({
            size:event.target.value?parseInt(event.target.value):0
        })
    }
    handleIncrease = () =>{
        this.setState((prevState)=>(
            {
                totalValue:prevState.totalValue+1
            })
        )
    }
    handleDescrese = () =>{
        this.setState((prevState)=>(
            {
                totalValue:prevState.totalValue-1
            })
        )
    }

    render(){
        const initArray = [...Array(this.state.size).keys()];

        return <div>
            <label>
                Group Size:
                <input onBlur={this.handleSizeChange} defaultValue={0}></input>
            </label>
            <label>
                Total Number:{this.state.totalValue}
            </label>
            {
                initArray.map(key => <Counter onIncrease={this.handleIncrease} onDescrese={this.handleDescrese} key={key} />)
            }
        </div>;
    }
}

export default CounterGroup;