import React from "react";
import BlogThumbnail from "../blog-thumbnail";

type BlogListProps = {
  posts: {
    id: string;
    frontmatter: {
      date: string;
      title: string;
    };
    body: string;
  }[];
};

function BlogList({ posts }: BlogListProps) {
  console.log(posts);
  return (
    <div className="w-1/2 mx-auto my-5 flex flex-col gap-10">
      {posts.map((post: any) => (
        <BlogThumbnail
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          description={post.body}
          key={post.id}
        />
      ))}
    </div>
  );
}

export default BlogList;
