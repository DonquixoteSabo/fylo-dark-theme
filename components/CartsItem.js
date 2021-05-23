import styled from 'styled-components';

import Image from 'next/image';

const Cart = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;
  color: ${({ theme }) => theme.colors.neutral};
  max-width: 350px;
`;

const Title = styled.header`
  font: 700 1.3rem/2rem 'Raleway', sans-serif;
  text-align: center;
`;

const Text = styled.p`
  font: 400 0.925rem/1.2rem 'Raleway', sans-serif;
  text-align: center;
  margin: 1em 0;
`;

export default function CartsItem({ title, content, img, alt }) {
  return (
    <Cart>
      <Image src={img} alt={alt} width={100} height={100} objectFit="contain" />
      <Title>{title}</Title>
      <Text>{content}</Text>
    </Cart>
  );
}
