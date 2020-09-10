import React, { FC } from 'react';
import { Container } from './styles';

type ISocialNetworkProps = {
  socialLogos: {
    image: string;
    url: string;
  }[];
};

const SocialNetworkDisplayer: FC<ISocialNetworkProps> = ({ socialLogos }) => {
  return (
    <Container>
      {socialLogos.map((logo) => {
        return (
          <li>
            <a href={logo.url} target="_blank">
              <img src={logo.image} />
            </a>
          </li>
        );
      })}
    </Container>
  );
};

export default SocialNetworkDisplayer;
