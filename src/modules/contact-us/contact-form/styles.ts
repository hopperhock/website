import { Margin } from './../../../styles/utilities/gutters';
import styled from 'styled-components';
import { FontWeight } from 'styles/utilities/font-sizes';
import { Padding } from 'styles/utilities/gutters';
import { Images } from 'shared/constants/assets';

export const Container = styled.div`
  padding: ${Padding.SIZE_4};
  flex: auto;
  background: url(${Images.CONTACT_US_FORM}) no-repeat;
  background-size: cover;
  h1 {
    font-family: 'roboto light';
    margin-top: 30%;
    text-align: center;
    color: ${({ theme }) => theme.SECONDARY_COLOR_LIGHT_2};
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
