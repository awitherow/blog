import React from "react";

import Hashtag from "./hashtag";

export default function HashtagList({ tags, inline = false, ...props }) {
  return (
    <ul
      {...props}
      style={{
        display: inline ? "inline" : "block",
        paddingLeft: 0,
        marginTop: inline ? 8 : 0,
        marginLeft: inline ? 8 : 0
      }}
    >
      {tags.map(tag => <Hashtag tag={tag} {...props} />)}
    </ul>
  );
}
