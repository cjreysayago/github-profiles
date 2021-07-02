import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export class Navbar extends Component {
  static defaultProps = {
    title: "Github Finder",
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i style={{ marginRight: "1 rem" }}>
            <FontAwesomeIcon icon={["fab", "github"]} />
          </i>
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
