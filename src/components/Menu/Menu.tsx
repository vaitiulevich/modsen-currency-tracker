import { Nav, NavItem } from './styled';

interface MenuProp {
  toggleMenu?: () => void;
}

const Menu = ({ toggleMenu }: MenuProp) => {
  return (
    <Nav>
      <NavItem onClick={toggleMenu} href="#">
        Home
      </NavItem>
      <NavItem onClick={toggleMenu} href="#timeline">
        Timeline
      </NavItem>
      <NavItem onClick={toggleMenu} href="#bank-card">
        Bank card
      </NavItem>
      <NavItem onClick={toggleMenu} href="#contact">
        Contact
      </NavItem>
    </Nav>
  );
};

export default Menu;
