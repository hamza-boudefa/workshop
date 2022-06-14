import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state={count:0,timer:0,array:["taoufik","marwen","tarek"]}
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({timer:this.state.timer+1})
        }, 1000);
    }
  
    componentDidUpdate(){
        console.log("componentDidUpdate");

    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
  render() {
      const handlePlusButton=(x)=>{
        this.setState({count:this.state.count+x})
      }
      const handleMinusButton=()=>{
        this.state.count>0 && this.setState({count: this.state.count-1 })
      }

    return <div>
        {/* <button onClick={()=> this.state.count>0 ? this.setState({count:this.state.count-1 }) : null} > - </button> */}
        {/* <button onClick={()=>this.setState({count:this.state.count>0 ? this.state.count-1 : 0 })} > - </button> */}
        <button onClick={handleMinusButton} > - </button>
        <p> {this.state.count} </p>
        <button onClick={()=>handlePlusButton(5)} > + </button>
        <h3> {this.state.timer} </h3>
        <h1> {this.state.array.map(el=> <p> {el} </p> )} </h1>
        <button onClick={()=>this.setState({array:[...this.state.array,"maher"]})} > add Maher </button>
    </div>;
  }
}

