import { FontWeight, Subtitle, TextBody } from 'styles/utilities/font-sizes';

import { Breakpoints } from 'styles/utilities/breakpoints';
import { Images } from 'shared/constants/assets';
import { Margin } from './../../../styles/utilities/gutters';
import { Padding } from 'styles/utilities/gutters';
import styled from 'styled-components';

export const Container = styled.div`
  padding: ${Padding.SIZE_4};
  flex: auto;
  background: url(${Images.CONTACT_US_FORM}) no-repeat;
  background-size: cover;
  @media (max-width: ${Breakpoints.laptop}) {
    padding: ${Padding.SIZE_0};
    padding-bottom: 100px;
  }
  h1 {
    font-family: 'roboto light';
    padding-top: 30%;
    text-align: center;
    color: ${({ theme }) => theme.SECONDARY_COLOR_LIGHT_2};
    @media (max-width: ${Breakpoints.mobile}) {
      font-size: ${Subtitle.SIZE_3};
      padding-top: 50px;
    }
    @media (max-width: ${Breakpoints.laptop}) {
      padding-top: 100px;
    }
  }
`;

export const Form = styled.form`
  margin-top: ${Margin.SIZE_5};
  display: flex;
  flex-flow: column;
  align-items: center;
  input,
  textarea {
    width: 60%;
    border: 1px solid ${({ theme }) => theme.WHITE};
    margin: ${Margin.SIZE_1};
    height: 35px;
    color: ${({ theme }) => theme.SECONDARY_COLOR_LIGHT_5};
    padding-left: 10px;
    ::placeholder {
      font-family: roboto, Helvetica, sans-serif;
      font-weight: ${FontWeight.light};
      color: ${({ theme }) => theme.SECONDARY_COLOR_LIGHT_4};
      opacity: 1; /* Firefox */
    }
  }
  textarea {
    height: 100px;
    padding-top: 10px;
  }
  Button {
    width: 20%;
    border: none;
    margin: 25px 0px 0px 40%;
    height: 35px;
    background-color: ${({ theme }) => theme.PRIMARY_COLOR_DARK_1};
    color: ${({ theme }) => theme.WHITE};
  }
`;
