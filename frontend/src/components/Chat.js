import React from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput
} from '@chatscope/chat-ui-kit-react';


const Chat = () => {
  return (
    <MainContainer style={{ position: "relative", height: "70vh" }}>
        <ChatContainer>
            <MessageList>
            <Message
                model={{
                    message: "Hello my friend",
                    sentTime: "just now",
                    sender: "Joe"
                }}
            />
            </MessageList>
            <MessageInput placeholder="Type message here" />
        </ChatContainer>
    </MainContainer>
  );
};


export default Chat;
