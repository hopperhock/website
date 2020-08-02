import React, { FC } from 'react';
import { CardContainer, Image, ChangeColorContainer } from './styles';

type ICardProps = {
  image: string;
  children?: React.ReactFragment;
};

const Card: FC<ICardProps> = ({ image, children }) => {
  return (
    <CardContainer>
      <ChangeColorContainer>{children}</ChangeColorContainer>
      <Image cardImage={image}></Image>
    </CardContainer>
  );
};

export default Card;
