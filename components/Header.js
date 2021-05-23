import Image from 'next/image';

import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  color: ${({ theme }) => theme.colors.neutral};
  font-family: 'Raleway', sans-serif;

  p,
  h1 {
    max-width: 525px;
    text-align: center;
    margin: 0.75em;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: hsl(217, 28%, 15%) url('/images/bg-curvy-mobile.svg') no-repeat
    bottom;
  background-size: 100% 55%;
  font-size: 1.1rem;
  @media screen and (min-width: 786px) {
    background-image: url('/images/bg-curvy-desktop.svg');
    background-size: 100% 60%;
    font-size: 1.2rem;
  }
`;

const Button = styled.button`
  padding: 1em 5em;
  margin: 1em 0;
  font: 700 0.9em 'Raleway', sans-serif;
  color: ${({ theme }) => theme.colors.neutral};
  box-shadow: 12px 14px 14px rgba(0, 0, 0, 0.2);
  background: linear-gradient(hsl(176, 68%, 64%), hsl(198, 60%, 50%));
  transition: 0.3s ease-in-out;
  border-radius: 25px;
  border: none;
  &:hover {
    background: linear-gradient(hsl(198, 60%, 50%), hsl(198, 60%, 50%));
  }
`;

export default function Header() {
  return (
    <Container>
      <HeaderWrapper>
        <Image
          src="/images/illustration-intro.png"
          width={525}
          height={525}
          alt="team"
          quality={100}
        />
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <Button>Get Started</Button>
      </HeaderWrapper>
    </Container>
  );
}
