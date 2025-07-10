import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import ChatLog from '../components/ChatLog';
import ChatInput from '../components/ChatInput';

const Wrapper = styled.div`
  min-width: 320px;
  max-width: 450px;
  width: 100%;
  height: 600px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
`;

const ChatContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (loading) return;

      const message = e.target.message.value.trim();

      setItems(items => items.concat({ type: 'user', message }));

      // 챗봇으로 메세지 전송
      const requestUrl = `${process.env.REACT_APP_API_URL}/chat?message=${message}`;
      setLoading(true);

      fetch(requestUrl)
        .then(res => res.json())
        .then(({ system }) => {
          const message = system.replace(/\\n/g, '<br />');
          setItems(items => items.concat({ type: 'system', message }));

          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });

      e.target.message.value = '';
    },
    [loading]
  );

  return (
    <Wrapper>
      <ChatLog items={items} loading={loading} />
      <ChatInput onSubmit={onSubmit} loading={loading} />
    </Wrapper>
  );
};

export default React.memo(ChatContainer);
