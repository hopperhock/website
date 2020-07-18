import React, { FC } from 'react';
import { Globals } from 'styles/utilities/colors';
import { GenericButton } from './button.styles';

interface IButtonProps {
  color: string;
  textColor: string;
  children: React.ReactNode;
  isOutline?: boolean;
  defaultMargin?: boolean;
  redirectAction(): void;
}

const Button: FC<IButtonProps> = ({ color, children, isOutline = false, textColor, redirectAction }) => {
  return (
    <GenericButton color={color} isOutline={isOutline} textColor={textColor} onClick={redirectAction}>
      {children}
    </GenericButton>
  );
};

export default Button;
