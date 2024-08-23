import { FunctionComponent } from "react";
import "./InputSearch.css";

export type InputSearchType = {
  className?: string;
};

const InputSearch: FunctionComponent<InputSearchType> = ({
  className = "",
}) => {
  return (
    <div className={`input-search ${className}`}>
      <div className="search-input">
        <div className="placeholder">Search for service, resource name</div>
      </div>
      <div className="button">
        <img
          className="icon-outline-search"
          alt=""
          src="/icon--outline--search.svg"
        />
        <div className="button1">Button</div>
      </div>
    </div>
  );
};

export default InputSearch;
