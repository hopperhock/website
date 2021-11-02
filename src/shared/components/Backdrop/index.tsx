import React, { FC } from 'react';
import Container from './styles';

type Props = {
  visible: boolean;
  onToggle: () => void;
};

const Backdrop: FC<Props> = ({ visible, onToggle }) => {
  return <Container visible={visible} onClick={onToggle} />;
};

export default Backdrop;
