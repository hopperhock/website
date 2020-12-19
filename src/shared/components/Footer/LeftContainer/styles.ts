import styled from 'styled-components';
import { Breakpoints } from 'styles/utilities/breakpoints';
import { TextBody } from 'styles/utilities/font-sizes';

export const Container = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 101px;

  
  @media (max-width: ${Breakpoints.tablet}) {
    padding: 0;
  }
`;

export const BrandContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SchedulleCallContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LeftLabel = styled.span`
  align-self: flex-start;
  font-family: 'Roboto Thin';
  font-size: ${TextBody.SIZE_1};
  color: ${({ theme }) => theme.WHITE};

  @media (max-width: ${Breakpoints.tablet}) {
    align-self: auto;
  }
`;

export const ButtonText = styled.a`
  display: flex;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  width: 236px;
  height: 55px;
  border: solid 1px ${({ theme }) => theme.WHITE};
  margin-top: 33px;
  font-size: 12px;
 letter-spacing: 0.3px;
 color: ${({ theme }) => theme.WHITE};
 text-decoration: none;
  cursor: pointer;
  @media (max-width: ${Breakpoints.tablet}) {
    align-self: auto;
  }
`;

export const ContactInformationContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  font-size: ${TextBody.SIZE_2};
  font-family: 'Roboto', helvetica;
`;

export const ContactText = styled.div`
  align-self: flex-start;
  font-size: ${TextBody.SIZE_1};
  margin-bottom: 10px;
  color: ${({ theme }) => theme.WHITE};
  font-family: 'Roboto Thin';

  span {
    font-family: 'Roboto Bold';
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.WHITE};
    cursor: pointer;
  }


  @media (max-width: ${Breakpoints.tablet}) {
    align-self: center;
  }
`;

export const BrandImage = styled.img`
  width: 270px;
  height: 169px;
`;
