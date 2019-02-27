import PropTypes from "prop-types";
import React from "react";
import { Label } from "semantic-ui-react";
import SearchStandard from "./SearchStandard";

const resultRenderer = ({ title }) => <Label content={title} />;

resultRenderer.propTypes = {
  title: PropTypes.string
  //   description: PropTypes.string
};

const SearchTitle = ({ source, updateResults }) => {
  return (
    <SearchStandard
      resultRenderer={resultRenderer}
      source={source}
      updateResults={updateResults}
    />
  );
};

export default SearchTitle;
