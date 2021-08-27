import React, { ReactNode } from "react";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className: string;
}

export const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};
