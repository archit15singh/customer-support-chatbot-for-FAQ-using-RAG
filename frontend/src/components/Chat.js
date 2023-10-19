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
  TypingIndicator
} from '@chatscope/chat-ui-kit-react';
import botIco from '../assets/bot.png'
import userIco from '../assets/astronaut.png'

const Chat = () => {
  const localSender = 'astronaut';
  
  const handleSend = () => {
    console.log("Sending");
  }

  return (
    <div style={{position: "relative", height: "80vh"}}>
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
                    position: "last"
                }}>
                    <Avatar src={botIco} name={"bot"} />
                </Message>


                <Message model={{
                    message: "Hello world",
                    sender: localSender,
                    direction: "outgoing",
                    position: "last"
                }}>
                    <Avatar src={userIco} name={"user"} />
                </Message>
                
                
                <Message model={{
                    message: "Hello world",
                    sender: "bot",
                    direction: "incoming",
                    position: "last"
                }}>
                    <Avatar src={botIco} name={"user"} />
                </Message>
        
        </MessageList>
        
        <MessageInput 
        onSend={handleSend}
        attachButton={false} 
        placeholder="Type message here" 
        autoFocus />        
      
      </ChatContainer>
    </MainContainer>
    </div>
  );
};


export default Chat;
