import React from "react";
import { SvgProps } from "../types";
import imageFile from '../../../static/image/ktbstIcon.png';
const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img src={imageFile}  {...props} alt="" width={'32px'} />
  );
};

export default Icon;
