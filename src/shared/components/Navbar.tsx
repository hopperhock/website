import React, { SFC } from 'react';
import styled from 'styled-components';

const Navbar: SFC = () => {
  return <Nav>Foo</Nav>;
};

const Nav = styled.div`
  background-color: ${(props) => props.theme.PRIMARY_COLOR_1};
  height: 20%;
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Navbar;
