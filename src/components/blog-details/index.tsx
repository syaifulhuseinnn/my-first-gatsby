import React from "react";

type BlogDetailsProps = {
  title: string;
  body: string;
};

function BlogDetails({ title, body }: BlogDetailsProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default BlogDetails;
