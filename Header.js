/*import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  & > a {
    margin: 0 15px;
    text-decoration: none;
    color: #333;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Salt-N-Pepper</Logo>
      <Nav>
        <a href="#">Home</a>
        <a href="#">Food Menu</a>
        <a href="#">Orders</a>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
*/
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  & > a {
    margin: 0 15px;
    text-decoration: none;
    color: #333;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Salt-N-Pepper</Logo>
      <Nav>
        <a href="#">Home</a>
        <a href="#">Food Menu</a>
        <a href="#">Orders</a>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
