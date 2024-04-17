import styled from '@emotion/styled';

export const Container = styled.div`
  width: calc(65% - 40px);
  padding: 15px 20px;
  display: flex;
  align-items: flex-end;
  position: relative;
`;

export const Tabs = styled.div`
  display: flex;
  position: relative;
`;

export const Tab = styled.div`
  position: relative;
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding-left: 5px;
  padding-right: 5px;
  cursor: pointer;
  flex-wrap: wrap;
  > div {
    color: #000;
    display: flex;
    margin-right: 7px;
    > p {
      font-weight: bold;
    }
  }
`;
