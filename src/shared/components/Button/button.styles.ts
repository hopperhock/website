import { Subtitle } from './../../../styles/utilities/font-sizes';
import styled, { css } from 'styled-components';
import { Padding, Margin } from 'styles/utilities/gutters';
import { TextBody } from 'styles/utilities/font-sizes';
import { Breakpoints } from 'styles/utilities/breakpoints';

export const GenericButton = styled.a<{
  color: string;
  isOutline: boolean;
  textColor: string;
  width: string;
  fontSize: string;
}>`
  text-decoration: none;
  height: 100%;
  padding-top: 15px;
  text-align: center;
  background-color: ${props => (props.isOutline ? 'transparent' : props.color)};
  border: ${props => (props.isOutline ? `1px solid ${props.color}` : '0')};
  color: ${({ textColor }) => textColor};
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize};
  height: 2.8125rem;
  width: ${({ width }) => width};
  margin: ${Margin.SIZE_0} ${Margin.SIZE_2};
  @media (max-width: ${Breakpoints.mobile}) {
    width: 90%;
    margin: ${Margin.SIZE_0} 5%;
  }
`;