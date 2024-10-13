import React, { useState } from "react";
import TableBooking from "../../../components/dashboard/TableBooking";
import { Button, Modal, TextInput } from "flowbite-react";
import useFetch from "../../../hooks/useFetch";
import { Axios } from "../../../lib/api/Axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import PaginationApp from "../../../components/pagination";
import toast from "react-hot-toast";

export default function PackageDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [programDays, setProgramDays] = useState([]);

  const { data, loading, error, setReload } = useFetch(
    `/package?pageNumber=${currentPage}&PACKAGE_PER_PAGE=10`
  );

  const packages = data?.data?.packages;

  // Validation Schema for Formik
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    program: Yup.object({
      title: Yup.string().required("Program title is required"),
      description: Yup.string().required("Program description is required"),
      programItem: Yup.array().of(
        Yup.object({
          day: Yup.number().required("Day is required"),
          description: Yup.string().required("Description is required"),
        })
      ),
    }).required(),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      program: {
        title: "",
        description: "",
        programItem: [],
      },
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        values.program.programItem = programDays;
        const res = await Axios.patch(`/package/${selectedFaq._id}`, {
          title: values.title,
          description: values.description,
          program: values.program,
        });
        setReload((prev) => !prev);
        setIsModalOpen(false);
        toast.success("Package edited successfully");
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    },
  });

  const handleEditClick = (package_) => {
    setSelectedFaq(package_);
    formik.setValues({
      title: package_.title,
      description: package_.description,
      program: package_.program || {
        title: "",
        description: "",
        programItem: [],
      },
    });
    setProgramDays(package_.program?.programItem || []);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (package_) => {
    setSelectedFaq(package_);
    setIsModalOpenDelete(true);
  };

  const deleteHandel = async () => {
    try {
      const res = await Axios.delete(`/package/${selectedFaq._id}`);
      console.log(res.data.message);
      setReload((prev) => !prev);
      setIsModalOpenDelete(false);
      setSelectedFaq(null);
      toast.success("Package deleted successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const togglePinPackageClick = (package_) => {
    setSelectedFaq(package_);
    selectedFaq && togglePinPackageHandel();
  };

  const togglePinPackageHandel = async () => {
    try {
      const res = await Axios.get(`/package/toggle-pin/${selectedFaq._id}`);
      setReload((prev) => !prev);
      setSelectedFaq(null);
      toast.success("Package pin status toggled successfully");
    } catch (error) {
      console.log(error);
      
      toast.error(error?.response?.data?.message);
    }
  };

  const addDayInput = () => {
    const newDay = { day: programDays.length + 1, description: "" };
    const updatedDays = [...programDays, newDay];
    setProgramDays(updatedDays);
    formik.setFieldValue("program.programItem", updatedDays);
  };

  const handleDayDescriptionChange = (index, value) => {
    const updatedDays = [...programDays];
    updatedDays[index].description = value;
    setProgramDays(updatedDays);
    formik.setFieldValue("program.programItem", updatedDays);
  };

  return (
    packages && (
      <div className="w-full">
        <TableBooking
          title={"Packages"}
          values={packages}
          Buttons={(package_) => (
            <>
             {package_.isPin === true ? <Button onClick={() => togglePinPackageClick(package_)} color={"success"}>Pinned</Button> :
              <Button onClick={() => togglePinPackageClick(package_)} >unpin</Button>}
              <Button onClick={() => handleEditClick(package_)}>Edit</Button>
              <Button
                color={"failure"}
                onClick={() => handleDeleteClick(package_)}
              >
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
              <p className="font-bold -mb-3">Package title:</p>
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
              <p className="font-bold">Package description:</p>
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

              {/* Program Section */}
              <div className="space-y-2">
                <h4 className="font-bold">Program:</h4>
                <span>Program title *</span>
                <TextInput
                  type="text"
                  name="program.title"
                  placeholder="Enter program title"
                  onChange={formik.handleChange}
                  value={formik.values.program.title}
                  className={`${
                    formik.errors.program?.title &&
                    formik.touched.program?.title &&
                    "ring-2 rounded-lg ring-red-500"
                  }`}
                />
                {formik.touched.program?.title && formik.errors.program?.title ? (
                  <div className="text-red-500 text-sm pt-1">
                    {formik.errors.program.title}
                  </div>
                ) : null}
                <span>Program description *</span>
                <TextInput
                  type="text"
                  name="program.description"
                  placeholder="Enter program description"
                  onChange={formik.handleChange}
                  value={formik.values.program.description}
                  className={`${
                    formik.errors.program?.description &&
                    formik.touched.program?.description &&
                    "ring-2 rounded-lg ring-red-500"
                  }`}
                />
                {formik.touched.program?.description && formik.errors.program?.description ? (
                  <div className="text-red-500 text-sm pt-1">
                    {formik.errors.program.description}
                  </div>
                ) : null}
                <div className="py-4">
                  <h5>Program Days</h5>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {programDays.map((day, index) => (
                    <div key={index} className="flex flex-col text-xs">
                      <span>Day {day.day}</span>
                      <TextInput
                        type="text"
                        value={day.description}
                        className="w-full"
                        placeholder={`Day ${day.day} description`}
                        onChange={(e) => handleDayDescriptionChange(index, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
                {/* Program Items (Days) */}
                <Button onClick={addDayInput}>Add Day</Button>
              </div>
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
            <Modal.Body className="space-y-4">
              <div className="my-2 space-y-1">
                <p>
                  Are you sure you want to delete{" "}
                  <span className="font-bold">{selectedFaq.title}</span>?
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={deleteHandel}>Delete</Button>
              <Button
                color="failure"
                onClick={() => setIsModalOpenDelete((e) => !e)}
              >
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    )
  );
}
