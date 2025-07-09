import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { BsChatRightDots } from 'react-icons/bs';
import color from '../styles/color';
import fontsize from '../styles/fontsize';

const { primary, light, dark } = color;
const { big, extraBig } = fontsize;

const StyledHeader = styled.header`
  height: 90px;
  display: flex;
  background: ${primary};
  color: ${light};
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;

  .left,
  .right {
    display: flex;
    flex-grow: 1;
  }

  .right {
    justify-content: right;
  }

  a {
    font-size: ${big};
    color: ${light};
    display: flex;
    align-items: center;

    &.on {
      text-shadow: 2px 2px 5px ${dark};
    }

    svg {
      font-size: ${extraBig};
    }
  }

  a + a {
    margin-left: 25px;
  }
`;

const Header = () => {
  return (
    <StyledHeader className="layout-width">
      <div className="left">
        <NavLink
          to="/"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          <BsChatRightDots />
          <span>AI와 대화</span>
        </NavLink>
      </div>
    </StyledHeader>
  );
};

export default React.memo(Header);