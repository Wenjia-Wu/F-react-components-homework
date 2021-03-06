import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';
import { ROLE } from '../constants';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  addCustomerMessage = (customerMessage) => {
    const answer = this.addAnswerMessage(customerMessage);
    this.setState((prevState) => ({
      messages: [...prevState.messages, { text: customerMessage, role: ROLE.CUSTOMER }, ...answer],
    }));
  };

  addAnswerMessage = (customerMessage) => {
    return answersData.filter((item) =>
      item.tags.some((tag) => tag !== 'DEFAULT' && customerMessage.includes(tag))
    );
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput addMessage={this.addCustomerMessage} />
      </main>
    );
  }
}

export default Chat;
