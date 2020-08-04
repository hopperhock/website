import React, { FC } from 'react';
import NavContainer from './styles';

type Props = {
  visible: boolean;
  onToggle: () => void;
};

const Backdrop: FC<Props> = ({ visible, onToggle }) => {
  return <NavContainer visible={visible} onClick={onToggle} />;
};

export default Backdrop;
