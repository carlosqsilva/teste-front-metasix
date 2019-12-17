import React from "react";

import { IconType } from "react-icons";

interface Props extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
  text: string;
  action?: () => void;
}

export const HeaderButton = ({ icon: Icon, text, action, ...props }: Props) => {
  return (
    <button className="button" onClick={action} {...props}>
      <Icon /> <span>{text}</span>
    </button>
  );
};
