import React, { useState } from "react";
import TableBooking from "../../../components/dashboard/TableBooking";
import { Button, Modal, TextInput, FileInput } from "flowbite-react";
import useFetch from "../../../hooks/useFetch";
import { Axios } from "../../../lib/api/Axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import PaginationApp from "../../../components/pagination";
import toast from "react-hot-toast";

export default function PackageDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [isModalOpenEditImage, setIsModalOpenEditImage] = useState(false);
  const [isModalOpenMultiImages, setIsModalOpenMultiImages] = useState(false); // نافذة رفع صور متعددة
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [programDays, setProgramDays] = useState([]);

  const { data, loading, error, setReload } = useFetch(
    `/package?pageNumber=${currentPage}&PACKAGE_PER_PAGE=10`
  );

  const packages = data?.data?.packages;

  // Schema التحقق من الصحة لـ Formik
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

  // إعداد Formik
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

  // دالة لمعالجة تعديل الحزمة
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

  // دالة لمعالجة تحرير الصورة
  const handleEditImageClick = (package_) => {
    setSelectedFaq(package_);
    setIsModalOpenEditImage(true);
  };

  // دالة لمعالجة حذف الحزمة
  const handleDeleteClick = (package_) => {
    setSelectedFaq(package_);
    setIsModalOpenDelete(true);
  };

  // دالة لحذف الحزمة
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

  // دالة لتغيير حالة التثبيت للحزمة
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

  // دالة لإضافة يوم جديد في البرنامج
  const addDayInput = () => {
    const newDay = { day: programDays.length + 1, description: "" };
    const updatedDays = [...programDays, newDay];
    setProgramDays(updatedDays);
    formik.setFieldValue("program.programItem", updatedDays);
  };

  // دالة لمعالجة تغيير وصف اليوم في البرنامج
  const handleDayDescriptionChange = (index, value) => {
    const updatedDays = [...programDays];
    updatedDays[index].description = value;
    setProgramDays(updatedDays);
    formik.setFieldValue("program.programItem", updatedDays);
  };

  // دالة لتحميل صور متعددة
  const handleMultiImageUpload = async (event) => {
    const files = Array.from(event.target.files); // الحصول على جميع الملفات
    console.log("Files to upload: ", files); // سجل الملفات لعرضها في الكونسول
    if (files.length === 0) {
      toast.error("No files selected.");
      return;
    }

    const formData = new FormData();
    files.forEach(file => {
      formData.append("images", file); // إضافة كل ملف إلى FormData
    });
    

    try {
      const res = await Axios.post(`/package/image-map/${selectedFaq._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      console.log(res); // سجل استجابة السيرفر

      setReload((prev) => !prev);
      setIsModalOpenMultiImages(false); // إغلاق نافذة رفع الصور المتعددة
      toast.success("Images uploaded successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Multi-image upload failed.");
    }
  };

  const handleImageUpload = async (event) => {
    
    const files = Array.from(event.target.files); // الحصول على جميع الملفات
    console.log("Files to upload: ", files); // سجل الملفات لعرضها في الكونسول
    if (files.length === 0) {
      toast.error("No files selected.");
      return;
    }

    const formData = new FormData();
    files.forEach(file => {
      formData.append("images", file); // إضافة كل ملف إلى FormData
    });
    

    try {
      const res = await Axios.post(`/package/image-package/${selectedFaq._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      console.log(res); // سجل استجابة السيرفر

      setReload((prev) => !prev);
      setIsModalOpenMultiImages(false); // إغلاق نافذة رفع الصور المتعددة
      toast.success("Images uploaded successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Multi-image upload failed.");
    }
  };

  return (
    packages && (
      <div className="w-full">
        <TableBooking
          title={"Packages"}
          values={packages}
          Buttons={(package_) => (
            <>
              {package_.isPin === true ? (
                <Button onClick={() => togglePinPackageClick(package_)} color={"success"}>
                  Pinned
                </Button>
              ) : (
                <Button onClick={() => togglePinPackageClick(package_)}>Unpin</Button>
              )}
              <Button onClick={() => handleEditClick(package_)}>Edit</Button>
              <Button onClick={() => handleEditImageClick(package_)}>Edit Image</Button>
              <Button onClick={() => handleDeleteClick(package_)}>Delete</Button>
              <Button onClick={() => { setSelectedFaq(package_); setIsModalOpenMultiImages(true); }}>
                Multi Images
              </Button> {/* زر رفع صور متعددة */}
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

        {/* نافذة تعديل الحزمة */}
        {selectedFaq && (
          <Modal show={isModalOpen} onClose={() => setIsModalOpen((e) => !e)}>
            <Modal.Header>Edit package</Modal.Header>
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
                className={`${formik.errors.title && formik.touched.title && "ring-2 rounded-lg ring-red-500"}`}
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="text-red-500 text-sm pt-1">{formik.errors.title}</div>
              ) : null}

              <p className="font-bold">Package description:</p>
              <TextInput
                type="text"
                name="description"
                placeholder="Enter description here"
                onChange={formik.handleChange}
                value={formik.values.description}
                className={`${formik.errors.description && formik.touched.description && "ring-2 rounded-lg ring-red-500"}`}
              />
              {formik.touched.description && formik.errors.description ? (
                <div className="text-red-500 text-sm pt-1">{formik.errors.description}</div>
              ) : null}

              <p className="font-bold">Program title:</p>
              <TextInput
                type="text"
                name="program.title"
                placeholder="Enter program title here"
                onChange={formik.handleChange}
                value={formik.values.program.title}
                className={`${formik.errors.program?.title && formik.touched.program?.title && "ring-2 rounded-lg ring-red-500"}`}
              />
              {formik.touched.program?.title && formik.errors.program?.title ? (
                <div className="text-red-500 text-sm pt-1">{formik.errors.program.title}</div>
              ) : null}

              <p className="font-bold">Program description:</p>
              <TextInput
                type="text"
                name="program.description"
                placeholder="Enter program description here"
                onChange={formik.handleChange}
                value={formik.values.program.description}
                className={`${formik.errors.program?.description && formik.touched.program?.description && "ring-2 rounded-lg ring-red-500"}`}
              />
              {formik.touched.program?.description && formik.errors.program?.description ? (
                <div className="text-red-500 text-sm pt-1">{formik.errors.program.description}</div>
              ) : null}

              <p className="font-bold">Program Items:</p>
              {programDays.map((day, index) => (
                <div key={index} className="flex space-x-2">
                  <TextInput
                    type="number"
                    value={day.day}
                    readOnly
                    className="w-16"
                  />
                  <TextInput
                    type="text"
                    placeholder="Description"
                    value={day.description}
                    onChange={(e) => handleDayDescriptionChange(index, e.target.value)}
                    className="flex-grow"
                  />
                </div>
              ))}
              <Button onClick={addDayInput}>Add Day</Button>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={formik.handleSubmit}>Save Changes</Button>
              <Button onClick={() => setIsModalOpen(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
        )}

        {/* نافذة رفع صورة واحدة */}
        {selectedFaq && (
          <Modal show={isModalOpenEditImage} onClose={() => setIsModalOpenEditImage((e) => !e)}>
            <Modal.Header>Edit Image</Modal.Header>
            <Modal.Body>
              <FileInput multiple accept="image/*" onChange={handleImageUpload} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setIsModalOpenEditImage(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
        )}

        {/* نافذة رفع صور متعددة */}
        {selectedFaq && (
          <Modal show={isModalOpenMultiImages} onClose={() => setIsModalOpenMultiImages((e) => !e)}>
            <Modal.Header>Upload Multiple Images</Modal.Header>
            <Modal.Body>
              <FileInput
                multiple
                accept="image/*" // تحديد أنواع الملفات المقبولة
                onChange={handleMultiImageUpload}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setIsModalOpenMultiImages(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
        )}

        {/* نافذة تأكيد الحذف */}
        {selectedFaq && (
          <Modal show={isModalOpenDelete} onClose={() => setIsModalOpenDelete(false)}>
            <Modal.Header>Confirm Deletion</Modal.Header>
            <Modal.Body>Are you sure you want to delete this package?</Modal.Body>
            <Modal.Footer>
              <Button onClick={deleteHandel}>Yes</Button>
              <Button onClick={() => setIsModalOpenDelete(false)}>No</Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    )
  );
}
