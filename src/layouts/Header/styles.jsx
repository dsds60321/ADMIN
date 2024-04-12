import styled from '@emotion/styled';

export const HeaderWrap = styled.div`
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

export const UserIcon = styled.div`
  border-radius: 100%;
  width: 21px;
  height: 21px;
  background-color: #068fd3;
  text-align: center;
  position: relative;
  margin-right: 10px;
`;
