import styled from 'styled-components';

const Wrapper = styled.article`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 20px;
  padding: 2em;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.3);
  color: ${({ theme }) => theme.colors.neutral};
  background: hsl(219, 30%, 18%);
`;

const Text = styled.p`
  padding: 1em 0;
  font-size: 0.9rem;
`;
const Info = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  grid-template-rows: auto auto;
  grid-column-gap: 20px;
  small {
    font-size: 0.7rem;
  }
`;
const Img = styled.img`
  grid-column: 1/2;
  grid-row: 1/-1;
  border-radius: 50%;
  width: 100%;
`;
const Icon = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  object-fit: contain;
  transform: translate(-30%, -50%);
`;
export default function Comment({ text, src, name, title, quoteIcon = false }) {
  return (
    <Wrapper>
      {quoteIcon && <Icon src="/images/bg-quotes.png" />}
      <Text>{text}</Text>
      <Info>
        <Img src={src} />
        <h3>{name}</h3>
        <small>{title}</small>
      </Info>
    </Wrapper>
  );
}
