import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { HeaderDetailWrap, HeaderRight, HeaderWrap, UserIcon } from '@layouts/Header/styles.jsx';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderRight>
        <HeaderDetailWrap>
          <UserIcon />
          <p>아이디</p>
          <FontAwesomeIcon style={{ marginLeft: '10px', color: '#b8c0ca' }} icon={'fas fa-caret-down'} />
        </HeaderDetailWrap>
        <HeaderDetailWrap>
          <FontAwesomeIcon style={{ color: '#b8c0ca' }} icon={'fas fa-sign-out-alt'} />
        </HeaderDetailWrap>
      </HeaderRight>
    </HeaderWrap>
  );
};

export default Header;
