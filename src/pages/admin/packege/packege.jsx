import React, { useEffect, useState } from "react";
import TableBooking from "../../../components/dashboard/TableBooking";
import { Button, Modal, TextInput } from "flowbite-react";
import useFetch from "../../../hooks/useFetch";
import { Axios } from "../../../lib/api/Axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import PaginationApp from "../../../components/pagination";

export default function PackageDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error, setReload } = useFetch(
    `/package?pageNumber=${currentPage}&PACKAGE_PER_PAGE=2`
  );

  const packages = data?.data?.packages;

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
      const res = await Axios.patch(`/package/${selectedFaq._id}`, {
        title: values.title,
        description: values.description,
      });
      setReload((prev) => !prev);
      setIsModalOpen(false);
    },
  });

  const handleEditClick = (package_) => {
    setSelectedFaq(package_);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (package_) => {
    setSelectedFaq(package_);
    setIsModalOpenDelete(true);
  };

  const deleteHandel = async () => {
    const res = await Axios.delete(`/package/${selectedFaq._id}`);
    console.log(res.data.message);
    setReload((prev) => !prev);
    setIsModalOpenDelete(false);
  };

  return (
    packages && (
      <div className="w-full">
        <TableBooking
          title={"Packages"}
          values={packages}
          Buttons={(package_) => (
            <>
              <Button onClick={() => handleEditClick(package_)}>Edit</Button>
              <Button color={"failure"} onClick={() => handleDeleteClick(package_)}>
                Delete
              </Button>
            </>
          )}
          description={"Packages List"}
          className="w-full"
        />
        <PaginationApp
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={data?.totalPages || 1}
        />

        {selectedFaq && (
          <Modal show={isModalOpen} onClose={() => setIsModalOpen((e) => !e)}>
            <Modal.Header>Edit package_</Modal.Header>
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
            <Modal.Header>Delete package_</Modal.Header>
            <Modal.Body>Do you want delete this package_?</Modal.Body>
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
