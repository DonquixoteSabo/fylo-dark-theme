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
        alt="Phone and computer"
      />
      <CartsItem
        title="
        Security you can trust"
        content="2-factor authentication and user-controlled encryption are just a couple of the security
        features we allow to help secure your files."
        img="/images/icon-security.svg"
        alt="Shield"
      />
      <CartsItem
        title="
        Real-time collaboration"
        content="
        Securely share files and folders with friends, family and colleagues for live collaboration.
        No email attachments required."
        img="/images/icon-collaboration.svg"
        alt="Clock"
      />
      <CartsItem
        title="Store any type of file"
        content="
        Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all
        file types to be securely stored and shared.
        "
        img="/images/icon-any-file.svg"
        alt="Folder"
      />
    </CartsWrapper>
  );
}
