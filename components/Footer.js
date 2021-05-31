import styled from 'styled-components';

const Wrapper = styled.footer`
  background: hsl(216, 53%, 9%);
  padding: 5em 2em 1em;
  color: ${({ theme }) => theme.colors.neutral};
  .icon-wrapper {
    display: flex;
    align-items: center;
    padding: 0.5em 0;
    p {
      margin-left: 5vw;
    }
  }
`;
const Logo = styled.img`
  width: 35%;
  max-width: 200px;
  object-fit: contain;
`;
const Icon = styled.img`
  width: 15px;
`;
const Links = styled.ul`
  font-size: 1rem;
  margin: 2em 0;
  li {
    list-style: none;
    margin: 0.5em 0;
  }
  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      font-weight: 700;
    }
  }
`;
const Social = styled.div``;

export default function Footer() {
  return (
    <Wrapper>
      <Logo src="/images/logo.svg" alt="Fylo logo" />
      <div className="col icon-wrapper">
        <Icon src="/images/icon-location.svg" alt="location" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi
          odit aliquid aspernatur
        </p>
      </div>
      <div className="col icon-wrapper">
        <Icon src="/images/icon-phone.svg" alt="location" />
        <p>+1-543-123-4567</p>
      </div>
      <div className="col icon-wrapper">
        <Icon src="/images/icon-email.svg" alt="location" />
        <p>example@fylo.com</p>
      </div>
      <Links className="col">
        <li>
          <a href="#home">About us</a>
        </li>
        <li>
          <a href="#home">Jobs</a>
        </li>
        <li>
          <a href="#home">Press</a>
        </li>
        <li>
          <a href="#home">Blogs</a>
        </li>
      </Links>
      <Links className="col">
        <li>
          <a href="#home">Contact U</a>
        </li>
        <li>
          <a href="#home">Terms</a>
        </li>
        <li>
          <a href="#home">Privacy</a>
        </li>
      </Links>
      <Social className="col">SOCIALS</Social>
    </Wrapper>
  );
}
