import React, { SFC } from 'react';
import styled from 'styled-components';

const Navbar: SFC = () => {
  return <Nav>Navbar</Nav>;
};

const Nav = styled.div`
  background-color: ${({ theme }) => theme.PRIMARY_COLOR_D1};
  color: ${({ theme }) => theme.NAVIGATION_TEXT_COLOR};
  height: 20%;
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Navbar;
