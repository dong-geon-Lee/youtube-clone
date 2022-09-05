import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 5.6rem);
  color: ${({ theme }) => theme.text};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 2rem 5rem;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 300;
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 0.3rem;
  padding: 1rem;
  background-color: transparent;
  width: 100%;
`;

export const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 1rem 2rem;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

export const More = styled.div`
  display: flex;
  margin-top: 1rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textSoft};
`;

export const Links = styled.div`
  margin-left: 5rem;
`;

export const Link = styled.span`
  margin-left: 3rem;
`;

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to YouTube</SubTitle>
        <Input placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button>Sign in</Button>
        <Title>or</Title>

        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
