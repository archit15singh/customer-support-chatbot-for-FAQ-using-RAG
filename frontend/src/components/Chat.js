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

const Chat = () => {
  const localSender = 'astronaut';

  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    console.log('Sending');
    setInputValue('');
  };

  const messages = [
    {
      message: 'start from here?',
      sender: 'bot',
      direction: 'incoming',
      position: 'single',
    },
    {
      message: 'Hello world',
      sender: 'bot',
      direction: 'incoming',
      position: 'single',
    },
    {
      message: 'Hello world',
      sender: localSender,
      direction: 'outgoing',
      position: 'single',
    },
    {
      message: 'Hello world',
      sender: 'bot',
      direction: 'incoming',
      position: 'last',
    },
    {
      message: 'Hello world',
      sender: localSender,
      direction: 'outgoing',
      position: 'last',
    },
    {
      message: 'Hello world',
      sender: 'bot',
      direction: 'incoming',
      position: 'last',
    },
  ];

  return (
    <div style={{ position: 'relative', height: '80vh' }}>
      <MainContainer>
        <ChatContainer>
          <ConversationHeader>
            <Avatar src={botIco} name="bot" />
            <ConversationHeader.Content userName="bot" info="Active now" />
          </ConversationHeader>

          <MessageList typingIndicator={<TypingIndicator content="bot is typing" />}>
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
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default Chat;
