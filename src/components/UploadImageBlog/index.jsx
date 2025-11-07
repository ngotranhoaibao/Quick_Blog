import React, { useState } from "react";
import { Input } from "../ui/input";
import { IconTransfer } from "@tabler/icons-react";

export default function UploadImageBlog({ onUpLoad }) {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      onUpLoad?.(file);
    }
  };

  return (
    <div className="border border-dashed border-gray-400 rounded-lg p-4 grid justify-center">
      <label
        htmlFor="blog-image"
        className="border-gray-400 rounded-lg p-2 text-center cursor-pointer hover:bg-gray-50 transition"
      >
        <span className="text-sm text-gray-600">
          <div className="text-sm text-gray-600 flex items-center justify-center">
            {imagePreview ? (
              <>
                <IconTransfer stroke={2} className="mr-2 w-5 h-5" />
                Change image
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-upload inline-block mr-2 w-5 h-5"
                >
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                  <path d="M7 9l5 -5l5 5"></path>
                  <path d="M12 4l0 12"></path>
                </svg>
                Click to upload image
              </>
            )}
          </div>
        </span>

        <Input
          onChange={handleImageChange}
          type="file"
          id="blog-image"
          accept="image/*"
          className="hidden"
        />
      </label>

      {imagePreview && (
        <img
          src={imagePreview}
          alt="Preview"
          className="mt-4 w-full h-32 object-cover rounded-md"
        />
      )}
    </div>
  );
}
