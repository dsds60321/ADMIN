import {
  Button,
  ButtonWrap,
  CheckboxGroup,
  Copyright,
  Form,
  Input,
  InputGroup,
  Inquiry,
  Label,
  LoginBottom,
  LoginHeader,
  LoginTitle,
  LoginWrap,
  Wrap,
} from '@pages/Login/styles.jsx';
import { Link } from 'react-router-dom';

const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('!!');
  };

  return (
    <Wrap>
      <Form onSubmit={onSubmit}>
        <LoginWrap>
          <LoginTitle>Sign In</LoginTitle>
          <LoginHeader>
            <img src="/src/assets/images/logo.png" alt="logo" />
          </LoginHeader>
          <Label>아이디</Label>
          <InputGroup>
            <Input placeholder="아이디 입력"></Input>
          </InputGroup>
          <Label>패스워드</Label>
          <InputGroup>
            <Input placeholder="비밀번호 입력"></Input>
          </InputGroup>
          <LoginBottom>
            <CheckboxGroup>
              <input type="checkbox" id="remember" />
              <p>ID Remember</p>
            </CheckboxGroup>
            <Inquiry>
              <Link to="#">아이디 찾기</Link>
              <Link to="#">비밀번호 찾기</Link>
            </Inquiry>
            <ButtonWrap>
              <Button>확인</Button>
            </ButtonWrap>
          </LoginBottom>
          <Copyright>Copyright © 2021 CyrexPay all right reserved.</Copyright>
        </LoginWrap>
      </Form>
    </Wrap>
  );
};

export default Login;
