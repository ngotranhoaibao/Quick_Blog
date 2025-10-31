import React from "react";
const BlogDetail = ({ post }) => {
  if (!post) return null;
  const date = post.createdAt
    ? new Date(post.createdAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "Unknown date";

  return (
    <div>
      <div className="text-center">
        <p className="text-primary font-medium">Published on {date}</p>
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto! py-4">
          {post.title}
        </h1>
        <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary">
          {post.author || "Admin"}
        </p>
      </div>
        <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
          <img alt={post.title} className="rounded-3xl mb-5 mx-auto" src={post.image} />
        </div>

      <div
        className="blog-details rich-text max-w-3xl mx-auto px-4 text-left text-foreground"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default BlogDetail;
