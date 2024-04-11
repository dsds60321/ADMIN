import styled from '@emotion/styled';

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f1f4f6;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginWrap = styled.div`
  border-radius: 8px;
  border: 1px solid #bec2c7;
  background-color: #ffffff;
  padding: 40px;
  min-width: 280px;
  max-width: 430px;
  width: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const LoginTitle = styled.div`
  font-size: 50px;
  color: #e3e8eb;
  font-weight: bold;
  position: absolute;
  left: 0px;
  top: -70px;
  z-index: 1;
`;

export const LoginHeader = styled.div`
  padding-bottom: 40px;
  z-index: 9;
  & img {
    width: 100px;
  }
`;

export const LoginBottom = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 20px;
`;

export const Copyright = styled.p`
  width: 100%;
  text-align: center;
  color: #b6bdc7;
`;

export const InputGroup = styled.div`
  padding-bottom: 30px;
  width: 100%;
`;

export const Label = styled.label`
  padding-bottom: 10px;
  display: flex;
  font-size: 16px;
`;

export const Input = styled.input`
  width: 93%;
  font-size: 16px;
  padding-top: 6px;
  padding-bottom: 6px;
  height: 25px;
  border: 0 !important;
  background: none !important;
  border-bottom: 2px solid #e4e9ec !important;
  border-radius: 0px !important;
  padding-left: 30px !important;
  outline: none;
  ::placeholder {
    color: #bec5ce;
  }
  :focus {
    border-color: #068fd3 !important;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  & input:checked {
  }
`;

export const Inquiry = styled.div`
  display: flex;
  align-items: center;
  & a {
    color: #7c8289 !important;
    transition: color 0.2s;
    cursor: pointer !important;
    text-decoration: underline;
  }
  & a:nth-of-type(1)::after {
    content: '';
    background-color: #7c8289;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    display: inline-block;
    margin: 3px;
  }
`;

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  position: relative;
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 15px;
  border: 1px solid #1172a3;
  background-color: #068fd3;
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
`;
