import React, { useRef } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Editor } from "@tinymce/tinymce-react";
import { Badge } from "../ui/badge";
import { IconX } from "@tabler/icons-react";

const FormUpload = ({
  handleAddTag,
  tags,
  tagValue,
  setTagValue,
  handleDeleteTag,
  handleCreateBlog,
  content,
  setContent,
  title,
  setTitle,
}) => {
  const TINY_KEY = import.meta.env.VITE_TINY_KEY;
  const editorRef = useRef(null);

  return (
    <>
      <div className="grid gap-2">
        <Label
          className="flex items-center gap-2 text-sm font-medium mt-4"
          htmlFor="title"
        >
          Blog Title
        </Label>
        <Input
          id="title"
          placeholder="Enter blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <Label className="flex items-center gap-2 text-sm font-medium mt-4">
          Blog Content
        </Label>
        <Editor
          apiKey={TINY_KEY}
          onInit={(evt, editor) => (editorRef.current = editor)}
          onEditorChange={(newContent) => setContent(newContent)}
          init={{
            plugins: [
              "anchor",
              "autolink",
              "lists",
              "link",
              "table",
              "media",
              "wordcount",
              "emoticons",
              "searchreplace",
            ],
            toolbar:
              "undo redo | bold italic underline | link media | numlist bullist | removeformat",
          }}
        />
      </div>
      <Label className="flex items-center gap-2 text-sm font-medium mt-4">
        Blog Tag
      </Label>
      <div className="flex gap-2 mt-3">
        <Input
          value={tagValue}
          onChange={(e) => setTagValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTag()}
          placeholder="Enter tag name"
        />
        <Button onClick={handleAddTag}>Add Tag</Button>
      </div>

      <div className="flex gap-2 mt-2 flex-wrap">
        {tags.map((tag) => (
          <Badge key={tag.id} className="flex items-center gap-1 pr-1">
            {tag.name}
            <button
              type="button"
              onClick={() => handleDeleteTag(tag.id)} 
              className="p-0.5 "
            >
              <IconX className="h-3 w-3" />
            </button>
          </Badge>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <Button
          className="items-center justify-center gap-2"
          onClick={handleCreateBlog}
        >
          Create Blog
        </Button>
      </div>
    </>
  );
};

export default FormUpload;
