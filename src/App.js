import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation.js';
import Char from './Char/Char.js';

class App extends Component {
  state={
    para:'',
  }

  changeListnerHandler=(event)=>{
    this.setState({
      para:event.target.value,
    })
  }

  deleteCharHandler=(idx)=>{
    let paraTemp=this.state.para.split('');
    paraTemp.splice(idx,1);
    let newS=paraTemp.join('')

    this.setState({
      para:newS
    })

  }

  render() {
    let charList = this.state.para.split('').map((l,index) => {
      return <Char letter={l} key={index} click={()=>this.deleteCharHandler(index)} />;
    });

    return (
      <div className="App">
        <input type="text" onChange={this.changeListnerHandler} value={this.state.para}/>
        <h1>{this.state.para.length}</h1>
        <Validation length={this.state.para.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
