import React, { Component } from "react";
import FilterLink from "./FilterLink";
import { VisibilityFilters } from "../actions/todo_actions";

const Footer = () => {
  return (
    <footer className="section page-footer">
      {/* <div className="container center-align">&#169; Tyler Newman</div> */}
      <ul className="tabs tabs-transparent">
        <li className="tab col s3">
          <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        </li>
        <li className="tab col s3">
          <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        </li>
        <li className="tab col s3">
          <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
          </FilterLink>
        </li>
        {/* <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterLink> */}
      </ul>
    </footer>
  );
};

export default Footer;
