import styled from 'styled-components';
import Image from 'next/image';

const InfoWrapper = styled.article`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 786px) {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  max-width: 525px;
  color: ${({ theme }) => theme.colors.neutral};
  margin: 0 auto;
`;

const Title = styled.header`
  font: 700 1.8rem/2rem 'Raleway', sans-serif;
`;
const Text = styled.p`
  font: 400 1.125rem/1.4rem 'Raleway', sans-serif;
  margin: 1em 0;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: hsl(198, 60%, 50%);
  border-bottom: 1px solid hsl(198, 60%, 50%);
  font-size: 1.125rem;
  margin-bottom: 30px;
`;

export default function Info() {
  return (
    <InfoWrapper>
      <Image
        src="/images/illustration-stay-productive.png"
        width={500}
        height={500}
        objectFit="contain"
      />
      <TextContainer>
        <Title>Stay productive, wherever you are</Title>
        <Text>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </Text>
        <Text>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </Text>
        <Button>See how Fylo works</Button>
      </TextContainer>
    </InfoWrapper>
  );
}
