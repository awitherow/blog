import React from "react";

const mapTextSize = size => {
  switch (size) {
    case "small":
      return 16;
    case "medium":
      return 20;
    case "large":
      return 24;
  }
};

export default function Hashtag({ tag, size = "small" }) {
  return (
    <li
      style={{
        display: "inline-block",
        marginRight: 8,
        backgroundColor: "#f0e000",
        color: "black",
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
        fontSize: mapTextSize(size)
      }}
    >
      #{tag}
    </li>
  );
}
