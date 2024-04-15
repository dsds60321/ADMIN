import styled from '@emotion/styled';

export const CommonButton = styled.button`
  border: 1px solid #bec2c7;
  border-radius: 4px;
  padding: 5px 10px;
  background: none;
  color: #000000;
  cursor: pointer;
  transition:
    border,
    background,
    color 0.2s;
  font-size: 14px;
  display: flex;
  align-items: center;
  :hover {
    border: 1px solid #979ba1;
    background-color: #f1f4f6;
  }
`;
