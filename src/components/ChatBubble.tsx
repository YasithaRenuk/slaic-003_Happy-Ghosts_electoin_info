import React from 'react';

interface Props {
  message: string;
  sender: string;
}

const ChatBubble = ({ message, sender }: Props) => {
  const isHuman = sender === 'human';

  return (
    <div className={`flex items-center justify-${isHuman ? 'end' : 'start'} px-4 py-2 w-full`}>
      {!isHuman && <div className="rounded-full h-8 w-8 bg-white"></div>}
      <span className="text-lg mx-2">{message}</span>
      {isHuman && <div className="rounded-full h-8 w-8 bg-white"></div>}
    </div>
  );
};

export default ChatBubble;
