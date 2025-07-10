import React from 'react';
import styled from 'styled-components';
import { FaLocationArrow } from 'react-icons/fa';
import color from '../../global/styles/color';
import fontsize from '../../global/styles/fontsize';

const { dark, light } = color;
const { medium } = fontsize;

const StyledForm = styled.form`
  display: flex;
  height: 55px;
  border: 3px solid ${dark};
  margin-top: 10px;

  button {
    width: 50px;
    background: ${dark};
    border: 0;
    cursor: pointer;

    svg {
      font-size: 35px;
      color: ${light};
    }
  }

  input {
    flex-grow: 1;
    border: 0;
    padding: 0 20px;
    font-size: ${medium};
    color: ${dark};
  }
`;

const ChatInput = ({ onSubmit, loading }) => {
  return (
    <StyledForm onSubmit={onSubmit} autoComplete="off">
      <input
        type="text"
        name="message"
        placeholder="메시지를 입력하세요..."
        disabled={loading}
      />
      <button type="submit">
        <FaLocationArrow />
      </button>
    </StyledForm>
  );
};

export default React.memo(ChatInput);
