import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

type BlogThumbnailProps = {
  title: string;
  description: string;
  date: string;
};

function BlogThumbnail({ title, description, date }: BlogThumbnailProps) {
  return (
    <article className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold">{title}</h1>
      <span className="">{date}</span>
      <MDXRenderer>{description}</MDXRenderer>
    </article>
  );
}

export default BlogThumbnail;
