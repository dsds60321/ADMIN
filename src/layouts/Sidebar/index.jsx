import { Logo, MenuContents, NavInnerWrap, NavWrap } from '@layouts/Sidebar/styles.jsx';
import { useState } from 'react';

const Sidebar = ({ data }) => {
  const [selectedIndices, setSelectedIndices] = useState({});
  return (
    <NavWrap>
      <Logo>
        <img src="/src/assets/images/logo.png" alt="" />
      </Logo>
      <NavInnerWrap>
        <MenuContents>
          <ul className="menu-item group" data-navtitle="contract">
            <li className="item">
              <i className="fas fa-user"></i>
              <p data-i18n="nav.info.mcht">가맹점 정보</p>
            </li>
            <li className="sub-item">
              <ul className="menu-item">
                <li className="item" data-navsubtitle="view">
                  <p>
                    <a href="/mcht/view" data-i18n="nav.info.basic">
                      기본 정보
                    </a>
                  </p>
                </li>
                <li className="item" data-navsubtitle="app">
                  <p>
                    <a href="/mcht/app" data-i18n="nav.info.app">
                      앱 정보
                    </a>
                  </p>
                </li>
                <li className="item" data-navsubtitle="sub">
                  <p>
                    <a href="/mcht/sub">하위 사업자 조회</a>
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </MenuContents>
      </NavInnerWrap>
    </NavWrap>
  );
};

export default Sidebar;
