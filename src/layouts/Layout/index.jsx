import { Outlet } from 'react-router-dom';
import {
  Contents,
  ContentsWrap,
  Header,
  HeaderDetailWrap,
  HeaderRight,
  Logo,
  NavInnerWrap,
  NavWrap,
  UserIcon,
} from '@layouts/Layout/styles.jsx';
import Navigation from '@layouts/Navigation/index.jsx';
import { navigation } from '../../../data/navigation.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Layout = () => {
  return (
    <>
      <NavWrap>
        <Logo>
          <img src="src/assets/images/logo.png" alt="" />
        </Logo>
        <NavInnerWrap>
          <Navigation data={navigation} />
        </NavInnerWrap>
      </NavWrap>
      <ContentsWrap>
        <Header>
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
        </Header>
        <Contents>
          <Outlet />
        </Contents>
      </ContentsWrap>
    </>
  );
};

export default Layout;
