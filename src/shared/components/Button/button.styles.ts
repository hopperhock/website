import { Subtitle } from './../../../styles/utilities/font-sizes';
import styled, { css } from 'styled-components';
import { Padding, Margin } from 'styles/utilities/gutters';
import { TextBody } from 'styles/utilities/font-sizes';

export const GenericButton = styled.button<{
  color: string;
  isOutline: boolean;
  textColor: string;
}>`
  background-color: ${(props) => (props.isOutline ? 'transparent' : props.color)};
  border: ${(props) => (props.isOutline ? `2px solid ${props.color}` : '0')};
  color: ${({ textColor }) => textColor};
  cursor: pointer;
  font-size: ${TextBody.SIZE_1};
  height: 45px;
  margin-top: ${Margin.SIZE_9};
  border: none;
  outline: none;
  width: 221px;
`;
