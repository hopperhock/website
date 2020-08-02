import React, { FC } from 'react';
import { Globals } from 'styles/utilities/colors';
import { GenericButton } from './button.styles';
import { TextBody } from 'styles/utilities/font-sizes';

type IButtonProps = {
  color: string;
  textColor: string;
  children: React.ReactNode;
  isOutline?: boolean;
  defaultMargin?: boolean;
  redirectAction(): void;
  width?: string;
  fontSize?: string;
};

const Button: FC<IButtonProps> = ({
  color,
  children,
  isOutline = false,
  textColor,
  redirectAction,
  width = '100%',
  fontSize = `${TextBody.SIZE_1}`
}) => {
  return (
    <GenericButton
      width={width}
      color={color}
      isOutline={isOutline}
      textColor={textColor}
      fontSize={fontSize}
      onClick={redirectAction}
    >
      {children}
    </GenericButton>
  );
};

export default Button;
