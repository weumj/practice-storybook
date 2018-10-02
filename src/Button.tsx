import React from "react";
import "./Button.css";

interface OwnProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export type Props = OwnProps;

const noop = () => {};

export const Button = (props: Props) => {
  const { children, onClick, disabled = false } = props;
  const disabledclass = disabled ? "Button_disabled" : "";

  return (
    <div
      className={`Button ${disabledclass}`}
      onClick={!disabled ? onClick : noop}
    >
      <span>{children}</span>
    </div>
  );
};
