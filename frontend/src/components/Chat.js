import React, { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  Avatar,
  TypingIndicator
} from '@chatscope/chat-ui-kit-react';
import botIco from '../assets/bot.png';
import userIco from '../assets/astronaut.png';
import axios from 'axios';

const Chat = () => {
  const localSender = 'user';
  const botReceiver = 'bot';

  const [inputValue, setInputValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const [messages, setMessages] = useState([
    {
      message: 'hello world, how can i help you?',
      sender: botReceiver,
      direction: 'incoming',
      position: 'single',
    }
  ]);

  const handleSend = () => {
    setIsDisabled(true);

    const newUserMessage = {
      message: inputValue,
      sender: localSender,
      direction: 'outgoing',
      position: 'single',
    };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);

    axios
      .post('http://localhost:5000/chat', { user_message: inputValue})
      .then((response) => {
        const newBotMessage = {
          message: response.data.response,
          sender: botReceiver,
          direction: 'incoming',
          position: 'single',
        };

        setMessages((prevMessages) => [...prevMessages, newBotMessage]);
        setInputValue('');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.'); // Show an alert on error
        setInputValue('');
      })
      .finally(() => {
        setIsDisabled(false);
      });

  };

  return (
    <div style={{ position: 'relative', height: '80vh' }}>
      <MainContainer>
        <ChatContainer>
          <ConversationHeader>
            <Avatar src={botIco} name="bot" />
            <ConversationHeader.Content userName="Twitter Bot" info="Active now" />
          </ConversationHeader>

          <MessageList typingIndicator={isDisabled ? <TypingIndicator content="bot is thinking" /> : null}>
            {messages.map((message, index) => (
              <Message key={index} model={message}>
                <Avatar src={message.sender === 'bot' ? botIco : userIco} name={message.sender} />
              </Message>
            ))}
          </MessageList>

          <MessageInput
            onSend={handleSend}
            attachButton={false}
            placeholder="Type message here"
            value={inputValue}
            onChange={(newValue) => setInputValue(newValue)}
            autoFocus
            disabled={isDisabled}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default Chat;
