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
import userIco from '../assets/astronaut.png'

const Chat = () => {
  const localSender = 'astronaut';
  
  return (
    <div style={{position: "relative", height: "70vh"}}>
    <MainContainer>
      <ChatContainer>
        
        <ConversationHeader>
          <Avatar src={botIco} name="bot" />
          <ConversationHeader.Content userName="bot" info="Active now" />
        </ConversationHeader>
        
        <MessageList typingIndicator={<TypingIndicator content="bot is typing" />}>
                <Message model={{
                    message: "start from here?",
                    sender: "bot",
                    direction: "incoming",
                    position: "single"
                }}>
                    <Avatar src={botIco} name={"bot"} />
                </Message>

            <MessageSeparator content="Saturday, 30 November 2019" />
                <Message model={{
                    message: "Hello world",
                    sender: "bot",
                    direction: "incoming",
                    position: "single"
                }}>
                    <Avatar src={botIco} name={"bot"} />
                </Message>
                

                <Message model={{
                    message: "Hello world",
                    sender: localSender,
                    direction: "outgoing",
                    position: "single"
                }}>
                    <Avatar src={userIco} name={"user"} />
                </Message>


                <Message model={{
                    message: "Hello world",
                    sender: "bot",
                    direction: "incoming",
                    position: "normal"
                }} avatarSpacer />
                <Message model={{
                    message: "Hello world",
                    sender: "bot",
                    direction: "incoming",
                    position: "last"
                }}>
                    <Avatar src={botIco} name={"bot"} />
                </Message>


                <Message model={{
                    message: "Hello world",
                    sender: localSender,
                    direction: "outgoing",
                    position: "normal"
                }} avatarSpacer />
                <Message model={{
                    message: "Hello world",
                    sender: localSender,
                    direction: "outgoing",
                    position: "last"
                }}>
                    <Avatar src={userIco} name={"user"} />
                </Message>
                
                <MessageSeparator content="Saturday, 31 November 2019" />
                
                <Message model={{
                    message: "Hello world",
                    sender: "bot",
                    direction: "incoming",
                    position: "last"
                }}>
                    <Avatar src={botIco} name={"user"} />
                </Message>
        
        </MessageList>
        
        <MessageInput placeholder="Type message here" />        
      
      </ChatContainer>
    </MainContainer>
    </div>
  );
};


export default Chat;
