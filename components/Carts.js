import styled from 'styled-components';

import CartsItem from './CartsItem';

const CartsWrapper = styled.ul`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center; */
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  grid-gap: 3em;
  margin: 3em auto 0;
  max-width: 1200px;
  @media screen and (min-width: 786px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, auto);
  }
`;

export default function Carts() {
  return (
    <CartsWrapper>
      <CartsItem
        title="Access your files, anywhere"
        content="The ability to use a smartphone, tablet, or computer to access your account means your
        files follow you everywhere."
        img="/images/icon-access-anywhere.svg"
        alt="alt"
      />
      <CartsItem
        title="Access your files, anywhere"
        content="The ability to use a smartphone, tablet, or computer to access your account means your
        files follow you everywhere."
        img="/images/icon-access-anywhere.svg"
        alt="alt"
      />
      <CartsItem
        title="Access your files, anywhere"
        content="The ability to use a smartphone, tablet, or computer to access your account means your
        files follow you everywhere."
        img="/images/icon-access-anywhere.svg"
        alt="alt"
      />
      <CartsItem
        title="Access your files, anywhere"
        content="The ability to use a smartphone, tablet, or computer to access your account means your
        files follow you everywhere."
        img="/images/icon-access-anywhere.svg"
        alt="alt"
      />
    </CartsWrapper>
  );
}
