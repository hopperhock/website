import React, { FC } from 'react';
import { TitleDivider } from './styles';

type GenericDividerProps = {
  color: string;
};

const GenericDivider: FC<GenericDividerProps> = ({ color }) => {
  return (
    <>
      <TitleDivider color={color} />
    </>
  );
};

export default GenericDivider;
