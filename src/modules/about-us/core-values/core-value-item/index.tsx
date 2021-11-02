import React, { FC } from 'react';
import { ValueContent, ValueItem, ValueTitle } from './styles';

type Props = {
  title: string;
  content: string;
};

const CoreValueItem: FC<Props> = props => {
  const { title, content } = props;

  return (
    <ValueItem>
      <ValueTitle>{title}</ValueTitle>
      <ValueContent>{content}</ValueContent>
    </ValueItem>
  );
};

export default CoreValueItem;
