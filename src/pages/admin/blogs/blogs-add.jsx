import React, { useState } from "react";
import { Button, Card, FileInput, Label } from "flowbite-react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { Formik, Form, Field, FieldArray } from "formik";
import { Axios, baseURL } from '../../../lib/api/Axios';
import axios from "axios";

const BlogsAdd = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImages(files);
  };

  
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    values.tags.forEach((tag) => formData.append("tags", tag));
    images.forEach((image) => formData.append("images", image));

    try {
      const response = await Axios.post("http://194.164.77.238:8003/api/v1/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response:", response.data);
      resetForm();
      setImages([]);
    } catch (error) {
      console.error("Error uploading data:", error.response ? error.response.data : error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between gap-6 my-10">
        <section className="w-full">
          <Card className="w-full">
            <Formik
              initialValues={{ title: "", description: "", tags: [""] }}
              onSubmit={handleSubmit}
            >
              {({ values, setFieldValue, isSubmitting }) => (
                <Form className="flex flex-col">
                  <div className="flex flex-col mb-4">
                    <label htmlFor="title" className="mb-2">Title</label>
                    <Field
                      type="text"
                      id="title"
                      name="title"
                      className="p-2 border border-gray-300 rounded"
                    />
                  </div>

                  <div className="flex flex-col mb-4">
                    <label htmlFor="description" className="mb-2">Description</label>
                    <MarkdownEditor
                      className="min-h-[40vh]"
                      onChange={(value) => setFieldValue("description", value)}
                    />
                  </div>

                  <FieldArray name="tags">
                    {({ push, remove }) => (
                      <div className="flex flex-col mb-4">
                        <label className="mb-2">Tags</label>
                        {values.tags.map((tag, index) => (
                          <div key={index} className="flex items-center mb-2">
                            <Field
                              name={`tags.${index}`}
                              className="p-2 border border-gray-300 rounded mr-2"
                            />
                            <Button type="button" onClick={() => remove(index)}>
                              Remove
                            </Button>
                          </div>
                        ))}
                        <Button type="button" onClick={() => push("")}>
                          Add Tag
                        </Button>
                      </div>
                    )}
                  </FieldArray>

                  <div className="flex flex-col mb-4">
                    <Label htmlFor="file-upload" value="Upload Image" />
                    <FileInput
                      id="file-upload"
                      onChange={handleImageChange}
                      helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
                      multiple
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Saving..." : "Save"}
                  </Button>
                </Form>
              )}
            </Formik>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default BlogsAdd;
