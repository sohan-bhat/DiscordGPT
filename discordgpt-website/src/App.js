import React, { Component } from 'react';


class App extends Component {

  handleClick = () => {
    window.location.href = "https://discord.com/oauth2/authorize?client_id=1125057379243921448&scope=bot&permissions=545394785535"
  }

  render() { 
    return (
      <h1>DISCORD-GPT</h1>
      <p>Introducing Discord GPT, A GPT 3.5 turbo powered Chatbot that responds to @GPT</p>
      <div>
        <button onClick={this.handleClick}>Click to connect this bot to server!</button>
      </div>
    );
  }
}
 
export default App;