import React from "react";
import PropTypes from "prop-types";

function Collapse(props) {
  return (
    <div
      className={
        props.isExpanded
          ? "collapse_block expanded"
          : "collapse_block collapsed"
      }
    >
      <div
        className={
          props.isExpanded ? "collapse_content" : "collapse_content hidden"
        }
      >
        {props.children}
      </div>

      <a onClick={props.onExpandedChange} href="no.link">
        {props.isExpanded ? props.expandedLabel : props.collapsedLabel}
        <i className="material-icons">
          {props.isExpanded ? "expand_less" : "expand_more"}
        </i>
      </a>
    </div>
  );
}

Collapse.propTypes = {
  collapsedLabel: PropTypes.string.isRequired,
  expandedLabel: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onExpandedChange: PropTypes.func.isRequired
};

Collapse.defaultProps = {
  collapsedLabel: "Развернуть",
  expandedLabel: "Свернуть "
};

export default Collapse;
