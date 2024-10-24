"use client";
import { Axios, baseURL } from "@/lib/api/Axios";

import { Button, FileInput, Modal } from "flowbite-react";
import { useMemo, useRef, useState } from "react";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichBlog = ({ setFieldValue, description }) => {
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [imageDeleteSrc, setImageDeleteSrc] = useState({
    src: null,
    id: null,
  });

  const handleChange = (html) => {
    setFieldValue("description", html);
    localStorage.setItem('description', html)

    const images = document.querySelectorAll(".ql-editor img");
    images.forEach((img) => {
      if (!img.hasAttribute("data-click-listener")) {
        let id = Math.random().toString(36);
        img.setAttribute("data-click-listener", "true");
        img.setAttribute("data-id-for-deleted", id);
        img.addEventListener("click", (e) => {
          setIsOpenDelete(true);
          setImageDeleteSrc({
            src: img.src,
            id,
          });
        });
      }
    });
  };

  const removeImageFromEditor = (id) => {
    const img = document.querySelector(`[data-id-for-deleted="${id}"]`);
    img.remove();
  };

  const quillRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          [{ font: [] }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike"],
          [{ script: "sub" }, { script: "super" }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block"],
          ["link", "image", "video"],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          ["clean"],
        ],
        handlers: {
          image: () => handleUploadClick(),
        },
      },
    }),
    []
  );
  function imageHandler(url = null, alt) {
    if (!quillRef.current) return;

    const editor = quillRef.current.getEditor();
    const range = editor.getSelection();

    if (url) {
      alt = prompt("Please enter the alt for image");
    }

    if (url && range) {
      // editor.insertEmbed(range.index, "image", url, "user");
      const imgTag = `
        <img src="${url}" alt="${alt}" />
      `;
      editor.clipboard.dangerouslyPasteHTML(range.index, imgTag);
    }
  }

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      toast.error("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await Axios.post(`/ImagesPlogs`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res?.data?.success === true) {
        imageHandler(baseURL + res?.data?.imageUrl);
        toast.success("Image uploaded successfully");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Image upload failed.");
    }
  };


  const handelDeleteImage = async () => {
    let url = decodeURIComponent(imageDeleteSrc.src).split(baseURL);
    url.length > 1 ? (url = url[1]) : (url = imageDeleteSrc.src)

    try {
      const res = await Axios.post(`/ImagesPlogs/delete`, {
        imageName: url,
      });

      if (res?.data?.success === true) {
        toast.success("Image deleted successfully");
        removeImageFromEditor(imageDeleteSrc.id);
        setIsOpenDelete(false);
      }

    } catch (error) {
      console.log(error);
      
      toast.error(error?.response?.data?.message || "Image deleted failed.");
    }

  };

  return (
    <div className="mb-6">
      <ReactQuill
        className="h-[45vh] max-h-[80vh]:"
        ref={quillRef}
        theme="snow"
        value={localStorage.getItem("description") ||description}
        onChange={handleChange}
        modules={modules}
      />

      <FileInput
        ref={fileInputRef}
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />

      <Modal
        show={isOpenDelete}
        onClose={() => setIsOpenDelete((prev) => !prev)}
      >
        <Modal.Header>Delete image</Modal.Header>
        <Modal.Body>
          <img src={imageDeleteSrc.src} alt="image" />
        </Modal.Body>
        <Modal.Footer className="flex justify-end">
          <Button color="failure" onClick={handelDeleteImage}>Delete</Button>
          <Button onClick={() => setIsOpenDelete(false)}>close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RichBlog;