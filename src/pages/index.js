import React, { Component } from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import HashtagList from "../components/hashtagList";

export default class Index extends Component {
  render() {
    return (
      <div>
        <p>
          I keep this blog up to date with thoughts of mine, and other things. I
          hope you enjoy! If you would like to get in touch, please do so via{" "}
          <a href="https://goo.gl/forms/1OpJc6cIkFskf3Zi2">
            this form any time
          </a>!
        </p>

        <h2 style={styles.heading}>Table of Contents</h2>

        <ul>
          <li>
            <a href="#blog-posts">Blog Posts</a>
          </li>
          <li>
            <a href="#books">Books</a>
          </li>
          <li>
            <a href="#recommendations">Recommendations</a>
          </li>
        </ul>

        <h3 style={styles.heading} id="blog-posts">
          Blog Posts
        </h3>
        <ul>
          <li>
            <Link to="/posts/empty-cup-filled/">
              Empty your cup and fill it from mine.
            </Link>
            <HashtagList tags={["wing chun", "daoism"]} />
          </li>
        </ul>
        <h3 style={styles.heading} id="books">
          Books
        </h3>

        <p>Coming soon...</p>

        <h3 style={styles.heading} id="recommendations">
          Recommendations
        </h3>
        <p>
          A collection of recommended things sorted by category. If you're
          looking to learn something, these are the best of the best that I've
          gathered as I've toiled through the internet.
        </p>

        <h4 style={styles.heading}>Philosophy</h4>
        <ul>
          <li>
            <a target="_blank" href="http://amzn.to/2vyGzmW">
              The Enchiridion
            </a>
          </li>
          <li>
            <a target="_blank" href="http://amzn.to/2CaIbtJ">
              Advanced Yoga Practices - Easy Lessons for Ecstatic Living
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.lawofone.info">
              The Law of One
            </a>
          </li>
        </ul>

        <h4 style={styles.heading}>"Conspiracy"</h4>
        <ul>
          <li>
            <a target="_blank" href="http://amzn.to/2ERKjaG">
              Behold, A Pale Horse
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const styles = {
  heading: {
    marginBottom: 8
  }
};
