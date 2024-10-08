import React, { useEffect, useState } from "react";
import TableBooking from "../../../components/dashboard/TableBooking";
import { Button, Modal, TextInput } from "flowbite-react";
import useFetch from "../../../hooks/useFetch";
import { Axios } from "../../../lib/api/Axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import PaginationApp from "../../../components/pagination";
import toast from "react-hot-toast";

export default function Users() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error, setReload } = useFetch(
    `/posts?pageNumber=${currentPage}&POST_PER_PAGE=10`
  );

  const posts = data?.data?.posts;

  const validationSchema = Yup.object({
    title: Yup.string(),
    description: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema,
    onSubmit: async (values) => {
        try {
            const res = await Axios.patch(`/posts/${selectedFaq._id}`, {
              title: values.title,
              description: values.description,
            });
            setReload((prev) => !prev);
            setIsModalOpen(false);
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    },
  });

  const handleEditClick = (post) => {
    setSelectedFaq(post);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (post) => {
    setSelectedFaq(post);
    setIsModalOpenDelete(true);
  };

  const deleteHandel = async () => {
    try {
        const res = await Axios.delete(`/posts/${selectedFaq._id}`);
        console.log(res.data.message);
        setReload((prev) => !prev);
        setIsModalOpenDelete(false);
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
  };

  return (
    posts && (
      <div className="w-full">
        <TableBooking
          title={"Users"}
          values={posts}
          Buttons={(post) => (
            <>
              <Button onClick={() => handleEditClick(post)}>Edit</Button>
              <Button color={"failure"} onClick={() => handleDeleteClick(post)}>
                Delete
              </Button>
            </>
          )}
          description={"Users List"}
          className="w-full"
        />
        <PaginationApp
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={data?.totalPages || 1}
        />

        {selectedFaq && (
          <Modal show={isModalOpen} onClose={() => setIsModalOpen((e) => !e)}>
            <Modal.Header>Edit post</Modal.Header>
            <Modal.Body className="space-y-4">
              <div className="my-2 space-y-1">
                <p>
                  <span className="font-bold">Title:</span> {selectedFaq.title}
                </p>
              </div>
              <TextInput
                type="text"
                name="title"
                placeholder="Enter title here"
                onChange={formik.handleChange}
                value={formik.values.title}
                className={`${
                  formik.errors.title &&
                  formik.touched.title &&
                  "ring-2 rounded-lg ring-red-500"
                }`}
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="text-red-500 text-sm pt-1">
                  {formik.errors.title}
                </div>
              ) : null}
              <TextInput
                type="text"
                name="description"
                placeholder="Enter description here"
                onChange={formik.handleChange}
                value={formik.values.description}
                className={`${
                  formik.errors.description &&
                  formik.touched.description &&
                  "ring-2 rounded-lg ring-red-500"
                }`}
              />
              {formik.touched.description && formik.errors.description ? (
                <div className="text-red-500 text-sm pt-1">
                  {formik.errors.description}
                </div>
              ) : null}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={formik.handleSubmit}>Save</Button>
              <Button color="failure" onClick={() => setIsModalOpen((e) => !e)}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        )}

        {selectedFaq && (
          <Modal
            show={isModalOpenDelete}
            onClose={() => setIsModalOpenDelete((e) => !e)}
          >
            <Modal.Header>Delete post</Modal.Header>
            <Modal.Body>Do you want delete this post?</Modal.Body>
            <Modal.Footer>
              <Button color="failure" onClick={deleteHandel}>
                Delete
              </Button>
              <Button onClick={() => setIsModalOpenDelete((e) => !e)}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    )
  );
}
