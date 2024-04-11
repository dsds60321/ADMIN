import styled from '@emotion/styled';

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
  }
  & ul > li:nth-of-type(2) {
    display: none;
    height: auto;
    opacity: 1;
  }
  & ul > li:nth-of-type(2) > ul {
    padding-top: 5px;
    padding-bottom: 8px;
  }
  & ul > li:nth-of-type(2) > ul > li {
    height: 30px;
  }
  & ul > li:nth-of-type(2) > ul > li p {
    position: relative;
    color: #70767e;
  }
  & ul > li:nth-of-type(2) > ul > li a {
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
