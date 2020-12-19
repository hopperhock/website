import React, { FC } from 'react';
import { Container } from './styles';
import { Images, SOCIAL_IMAGES } from 'shared/constants/assets';

type ISocialNetworkProps = {
  socialLogos: {
    image: string;
    url: string;
  }[];
};

const SocialNetworkDisplayer: FC<ISocialNetworkProps> = ({ socialLogos }) => {
  return (
    <Container>
      {socialLogos.map(logo => {
        return (
          <li key={logo.url}>
            <a href={logo.url} target="_blank">
              <img src={`${Images.SOCIAL_IMAGES_BASE_URL}${logo.image}`} />
            </a>
          </li>
        );
      })}
    </Container>
  );
};

export default SocialNetworkDisplayer;
