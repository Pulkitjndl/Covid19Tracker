import { withStyles } from "@material-ui/styles";
import classNames from "classnames";
import React, { Component } from "react";
import styles from "../styles/FooterStyles.js";

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.footer}>
        <a
          href="https://github.com/Pulkitjndl/"
          target="_blank"
          rel="noopener noreferrer"
          className={classNames(classes.btn, classes.github)}
        >
          Made by Pulkit
        </a>
       
      </footer>
    );
  }
}
export default withStyles(styles)(Footer);
