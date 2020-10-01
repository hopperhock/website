import React, { FC } from 'react';

import { Container, SubTitle, Title, Rectangle, HeaderContainer, ChildrenContainer } from './styles';

type Props = {
  title: string;
  subTitle: string;
};

const FooterCard: FC<Props> = props => {
  const { title, subTitle, children } = props;

  return (
    <Container>
      <HeaderContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Rectangle />
      </HeaderContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};

export default FooterCard;
