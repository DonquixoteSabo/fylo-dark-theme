import styled from 'styled-components';

import Image from 'next/image';

const Cart = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em;
  color: ${({ theme }) => theme.colors.neutral};
  max-width: 350px;

  @media screen and (min-width: 786px) {
    width: 50%;
  }
`;

const Title = styled.header`
  font: 700 1.3rem/2rem 'Raleway', sans-serif;
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
  font: 400 0.925rem/1.2rem 'Raleway', sans-serif;
  margin: 1em 0;
`;

const StyledImage = styled(Image)``;

export default function CartsItem({ title, content, img, alt }) {
  return (
    <Cart>
      <StyledImage src={img} alt={alt} width={100} height={100} />
      <Title>{title}</Title>
      <Text>{content}</Text>
    </Cart>
  );
}
