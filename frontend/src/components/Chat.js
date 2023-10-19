import React from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  Avatar,
  TypingIndicator,
  MessageSeparator
} from '@chatscope/chat-ui-kit-react';
import botIco from '../assets/bot.png'

const Chat = () => {
  const localSender = 'archit';
  
  return (
    <div style={{position: "relative", height: "70vh"}}>
    <MainContainer>
      <ChatContainer>
        
        <ConversationHeader>
          <Avatar src={botIco} name="bot" />
          <ConversationHeader.Content userName="bot" info="Active 10 mins ago" />
        </ConversationHeader>
        
        <MessageList typingIndicator={<TypingIndicator content="bot is typing" />}>
            <MessageSeparator content="Saturday, 30 November 2019" />
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    sender: "bot",
                    direction: "incoming",
                    position: "single"
                }}>
                    <Avatar src={botIco} name={"bot"} />
                </Message>
                
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    sender: localSender,
                    direction: "outgoing",
                    position: "single"
                }} />
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    sender: "bot",
                    direction: "incoming",
                    position: "first"
                }} avatarSpacer />
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    sender: "bot",
                    direction: "incoming",
                    position: "normal"
                }} avatarSpacer />
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    sender: "bot",
                    direction: "incoming",
                    position: "normal"
                }} avatarSpacer />
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    sender: "bot",
                    direction: "incoming",
                    position: "last"
                }}>
                    <Avatar src={botIco} name={"bot"} />
                </Message>
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    direction: "outgoing",
                    position: "first"
                }} />
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    direction: "outgoing",
                    position: "normal"
                }} />
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    direction: "outgoing",
                    position: "normal"
                }} />
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    direction: "outgoing",
                    position: "last"
                }} />
                
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    sender: "bot",
                    direction: "incoming",
                    position: "first"
                }} avatarSpacer />
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    sender: "bot",
                    direction: "incoming",
                    position: "last"
                }}>
                    <Avatar src={botIco} name={"bot"} />
                </Message>
                
                <MessageSeparator content="Saturday, 31 November 2019" />
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    sender: "bot",
                    direction: "incoming",
                    position: "first"
                }} avatarSpacer />
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    sender: "bot",
                    direction: "incoming",
                    position: "last"
                }}>
                    <Avatar src={botIco} name={"bot"} />
                </Message>
        
        </MessageList>
        
        <MessageInput placeholder="Type message here" />        
      
      </ChatContainer>
    </MainContainer>
    </div>
  );
};


export default Chat;
