import { useState } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const Background = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: hsl(216, 53%, 9%);
`;

const Wrapper = styled.section`
  max-width: 900px;
  position: relative;
  color: white;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.4);
  width: 90%;
  margin: 0 auto;
  padding: 2em 4em 0;
  background: hsl(217, 28%, 15%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.header`
  font-size: 1.65rem;
  margin: 0.3em;
  font-weight: 700;
  text-align: center;
`;

const Text = styled.p`
  font-size: 0.9125rem;
  text-align: center;
  margin: 0.8em;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;
const Input = styled.input`
  padding: 1em 2em;
  border-radius: 100px;
  @media screen and (min-width: 768px) {
    width: 65%;
  }
`;
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1em;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
const Button = styled.button`
  padding: 0.9em 0;
  margin: 2em 0;
  font: 700 1.2em 'Raleway', sans-serif;
  color: ${({ theme }) => theme.colors.neutral};
  box-shadow: 12px 14px 14px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.colors.cadetBlue};
  transition: 0.3s ease-in-out;
  border-radius: 25px;
  border: none;
  &:hover {
    background: hsl(198, 60%, 50%);
  }
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`;
export default function Form() {
  const [inputValue, setInputValue] = useState('');

  return (
    <Container>
      <Background />
      <Wrapper>
        <Title>Get early access today</Title>
        <Text>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </Text>
        <FormWrapper onSubmit={(e) => e.preventDefault()}>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="email@example.com"
          />
          <Button type="submit">Get Started for Free</Button>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
}
