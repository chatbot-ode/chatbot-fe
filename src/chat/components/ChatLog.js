import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { RiRobot2Line } from 'react-icons/ri';
import { HiUserCircle } from 'react-icons/hi2';
import { TbLoaderQuarter } from 'react-icons/tb';
import color from '../../global/styles/color';
import fontsize from '../../global/styles/fontsize';
import loadingImg from '../../global/images/loading.gif';

const { light, dark } = color;
const { medium } = fontsize;

const Spinner = styled(TbLoaderQuarter)`
  animation: spin 1s steps(8) infinite;
  font-size: 47px;
  color: ${dark};

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Wrapper = styled.ul`
  flex-grow: 1;
  background: ${light};
  font-size: ${medium};
  color: ${dark};
  border: 3px solid ${dark};
  overflow-y: auto;

  li {
    padding: 10px 20px;
  }

  .user {
    text-align: right;

    span {
      padding-right: 10px;
    }

    svg {
      transform: translateY(3px);
    }
  }

  .system {
    text-align: left;

    span {
      padding-left: 10px;
    }

    svg {
      transform: translateY(3px);
    }
  }

  .loading {
    height: 47px;
    display: block;
    margin: 0 10px 0;
  }
`;

const ChatLog = ({ items, loading }) => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    setTimeout(() => {
      el.scrollTo(0, 46.5 * items.length);
    }, 500);
  }, [ref, items]);

  return (
    <Wrapper ref={ref}>
      {items.map((item, i) => (
        <ChatItem key={item.type + '-' + i} item={item} />
      ))}
      {loading && <Spinner alt="loading" className="loading" />}
    </Wrapper>
  );
};

const ChatItem = ({ item }) => {
  const { type, message } = item;

  // 로그 출력
  console.log(`[${type}]`, message);

  return (
    <>
      <li className={type}>
        {type === 'system' ? (
          <>
            <RiRobot2Line />
            <span>{message}</span>
          </>
        ) : (
          <>
            <span>{message}</span>
            <HiUserCircle />
          </>
        )}
      </li>
    </>
  );
};

export default React.memo(ChatLog);
