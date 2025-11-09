import React from "react";
import { useParams } from "react-router-dom";
import { getPost } from "@/services/api/blog";
import BlogDetail from "@/components/BlogDetail";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const BlogDetailPage = () => {
  const navigate=useNavigate();
  const { id } = useParams();
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const data = await getPost(id);
        setPost({
          id: data._id || data.id,
          title: data.title || "Untitled",
          author:
            typeof data.author === "object"
              ? data.author?.username || data.author?.name || "Admin"
              : data.author || "Admin",
          image: data.image || "",
          createdAt: data.createdAt,
          content: data.content || "",
          tags: Array.isArray(data.tags) ? data.tags : [],
        });
      } catch (err) {
        toast.error("Không tải được bài viết.");
        navigate("/");        
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
