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

export const ContentsWrap = styled.div`
  width: calc(100% - 220px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
`;

export const HeaderRight = styled.div`
  display: flex;
  width: 100%;
  height: 59px;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid #e4e9ec;
`;

export const HeaderDetailWrap = styled.div`
  height: 100%;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  border-left: 1px solid #f3f6f8;
  > p {
    color: #7c8289;
  }
`;

export const Contents = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f1f4f6;
  overflow-y: auto;
`;

export const UserIcon = styled.div`
  border-radius: 100%;
  width: 21px;
  height: 21px;
  background-color: #068fd3;
  text-align: center;
  position: relative;
  margin-right: 10px;
`;
