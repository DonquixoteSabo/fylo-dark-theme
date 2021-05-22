import Image from 'next/image';

import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  background: hsl(217, 28%, 15%);
  color: ${({ theme }) => theme.colors.neutral};
  font-family: 'Raleway', sans-serif;
  background: hsl(217, 28%, 15%) url('/images/bg-curvy-mobile.svg') no-repeat
    bottom;
  background-size: contain;

  p {
    max-width: 425px;
    text-align: center;
    margin-bottom: 20px;
  }
`;
const H1 = styled.h1`
  max-width: 425px;
  text-align: center;
  margin: 20px 0;
`;
const Button = styled.button`
  border: none;
  outline: none;
  background: linear-gradient(hsl(176, 68%, 64%), hsl(198, 60%, 50%));
  color: ${({ theme }) => theme.colors.neutral};
  font-family: inherit;
  font-size: 12px;
  font-weight: 700;
  padding: 15px 0;
  width: 200px;
  border-radius: 25px;
  box-shadow: 16px 16px 16px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-in-out;
  &:hover {
    background: linear-gradient(hsl(198, 60%, 50%), hsl(198, 60%, 50%));
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Image src="/images/illustration-intro.png" width={425} height={425} />
      <H1>All your files in one secure location, accessible anywhere.</H1>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <Button>Get Started</Button>
      {/* <Background src="/images/bg-curvy-mobile.svg" /> */}
    </HeaderWrapper>
  );
}
