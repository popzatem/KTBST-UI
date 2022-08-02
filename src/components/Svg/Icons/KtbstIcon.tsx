import React from "react";
import { SvgProps } from "../types";


const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img src="/static/image/ktbstIcon.png"  {...props} alt="" width='32px' />
  );
};

export default Icon;
