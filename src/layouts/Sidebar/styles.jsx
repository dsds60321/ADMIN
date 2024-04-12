import styled from '@emotion/styled';

export const NavWrap = styled.div`
  height: 100vh;
  width: 219px;
  border-right: 1px solid #e4e9ec;
  transition: width 0.2s;
  overflow-y: auto;
`;

export const NavInnerWrap = styled.div`
  height: calc(100% - 110px);
  overflow-y: auto;
`;

export const Logo = styled.div`
  width: 84px;
  margin-left: 20px;
  margin-top: 20px;
  & img {
    width: 84px;
  }
`;
export const MenuContents = styled.div`
  margin: 20px;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  & ul > li {
    cursor: pointer;
    display: flex;
    height: 40px;
    align-items: center;
    > i {
      margin-right: 15px;
      color: #70767e;
    }
    > p {
      color: #70767e;
      flex: 1;
      text-decoration: none;
      font-size: 13px;
    }
    //& p:after {
    //  content: '\\f00c';
    //  font-size: 15px;
    //  font-family: 'Font Awesome 5 Free';
    //  font-weight: 900;
    //  color: #000;
    //  margin-left: auto;
    //}
  }
  & ul > li:nth-of-type(n + 2) {
    display: none;
    height: auto;
    opacity: 1;
  }
  & ul > li:nth-of-type(n + 2) > ul {
    padding-top: 5px;
    padding-bottom: 8px;
  }
  & ul > li:nth-of-type(n + 2) > ul > li {
    height: 20px;
  }
  & ul > li > ul > li p {
    position: relative;
    color: #70767e;
  }
  & ul > li > ul > li a {
    text-decoration: none;
    font-size: 13px;
    color: #70767e;
    :after {
      content: '';
      width: 100%;
      height: 1px;
      position: absolute;
      left: 0;
      bottom: -5px;
      background-color: #eff3f6;
    }
  }
`;
