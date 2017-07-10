import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { rhythm } from "../utils/typography";

export default class Home extends Component {
  static propTypes = {
    children: PropTypes.func
  };

  render() {
    return (
      <div>
        <Helmet title={meta.title} meta={meta.tags} />
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={{ margin: 0 }}>
              <Link to="/" style={styles.link}>
                Home
              </Link>
            </h1>
          </div>
        </div>
        <div style={styles.children}>
          {this.props.children()}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    background: `#f9f9f9`,
    marginBottom: rhythm(1)
  },
  header: {
    margin: `0 auto`,
    maxWidth: 960,
    padding: `${rhythm(1)} ${rhythm(3 / 4)}`
  },
  children: {
    margin: `0 auto`,
    maxWidth: 960,
    padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
    paddingTop: 0
  },
  link: {
    color: "inherit",
    textDecoration: "none"
  }
};

const meta = {
  title: "Thoughts and Things",
  tags: [
    {
      name: "description",
      content: "Austin Witherows blog where he write about thoughts and things."
    },
    {
      name: "keywords",
      content: "programming, art, martial arts, solidarity"
    }
  ]
};
