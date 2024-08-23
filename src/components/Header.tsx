import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <div className="breadcrumbs-container">
        <div className="breadcrumb-icon-parent">
          <img
            className="breadcrumb-icon"
            loading="lazy"
            alt=""
            src="/frame-626521.svg"
          />
          <img
            className="layer-1-icon"
            loading="lazy"
            alt=""
            src="/layer-1.svg"
          />
        </div>
        <div className="page-title-container-parent">
          <FormControl
            className="page-title-container"
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderRadius: "4px",
              width: "100%",
              height: "38px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "38px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "38px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "38px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "38px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#fff",
                fontSize: 14,
                fontWeight: "Regular",
                fontFamily: "Open Sans",
                textAlign: "left",
                p: "0 !important",
                marginLeft: "15px",
              },
            }}
          >
            <InputLabel color="secondary" />
            <Select
              color="secondary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="30.7px"
                  height="24px"
                  src="/page-title-actions.svg"
                  style={{ marginRight: "4.999999999999989px" }}
                />
              )}
            >
              <MenuItem>Tenant: 000039-i1tenant</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <div className="frame-child" />
        </div>
      </div>
      <FormControl
        className="parent"
        variant="standard"
        sx={{
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          borderRadius: "0px 0px 0px 0px",
          width: "86px",
          height: "60px",
          m: 0,
          p: 0,
          "& .MuiInputBase-root": {
            m: 0,
            p: 0,
            minHeight: "60px",
            justifyContent: "center",
            display: "inline-flex",
          },
          "& .MuiInputLabel-root": {
            m: 0,
            p: 0,
            minHeight: "60px",
            display: "inline-flex",
          },
          "& .MuiMenuItem-root": {
            m: 0,
            p: 0,
            height: "60px",
            display: "inline-flex",
          },
          "& .MuiSelect-select": {
            m: 0,
            p: 0,
            height: "60px",
            alignItems: "center",
            display: "inline-flex",
          },
          "& .MuiInput-input": { m: 0, p: 0 },
          "& .MuiInputBase-input": {
            color: "#fff",
            fontSize: 13,
            fontWeight: "Regular",
            fontFamily: "Open Sans",
            textAlign: "left",
            p: "0 !important",
          },
        }}
      >
        <InputLabel color="primary" />
        <Select
          color="primary"
          disableUnderline
          displayEmpty
          IconComponent={() => (
            <img width="24px" height="24px" src="/frame-1.svg" style={{}} />
          )}
        >
          <MenuItem>AnhTTV19</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
