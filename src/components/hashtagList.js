import React from "react";

import Hashtag from "./hashtag";

export default function HashtagList({ tags, ...props }) {
  return (
    <ul
      {...props}
      style={{
        paddingLeft: 0,
        marginLeft: 0
      }}
    >
      {tags.map(tag => <Hashtag tag={tag} {...props} />)}
    </ul>
  );
}
