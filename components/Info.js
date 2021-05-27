import styled from 'styled-components';
import Image from 'next/image';

const InfoWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 2em;
  @media screen and (min-width: 986px) {
    flex-direction: row;
    padding: 4vw;
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
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 0.2em;
  background: none;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.cadetBlue};
  color: ${({ theme }) => theme.colors.cadetBlue};
  font-size: 1.125rem;
  transition: 0.3s ease-in-out;

  .arrow-hover {
    display: none;
  }

  .arrow {
    margin-left: 0.3em;
  }

  img {
    width: 20px;
  }

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.neutral};
    color: ${({ theme }) => theme.colors.neutral};
    transform: translateY(-5%);

    img {
      display: none;
    }
    .arrow-hover {
      display: block;
    }
  }
`;

const StyledImage = styled(Image)`
  object-fit: contain;
`;

export default function Info() {
  return (
    <InfoWrapper>
      <StyledImage
        src="/images/illustration-stay-productive.png"
        width={700}
        height={500}
        quality={100}
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
          <Button>
            See how Fylo works{' '}
            <span className="arrow">
              <img src="/images/icon-arrow.svg" alt="arrow icon" />
              <div className="arrow-hover">&rarr;</div>
            </span>
          </Button>
        </div>
      </TextContainer>
    </InfoWrapper>
  );
}
