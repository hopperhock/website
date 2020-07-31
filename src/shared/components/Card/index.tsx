import React, { FC } from 'react';
import { Globals } from 'styles/utilities/colors';
import { CardContainer, Image, ChangeColorContainer, ServiceTitle } from './card.styles';

type ICardProps = {
  image: string;
  title: string;
  description: string;
  buttons: boolean;
};

const Card: FC<ICardProps> = ({ image, title, description, buttons = false }) => {
  return (
    <CardContainer className="animate__fadeInDown">
      <ChangeColorContainer>
        {' '}
        <ServiceTitle>{title}</ServiceTitle>{' '}
      </ChangeColorContainer>
      <Image cardImage={image}></Image>
    </CardContainer>
  );
};

export default Card;
