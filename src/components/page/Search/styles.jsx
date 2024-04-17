import styled from '@emotion/styled';

export const SearchWrap = styled.div`
  ul {
    list-style: none;
  }
  margin: 20px 20px;
  position: relative;
  z-index: 101;
  > div {
    position: relative;
  }
`;

export const MainWrap = styled.div`
  border: 1px solid #bec2c7;
  background-color: #ffffff;
  border-radius: ${({ toggle }) => (toggle ? '8px 8px 0px 0px' : '8px')};
  display: flex;
`;

export const MainOption = styled.div`
  width: calc(100% - 14px);
  padding: 5px 10px;
  display: flex;
  opacity: 1;
  transition: opacity 0.2s;
`;

export const DateDiv = styled.div`
  display: flex;
  position: relative;
  padding-right: 25px;
`;

export const SearchDiv = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  > i {
    margin-right: 8px;
    color: #c7cdd5;
  }
  > button {
    min-width: 60px;
    text-align: center;
    justify-content: center;
    padding-right: 13px;
  }
`;

export const DateSelect = styled.div`
  position: relative;
  padding-left: 30px;
  &:after {
    content: '';
    height: calc(100% - 20px);
    border: 1px solid #dfe4eb;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  .val {
    padding-left: 3px;
    padding-bottom: 2px;
    cursor: pointer;
    transition: all 0.2s;
    min-width: 110px;
    max-width: 200px;
    padding-right: 20px;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    :after {
      content: '\\f0d7';
      font-family: 'Font Awesome 5 Free';
      font-style: normal;
      font-weight: 900;
      font-size: 11px;
      padding-left: 20px;
      position: relative;
      right: 0;
    }
  }
  :before {
    content: '\\f1de';
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    position: absolute;
    left: 2px;
    top: 10px;
  }
  > ul li:nth-of-type(1) {
    min-width: auto;
    max-width: auto;
    line-height: 34px;
    height: 34px;
    border-bottom: 0px;
    color: #222222;
  }

  > ul > li:nth-of-type(2) {
    position: absolute;
    left: 0px;
    top: 37px;
    z-index: 9;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    max-height: 180px;
    min-width: 120px;
    overflow: hidden;

    > ul {
      background-color: #ffffff;
      border: 1px solid #bec2c7;
      border-radius: 4px;
      max-height: 180px;
      overflow-y: auto;
      overflow-x: hidden;

      > li {
        padding: 5px 8px;
        cursor: pointer;
        color: #70767e;
        font-size: 14px;
        transition: all 0.2s;
        margin-top: 1px;
      }
    }
  }
`;

export const DatePicker = styled.button`
  > i {
    position: absolute;
    right: 34px;
    bottom: 15px;
    font-size: 14px;
    color: #046c9f;
  }
  &:after {
    content: '';
    height: calc(100% - 20px);
    border: 1px solid #dfe4eb;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  border-radius: 4px;
  background-color: #068fd3;
  border: none;
  color: #ffffff;
  min-width: 210px;
  padding-left: 10px;
  padding-right: 30px;
  width: calc(100% - 40px);
  height: 34px;
  cursor: pointer;
  transition:
    color,
    background 0.2s;
`;

export const SearchInput = styled.input`
  background: none !important;
  height: 34px;
  border: none !important;
`;

export const DetailButton = styled.div`
  width: 140px;
  border-left: 1px solid #bec2c7;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > i {
    margin-right: 10px;
  }
`;

export const DetailSectionWrap = styled.div`
  display: ${({ toggle }) => (toggle ? 'flex' : 'none')};
  height: auto;
  animation-duration: 0.2s;
  animation-name: searchDetail;

  > div {
    width: 100%;
    > div {
      width: 100%;
      border: 1px solid #000000;
      border-radius: 0px 0px 8px 8px;
      position: relative;
      top: -1px;
      background-color: #ffffff;
    }
  }
`;

/**
 * default Container three
 * @type {*|CSSNumericValue}
 */
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  //:nth-child(1) {
  :nth-of-type(1) {
    border-top: 0px;
  }
  > div {
    width: 33%;
  }
`;
