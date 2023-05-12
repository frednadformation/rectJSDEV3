import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment() {
        this.setState((prevState, props)=> ({
            count: prevState.count + props.value
        }))
        console.log(this.state.count);
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

  render() {
    return (
      <div>Counter
        <button onClick={()=>this.increment()}>+5</button>
      </div>
    )
  }
}

export default Counter