import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat';
import uuid from 'react-uuid';


export default function RobotChat() {
  const [messages, setMessages] = useState([]);

  
    const default_message = [
        'How are you?',
        'Nice to chat with you',
        'That is impressive',
        'Excuse me',];

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: '?',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    let newMessage = 
    [
        {
            _id: uuid(),
            text: default_message[Math.floor(Math.random() * default_message.length)],
            createdAt: new Date(),
            user: {
                _id: 2,
                name: '?'
            },
        },
    ]
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessage))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}