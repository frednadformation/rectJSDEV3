import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: "",
         comments: "",
         topic: 'react'
      }
    }

    handleUsernameChange = event =>{
        this.setState({username: event.target.value});
    } 
    handleCommentsChange = event =>{
        this.setState({comments: event.target.value});
    } 
    handleTopicChange = event =>{
        this.setState({topic: event.target.value});
    } 

    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault();
    };

  render() {
    const { username, comments, topic } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>

        <label for="username" >
            Username
        </label>
        <input type="text" name="username" value={username} onChange={this.handleUsernameChange} />
        
        <br />
        
        <label for="comments" >
            Comments
        </label>
        <input type="text" name="comments" value={comments} onChange={this.handleCommentsChange} />
        
        <br />

        <label for="topic" >Topic :</label>
        <select name='topic' value={topic} onChange={this.handleTopicChange}>
            <option value="react"> React</option>
            <option value="angular">Angular</option>
            <option value="vue"> VueJS</option>
        </select>
        
        <br />
        
        <input type='submit' name="submit" />
      </form>
    )
  }
}

export default Form 