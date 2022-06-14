import React, { Component } from 'react';
import Counter from './components/Counter';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={show :true}
}
  render() {
    return <div>
      <h1>
      {this.state.show && <Counter />}
      </h1>
      <button onClick={()=>this.setState({show:!this.state.show})} > show | hide </button>
    </div>;
  }
}



