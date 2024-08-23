import PropTypes from "prop-types";
import "./InputSearch.css";

const InputSearch = ({ className = "" }) => {
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

InputSearch.propTypes = {
  className: PropTypes.string,
};

export default InputSearch;
