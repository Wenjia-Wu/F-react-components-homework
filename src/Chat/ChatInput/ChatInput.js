import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleClick = () => {
    this.props.addMessage(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
        <button type="button" onClick={this.handleClick}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
