import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogListCard = ({ posts = [], loading = false }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} aria-live="polite" aria-busy="true">
            <Skeleton className="h-[180px] rounded-xl" />
            <br />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
      {posts.map((post, idx) => {
        const id = post._id || post.id || idx; 
        const title = post.title ;
        const image = post.image ;
        const tags = Array.isArray(post.tags) ? post.tags : [];
        const content = post.content || "".slice(0, 140) + (post.content ? " ..." : "");

        return (
          <div key={id}>
            <Link className="grid h-full" data-discover="true" to={`/blog-detail/${id}`}>
              <div className="shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-[1.02]">
                {image ? (
                  <img alt={title} className="w-full h-48 object-cover" src={image} loading="lazy" />
                ) : (
                  <div className="w-full h-48 bg-muted" />
                )}
                <div className="p-4 bg-card">
                  {!!tags.length && (
                    <div className="flex gap-2 mb-2">
                      {tags.map((tag, i) => (
                        <span
                          key={`${tag}-${i}`}
                          className="inline-flex items-center justify-center border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 overflow-hidden border-transparent bg-[#dcdafa] text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <h5 className="text-lg font-semibold mb-2 text-ellipsis whitespace-nowrap overflow-hidden">
                    {title}
                  </h5>
                  <p className="text-foreground mb-2 text-xs line-clamp-2">{content}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogListCard;
