import FormUpload from "@/components/FormUpload";
import UploadImageBlog from "@/components/UploadImageBlog";
import { createPost } from "@/services/api/blog";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
const CreateBlogPage = () => {
  const [file, setFile] = useState(null);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [tags, setTags] = useState([]);
  const [tagValue, setTagValue] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  const handleCreateTag = () => {
    const name = tagValue.trim();
    if (!name) return;
    if (tags.some((t) => t.name.toLowerCase() === name.toLowerCase())) return;
    setTags((prev) => [{ id: Date.now(), name }, ...prev]);
    setTagValue("");
  };

  const handleDeleteTag = (id) => {
    setTags((prev) => prev.filter((t) => t.id !== id));
  };

  const handleUpLoad = (pickedFile) => setFile(pickedFile);

  const handleCreateBlog = async () => {
    if (!blogTitle || !blogContent || !file) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        { method: "POST", body: formData }
      );
      const json = await res.json();

      if (!res.ok) {
        toast.error(json?.error?.message || "Upload image failed");
        return;
      }

      const imageUrl = json.secure_url || json.url;
      if (!imageUrl) {
        toast.error("Cannot get image URL from Cloudinary");
        return;
      }
      const payload = {
        title: blogTitle,
        image: imageUrl,
        content: blogContent,
        tags: tags.map((t) => t.name),
      };

      const createRes = await createPost(payload);
      if (createRes?.status === 200 || createRes?.status === 201) {
        toast.success("Tạo blog thành công");
        setBlogTitle("");
        setBlogContent("");
        setTags([]);
        setFile(null);
        navigate("/");
      } else {
        toast.error(createRes?.data?.message || "Create blog failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="text-3xl sm:text-6xl font-semibold !sm:leading-[4rem] text-primary text-center mt-10 mb-8">
        📝 Create a New Blog
      </div>
      <div className="grid gap-2">
        <Label
          className="flex items-center gap-2 text-sm font-medium"
          htmlFor="title"
        >
          Blog Image
        </Label>
        <UploadImageBlog onUpLoad={handleUpLoad} />
      </div>
      <FormUpload
        handleAddTag={handleCreateTag}
        tags={tags}
        tagValue={tagValue}
        setTagValue={setTagValue}
        handleDeleteTag={handleDeleteTag}
        handleCreateBlog={handleCreateBlog}
        content={blogContent}
        setContent={setBlogContent}
        title={blogTitle}
        setTitle={setBlogTitle}
        loading={loading}
      />
    </div>
  );
};

export default CreateBlogPage;
