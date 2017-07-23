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
        <h2>Posts</h2>
        <ul>
          <li>
            <Link to="/posts/empty-cup-filled/">
              Empty your cup and fill it from mine.
            </Link>
            <Link to="/posts/crypto-lesson-stop-sell-importance/">
              The importance of setting a stop sell price.
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
