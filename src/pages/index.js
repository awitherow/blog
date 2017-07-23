import React, { Component } from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import HashtagList from "../components/hashtagList";

const allHashTags = ["daoism", "wing chun", "cryptocurrency", "blockchain"];

export default class Index extends Component {
  render() {
    return (
      <div>
        <h2>
          Welcome to my blog, which I hope to keep maintained as a collection of
          useful thoughts and things.
        </h2>
        <h3>Things I've Written</h3>
        <p>
          Topics I write about are below in the form of hash tags. Each post is
          tagged below.
        </p>
        <HashtagList tags={allHashTags} />
        <h4>Blog Posts</h4>
        <ul>
          <li>
            <Link to="/posts/empty-cup-filled/">
              Empty your cup and fill it from mine.{" "}
            </Link>
            <HashtagList tags={["wing chun", "daoism"]} />
          </li>
        </ul>
        <h4>Books</h4>
        <p>Coming soon...</p>
        <h3>Recommended</h3>
        <p>
          A collection of recommended things sorted by category. If you're
          looking to learn something, these are the best of the best that I've
          gathered as I've toiled through the internet.
        </p>
        <h4>Philosophy</h4>
        <ul>
          <li>
            <a target="_blank" href="http://amzn.to/2vyGzmW">
              The Enchiridion
            </a>
          </li>
        </ul>
        <h4>Hustle</h4>
        <ul>
          <li>
            Stay on top of the crypto currency market with a daily trends email
            from:{" "}
            <a
              target="_blank"
              href="https://www.coinsheet.org/?mwr=5038-f2d70e29"
            >
              Coinsheet
            </a>.
          </li>
          <li>
            Learn about Crypto Currency Charts:{" "}
            <a target="_blank" href="http://amzn.to/2gUA76F">
              Top 10 Trading Setups: How to Find them, When to Trade them, How
              to Make Money with Them by Ivaylo Ivanov.
            </a>.
          </li>
          <ul>
            <li>
              Need to transfer money between currency super fast with super low
              fees? {" "}
              <a target="_blank" href="https://transferwise.com/u/lewisw1">
                Transerwise
              </a>{" "}
              is the best solution.
            </li>
          </ul>
        </ul>
      </div>
    );
  }
}
