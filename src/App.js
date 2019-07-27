import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    num1: "",
    num2: "",
    //numCopy: 0,
    ans: 0,
    operation: "",
    response: ""
  }
  render() {
    const output = {
      width: '700px',
      height: '200px',
      backgroundColor: '#ccffff',
      borderRadius: '20px',
      marginLeft: '50px',
      marginTop: '50px',
      color: '#4da6ff',
      textAlign: 'right',
      fontFamily: 'courier',
      fontSize: '100px'
    }
    const nums = {
      borderRadius: '20px',
      padding: '10px',
      width: '135px',
      height: '100px',
      backgroundColor: 'coral',
      color: 'white',
      fontSize: '50px',
      fontFamily: 'courier',
      marginLeft: '50px',
      marginTop: '50px',
      marginRight: '2px'
    }
    const others = {
      borderRadius: '20px',
      padding: '10px',
      width: '135px',
      height: '100px',
      backgroundColor: 'brown',
      color: 'white',
      fontSize: '50px',
      fontFamily: 'courier',
      marginLeft: '50px',
      marginTop: '50px',
      marginRight: '2px'
    }
    const operations = {
      borderRadius: '20px',
      padding: '10px',
      width: '135px',
      height: '100px',
      backgroundColor: 'chocolate',
      color: 'white',
      fontSize: '50px',
      fontFamily: 'courier',
      marginLeft: '50px',
      marginTop: '50px',
      marginRight: '2px'
    }
    const decimal = {
      borderRadius: '20px',
      padding: '10px',
      width: '323px',
      height: '100px',
      backgroundColor: 'coral',
      color: 'white',
      fontSize: '50px',
      fontFamily: 'courier',
      marginLeft: '50px',
      marginTop: '50px',
      marginRight: '2px'
    }
    const input = {
      backgroundColor: 'azure',
      width: '700px',
      height: '75px',
      borderRadius: '20px 20px 0px 0px',
      textAlign: 'right',
      fontFamily: 'courier',
      color: '#4da6ff',
      fontSize: '60px',
    }
    const btnClicked = (event) => {
      //console.log(event.target.value)
      if(this.state.operation === "") {
        this.setState({
          num1: event.target.value
          //numCopy: event.target.value
        })
      }
      else{
        this.setState({
          num2: event.target.value,
          numCopy: event.target.value
        })
      }
      console.log('num1 = ' + this.state.num1)
      console.log('num2 = ' + this.state.num2)
      // updateInput
      // console.log('response = ' + this.state.response)

    }
    const operationAssignment = (event) => {
      //if statement below is checking for a "" value in num1 to reassign the value of ans to num1 after a computation is done. it is 
      //independent of the statments thereafter. 
      if(this.state.num1 === ""){
        this.setState({
          num1: this.state.ans
        })
      }
      this.setState({
        operation: event.target.value
      })
      console.log(this.state.operation)
      // updateInput
      // console.log('response = ' + this.state.response)
    }
    const evaluate = (event) => {
      if(this.state.operation === "+"){
        this.setState({
          ans: parseFloat(this.state.num1) + parseFloat(this.state.num2),
          operation: "",
          num1: "",
          num2: ""
        })
      }
      else if(this.state.operation === "-"){
        this.setState({
          ans: parseFloat(this.state.num1) - parseFloat(this.state.num2),
          operation: "",
          num1: "",
          num2: ""
        })
      }
      else if(this.state.operation === "X"){
        this.setState({
          ans: parseFloat(this.state.num1) * parseFloat(this.state.num2),
          operation: "",
          num1: "",
          num2: ""
        })
      }
      else if(this.state.operation === "/"){
        this.setState({
          ans: parseFloat(this.state.num1 ) / parseFloat(this.state.num2),
          operation: "",
          num1: "",
          num2: ""
        })
      }
      console.log(this.state.ans)
      // updateInput
      // console.log('response = ' + this.state.response)
    }
    const updateInput = () => {
      // this.setState({
      //   response: this.state.num1 + " " + this.state.operation + " " + this.state.num2
      // })

      return this.state.num1 + " " + this.state.operation + " " + this.state.num2
    }
    const AC = () => {
      this.setState({
        num1: "",
       num2: "",
        ans: 0,
       operation: "",
      response: ""
      })
    }
    return (
      <div className="App">
        {/* <p>hello</p> */}
        <div style={output}>
          <div style={input}>
            {/* {this.state.response} */}
            {updateInput()}
          </div>
          {this.state.ans}
        </div>
          <button style={others}>AC</button>
          <button style={others}>+/-</button>
          <button style={others}>%</button>

          <button value ="/" style={operations} onClick={operationAssignment}>/</button>
          <button value="7" style={nums} onClick={btnClicked}>7</button>
          <button value ="8" style={nums} onClick={btnClicked}>8</button>
          <button value ="9" style={nums} onClick={btnClicked}>9</button>
          <button value ="X" style={operations} onClick={operationAssignment}>X</button>
          <button value ="4" style={nums} onClick={btnClicked}>4</button>
          <button value ="5" style={nums} onClick={btnClicked}>5</button>
          <button value ="6" style={nums} onClick={btnClicked}>6</button>
          <button value ="-" style={operations} onClick={operationAssignment}>-</button>
          <button value ="1" style={nums} onClick={btnClicked}>1</button>
          <button value ="2" style={nums} onClick={btnClicked}>2</button>
          <button value ="3" style={nums} onClick={btnClicked}>3</button>
          <button value ="+" style={operations} onClick={operationAssignment}>+</button>
          <button value ="0" style={nums} onClick={btnClicked}>0</button>
          <button style={decimal}>.</button>
          <button style={operations} onClick={evaluate}>=</button>



        


      </div>
    );
  }
}

export default App;
