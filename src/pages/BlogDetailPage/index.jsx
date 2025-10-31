import React from "react";
import { useParams } from "react-router-dom";
import api from "@/services/api";
import BlogDetail from "@/components/BlogDetail";

const BlogDetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const { data } = await api.get(`/posts/${id}`);
        const result = data?.item || data || {};
        setPost({
          id: result._id ,
          title: result.title ,
          author:
            typeof result.author === "object"
              ? result.author?.username || result.author?.name || "Admin"
              : result.author || "Admin",
          image: result.image ,
          createdAt: result.createdAt,
          content: result.content ,
          tags: Array.isArray(result.tags) ? result.tags : [],
        });
      } catch (err) {
        console.error( err);
      }
    })();
  }, [id]);

  return (
    <div className="py-8">
      <BlogDetail post={post} />
    </div>
  );
};

export default BlogDetailPage;
