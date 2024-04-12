import { Outlet } from 'react-router-dom';
import { Contents, ContentsWrap } from '@layouts/Layout/styles.jsx';
import Sidebar from '@layouts/Sidebar/index.jsx';
import { navigation } from '../../data/navigation.js';
import Header from '@layouts/Header/index.jsx';
const Layout = () => {
  return (
    <>
      <Sidebar data={navigation} />
      <ContentsWrap>
        <Header />
        <Contents>
          <Outlet />
        </Contents>
      </ContentsWrap>
    </>
  );
};

export default Layout;
