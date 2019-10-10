import ChatBot from 'react-simple-chatbot';
import React from "react";
const ChatBotComponent =(props)=>{
    
    return <div className="floatRightBottom"><ChatBot floating={true}
    headerTitle="Speech Recognition"
    recognitionEnable={true}
    steps={[
      {
        id: '1',
        message: 'What is your name?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hi {previousValue}, nice to meet you!',
        end: false,
      },
    ]}
  /></div>;
}
export default ChatBotComponent;