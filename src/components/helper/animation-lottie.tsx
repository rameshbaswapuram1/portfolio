"use client";

import Lottie from "lottie-react";
interface IProps {
  animationPath: unknown;
}
const AnimationLottie: React.FC<IProps> = ({ animationPath }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: "95%",
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
