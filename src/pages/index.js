import React, { Component } from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

export default class Index extends Component {
  render() {
    return (
      <div>
        <h1>Hi people</h1>
        <p>
          The blog is underway, don't worry. Read more at{" "}
          <a href="https://medium.com/@azurikai">Medium</a> for the meantime!
        </p>
      </div>
    );
  }
}
