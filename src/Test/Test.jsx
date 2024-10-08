import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const SimpleUploadImageForm = () => {
  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("image", values.image);

    axios.post("YOUR_API_URL", formData)
      .then(response => {
        console.log("File uploaded successfully", response.data);
      })
      .catch(error => {
        console.error("Error uploading file", error);
      });
  };

  return (
    <Formik
      initialValues={{ name: "", image: null }}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" placeholder="Enter name" />
          </div>

          <div>
            <label htmlFor="image">Upload Image</label>
            <input
              type="file"
              onChange={(event) => setFieldValue("image", event.currentTarget.files[0])}
            />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default SimpleUploadImageForm;
