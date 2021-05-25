import styled from 'styled-components';
import Image from 'next/image';

const InfoWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* max-width: 1200px; */
  margin: 0 auto;
  padding: 2em;
  @media screen and (min-width: 986px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.neutral};
  margin: 4em auto;

  @media screen and (min-width: 986px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
  }
`;

const Title = styled.header`
  font: 700 2.2rem/2rem 'Raleway', sans-serif;
`;
const Text = styled.p`
  font: 400 1.125rem/1.4rem 'Raleway', sans-serif;
  margin: 1em 0;
  max-width: 700px;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: hsl(198, 60%, 50%);
  border-bottom: 1px solid hsl(198, 60%, 50%);
  font-size: 1.125rem;
  margin-bottom: 30px;
`;

const StyledImage = styled(Image)`
  width: 50%;
  max-width: 700px;
  flex-grow: 1;
  object-fit: contain;
`;

export default function Info() {
  return (
    <InfoWrapper>
      <StyledImage
        src="/images/illustration-stay-productive.png"
        width={700}
        height={500}
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
        <div>
          <Button>See how Fylo works</Button>
        </div>
      </TextContainer>
    </InfoWrapper>
  );
}
