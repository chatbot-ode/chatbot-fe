import React from 'react';
import { Helmet } from 'react-helmet-async';
import ChatContainer from '../containers/ChatContainer';

const ChatPage = () => {
  return (
    <>
      <Helmet>
        <title>AI와 대화</title>
      </Helmet>
      <ChatContainer />
    </>
  );
};

export default React.memo(ChatPage);
