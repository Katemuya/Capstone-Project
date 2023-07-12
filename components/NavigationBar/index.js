import styled from "styled-components";

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  height: 10vh;
  box-shadow: 0px 0px 15px #00000050;
`;

const NavItem = styled.a`
  color: #333333;
  text-decoration: none;
  padding: 10px;
  cursor: pointer;
  margin: 0 auto;
  width: 100%;

  text-align: center;

  &:hover {
    color: #000000;
  }
`;

export default function NavigationBar() {
  return (
    <NavBarContainer>
      <NavItem href="./">Calendar</NavItem>

      <NavItem href="./Shifts">Shifts</NavItem>
    </NavBarContainer>
  );
}
