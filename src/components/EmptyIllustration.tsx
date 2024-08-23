import { FunctionComponent } from "react";
import "./EmptyIllustration.css";

export type EmptyIllustrationType = {
  className?: string;
};

const EmptyIllustration: FunctionComponent<EmptyIllustrationType> = ({
  className = "",
}) => {
  return (
    <img
      className={`empty-illustration-icon ${className}`}
      loading="lazy"
      alt=""
      src="/empty-illustration.svg"
    />
  );
};

export default EmptyIllustration;