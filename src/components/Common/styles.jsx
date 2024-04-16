import styled from '@emotion/styled';
const getStyleByTheme = (props) => {
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

/**
 * default Container three
 * @type {*|CSSNumericValue}
 */
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  :nth-child(1) {
    border-top: 0px;
  }
  > div {
    width: 33%;
  }
`;
