import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Raleway', sans-serif;
  padding: 20px;
`;
const Logo = styled.img`
  width: 100px;
`;

const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.colors.neutral};
  padding: 0 20px;
  transition: 0.3s;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Navigation() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="Fylo logo" />
      <List>
        <Item>Features</Item>
        <Item>Team</Item>
        <Item>Sign in</Item>
      </List>
    </Nav>
  );
}
