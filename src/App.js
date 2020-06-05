import React, { Component } from 'react';
import InputField from './InputField/InputField';
import './App.css';
import Validation from './ValidationComponent/Validation';
import Char from './Char/Char';


class App extends Component {
  state = {
    inputTxt: "",
    length: 0
  }
  nameChangeHandler = (event) =>{
  this.setState({
    inputTxt: event.target.value,
    length: event.target.value.length
  })
}
deleteCharHandler = (index) => {
  const text = this.state.inputTxt.split('');
  text.splice(index, 1);
  const updatedText = text.join('');
  this.setState({inputTxt: updatedText});

}
  render() {
    const charList =  this.state.inputTxt.split('').map((ch, index) => {
      return <Char
       character = {ch}
        key ={index}
        clicked = {() => this.deleteCharHandler(index)}  
        />;
    });
    return (
      <div className="App">
        <InputField value= {this.state.inputTxt} changed= {(event)=> this.nameChangeHandler(event)} />
        <Validation inputLength = {this.state.inputTxt.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
