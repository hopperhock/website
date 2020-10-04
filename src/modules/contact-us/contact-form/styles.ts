import { Field } from 'formik';
import { Margin } from './../../../styles/utilities/gutters';
import styled from 'styled-components';
import { FontWeight, TextBody, Title } from 'styles/utilities/font-sizes';
import { Padding } from 'styles/utilities/gutters';
import { Images } from 'shared/constants/assets';
import { hexToRGB } from 'styles/utilities/funtions';
import { title } from 'process';

export const Container = styled.div`
  padding: ${Padding.SIZE_1};
  flex: auto;
  background: url(${Images.CONTACT_US_FORM}) no-repeat;
  background-size: cover;
  h1 {
    font-size: ${Title.SIZE_5};
    font-family: 'roboto light';
    margin-top: 22%;
    text-align: center;
    color: ${({ theme }) => theme.WHITE};
  }
`;

export const ContactUs = styled.div`
  margin-top: ${Margin.SIZE_7};
  display: flex;
  flex-flow: column;
  align-items: center;
  > label {
    margin-top: ${Margin.SIZE_5};
    align-self: flex-start;
    margin-left: 20%;
    color: ${({ theme }) => theme.PRIMARY_COLOR_DARK_1};
    font-family: 'roboto light';
    font-size: ${TextBody.SIZE_2};
    > span {
      color: ${({ theme }) => theme.SECONDARY_COLOR_DARK_1};
      font-weight: bold;
      top: 200px;
    }
  }
  > input,
  textarea {
    font-family: 'roboto light';
    background: ${({ theme }) => hexToRGB(theme.BLACK, '0')};
    width: 60%;
    border: none;
    border-bottom: 0.1px solid ${({ theme }) => theme.PRIMARY_COLOR_DARK_1};
    outline: none;
    height: 35px;
    color: ${({ theme }) => theme.PRIMARY_COLOR_DARK_1};
    padding-left: 10px;
    ::placeholder {
      font-family: roboto, Helvetica, sans-serif;
      font-weight: ${FontWeight.light};
      color: ${({ theme }) => theme.SECONDARY_COLOR_LIGHT_1};
      opacity: 1; /* Firefox */
    }
  }
  textarea {
    height: 100px;
    padding-top: 10px;
  }
  button {
    width: 25%;
    border: none;
    margin: 50px 0px 0px 35%;
    height: 40px;
    background-color: ${({ theme }) => theme.PRIMARY_COLOR_DARK_1};
    color: ${({ theme }) => theme.WHITE};
  }
`;
