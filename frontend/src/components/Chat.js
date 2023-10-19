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
import emilyIco from '../logo.svg'

const Chat = () => {
  const localSender = 'archit';
  
  return (
    <div style={{position: "relative", height: "500px"}}>
    <MainContainer>
      <ChatContainer>
        
        <ConversationHeader>
          <Avatar src={emilyIco} name="Emily" />
          <ConversationHeader.Content userName="Emily" info="Active 10 mins ago" />
        </ConversationHeader>
        
        <MessageList typingIndicator={<TypingIndicator content="Emily is typing" />}>
            <MessageSeparator content="Saturday, 30 November 2019" />
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    sender: "Emily",
                    direction: "incoming",
                    position: "single"
                }}>
                    <Avatar src={emilyIco} name={"Emily"} />
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
                    sender: "Emily",
                    direction: "incoming",
                    position: "first"
                }} avatarSpacer />
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    sender: "Emily",
                    direction: "incoming",
                    position: "normal"
                }} avatarSpacer />
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    sender: "Emily",
                    direction: "incoming",
                    position: "normal"
                }} avatarSpacer />
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    sender: "Emily",
                    direction: "incoming",
                    position: "last"
                }}>
                    <Avatar src={emilyIco} name={"Emily"} />
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
                    sender: "Emily",
                    direction: "incoming",
                    position: "first"
                }} avatarSpacer />
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    sender: "Emily",
                    direction: "incoming",
                    position: "last"
                }}>
                    <Avatar src={emilyIco} name={"Emily"} />
                </Message>
                
                <MessageSeparator content="Saturday, 31 November 2019" />
                
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    sender: "Emily",
                    direction: "incoming",
                    position: "single"
                }}>
                    <Avatar src={emilyIco} name={"Emily"} />
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
                    sender: "Emily",
                    direction: "incoming",
                    position: "first"
                }} avatarSpacer />
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    sender: "Emily",
                    direction: "incoming",
                    position: "normal"
                }} avatarSpacer />
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    sender: "Emily",
                    direction: "incoming",
                    position: "normal"
                }} avatarSpacer />
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    sender: "Emily",
                    direction: "incoming",
                    position: "last"
                }}>
                    <Avatar src={emilyIco} name={"Emily"} />
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
                    sender: "Emily",
                    direction: "incoming",
                    position: "first"
                }} avatarSpacer />
                <Message model={{
                    message: "Hello world",
                    sentTime: "15 mins ago",
                    sender: "Emily",
                    direction: "incoming",
                    position: "last"
                }}>
                    <Avatar src={emilyIco} name={"Emily"} />
                </Message>
        
        </MessageList>
        
        <MessageInput placeholder="Type message here" />        
      
      </ChatContainer>
    </MainContainer>
    </div>
  );
};


export default Chat;
