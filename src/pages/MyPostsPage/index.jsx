import React, { useState, useContext, useEffect, useCallback } from "react";
import ListPost from "@/components/ListPost";
import { getAllPost, deletePost } from "@/services/api/blog";
import AuthContext from "@/contexts/authContext";
import  DialogSubmitDeleteBlog  from "@/components/DialogSubmitDeleteBlog";
import toast from "react-hot-toast";

const MyPostsPage = () => {
  const { userInfo } = useContext(AuthContext);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [openDelete, setOpenDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [postId, setPostId] = useState(null);

  const fetchMyPosts = useCallback(async () => {
    if (!userInfo?.user?.id) return;
    try {
      setLoading(true);
      const res = await getAllPost();
      const items = Array.isArray(res?.data?.items)
        ? res.data.items
        : Array.isArray(res)
        ? res
        : [];
      const myPosts = items.filter((p) => p?.author?._id === userInfo.user.id);
      setPosts(myPosts);
    } catch (err) {
      toast.error("Không tải được bài viết của bạn.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [userInfo?.user?.id]);

  useEffect(() => {
    fetchMyPosts();
  }, [fetchMyPosts]);

  const handleOpenDelete = (id, title) => {
    setPostId(id);
    setPostTitle(title);
    setOpenDelete(true);
  };
  
  const handleDelete = async () => {
    if (!postId) return;
    try {
      setDeleting(true);
      setPosts((prev) => prev.filter((p) => p._id !== postId));
      await deletePost(postId);
      toast.success("Xóa bài viết thành công!");
      await fetchMyPosts();
    } catch (err) {
      toast.error("Xóa thất bại. Vui lòng thử lại.");
      console.error(err);
    } finally {
      setDeleting(false);
      setOpenDelete(false);
      setPostId(null);
    }
  };

  return (
    <div className="overflow-auto">
      <h2 className="hero-title text-3xl sm:text-5xl font-semibold sm:leading-[4rem] text-primary text-center mt-10 mb-8">
        ✍️ My Post
      </h2>
      <ListPost
        posts={posts}
        loading={loading}
        onDeleteClick={handleOpenDelete}
      />

      <DialogSubmitDeleteBlog
        open={openDelete}
        onOpenChange={setOpenDelete}
        onConfirmDelete={handleDelete}
        deleting={deleting}
        postTitle={postTitle}
      />
    </div>
  );
};

export default MyPostsPage;
