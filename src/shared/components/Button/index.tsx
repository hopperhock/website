import React, { FC } from 'react';
import { GenericButton } from './button.styles';
import { TextBody } from 'styles/utilities/font-sizes';

type IButtonProps = {
  color: string;
  textColor: string;
  children: React.ReactNode;
  isOutline?: boolean;
  defaultMargin?: boolean;
  redirectAction: string;
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
      href={redirectAction}
    >
    {children}
    </GenericButton>
  );
};

export default Button;
