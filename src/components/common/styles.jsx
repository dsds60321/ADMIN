import styled from '@emotion/styled';
export const getStyleByTheme = (props) => {
  if (props === 'gray') {
    return {
      backgroundColor: '#f1f4f6',
      border: '1px solid #bec2c7',
      color: '#7c8289',
      hover: {
        border: '1px solid #979ba1',
        backgroundColor: '#dce0e3',
        color: '#000000',
      },
    };
  }

  if (props === 'blue') {
    return {
      backgroundColor: '#068fd3',
      border: '1px solid #1172a3',
      color: '#ffffff',
      hover: {
        border: '1px solid #0c5d86',
        backgroundColor: '#017dbb',
      },
    };
  }

  if (props === 'red') {
    return {
      backgroundColor: '#f36662',
      border: '1px solid #db4a46',
      color: '#ffffff',
      hover: {
        border: '1px solid #c63d3',
        backgroundColor: '#cf5350',
      },
    };
  }

  return 'none';
};

/**
 * thema : gray OR blue
 */
export const CommonButton = styled.button`
  border: ${({ theme }) => getStyleByTheme(theme).border || '1px solid #bec2c7'};
  border-radius: 4px;
  padding: 5px 10px;
  background: ${({ theme }) => getStyleByTheme(theme).backgroundColor || 'none'};
  color: ${({ theme }) => getStyleByTheme(theme).color || '#000'};
  cursor: pointer;
  transition:
    border,
    background,
    color 0.2s;
  font-size: 14px;
  display: flex;
  align-items: center;
  :hover {
    ${({ theme }) => getStyleByTheme(theme).hover || '#000'}
  }
`;

export const ViewGroupWrap = styled.div`
  width: 33%;
  display: flex;
  align-items: stretch;
`;

export const Label = styled.div`
  font-size: 13px;
  border-left: 1px solid #e4e9ec;
  border-right: 0px;
  padding: 15px;
  flex: 0.3;
  display: flex;
  align-items: center;
  min-width: 105px;
`;

export const Value = styled.div`
  margin-left: 20px;
  padding: 0px 15px 0px 0px;
  position: relative;
  flex: 0.7;
  font-size: 14px;
  display: flex;
  align-items: center;
  //  input style
  > input {
    font-size: 13px;
    padding-right: 30px;
    border: 0 !important;
    background: none !important;
    border-radius: 0 !important;
    border-bottom: 2px solid #e4e9ec !important;
    width: 100% !important;
    padding-left: 0 !important;
  }

  > button {
    display: none;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    right: 16px;
    top: 13px;
    background: #dce0e3;
    color: #7c8289;
    border: 1px solid #979ba1;
    transition: all 0.3s;
    cursor: default;
  }

  //    option style
  > div {
    width: calc(100% - 24px);
    > input {
      display: none;
      font-size: 13px;
      padding-right: 30px !important;
    }
    > ul {
      list-style: none;
      border-bottom: 2px solid #e4e9ec;
      > li {
        padding-left: 3px;
        cursor: pointer;
        transition: all 0.2s;
        min-width: 110px;
        padding-right: 20px;
        overflow: hidden;
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;
        :nth-of-type(1) {
          width: 100%;
          min-width: none;
          max-width: none;
          font-size: 13px;
          padding-bottom: 0px;
          line-height: 27px;
          height: 27px;
        }
        :nth-of-type(n + 2) {
          height: ${({ toggle }) => (toggle ? 'auto' : '0')}; // on 선택시 보여줘야 하는 값 width 133px + height auto
          width: 45%;
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
              padding: 7px 12px;
              cursor: pointer;
              color: #70767e;
              font-size: 14px;
              transition: all 0.2s;
            }
          }
        }
      }
    }
  }
`;
