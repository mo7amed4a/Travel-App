import React, { useEffect, useState } from "react";
import { Axios } from "../../../lib/api/Axios";
import { Button, Modal } from "flowbite-react";
import { AiOutlineDelete, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import toast from "react-hot-toast";

export default function Pages() {
  const [sections, setSections] = useState([]);
  const [expandedSections, setExpandedSections] = useState({});
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get("/pages/home/sections");
        setSections(res.data.data.sections);
      } catch (error) {
        toast.error("Failed to fetch data");
      }
    };
    fetchData();
  }, []);

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the section visibility
    }));
  };

  const handleDeleteClick = (section) => {
    setSelectedSection(section);
    setIsModalOpenDelete(true);
  };

  const deleteSection = async () => {
    try {
      const res = await Axios.delete(`/pages/home/sections/${selectedSection._id}`);
      setSections((prev) => prev.filter((sec) => sec._id !== selectedSection._id));
      setIsModalOpenDelete(false);
      toast.success("Section deleted successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex flex-col h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">Sections</h1>
      <div className="flex-grow grid grid-cols-1 gap-6 overflow-y-auto">
        {sections.length > 0 ? (
          sections.map((section, index) => (
            <div key={section._id} className="bg-white shadow-md rounded-lg p-6 border-t-4 border-blue-500">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">Section {index + 1}</h2>
                  <p className="text-gray-600 font-medium">Title: {section.title}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button color="failure" onClick={() => handleDeleteClick(section)}>
                    <AiOutlineDelete className="mr-2" /> Delete
                  </Button>
                  <Button onClick={() => toggleSection(section._id)}>
                    {expandedSections[section._id] ? <AiOutlineUp /> : <AiOutlineDown />}{" "}
                    {expandedSections[section._id] ? "Hide" : "Show"} Details
                  </Button>
                </div>
              </div>

              {expandedSections[section._id] && (
                <>
                  <p className="text-gray-700 mb-4">Content: {section.content}</p>
                  {section.images.length > 0 && (
                    <div className="my-4">
                      <h3 className="font-semibold text-gray-700 mb-2">Images:</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {section.images.map((image) => (
                          <div key={image._id}>
                            <img
                              src={`https://gheno.webbing-agency.com${image.url}`}
                              alt={image.description}
                              className="w-full h-auto rounded-md shadow"
                            />
                            {image.description && (
                              <p className="text-sm text-gray-600 mt-2">{image.description}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {section.links.length > 0 && (
                    <div className="my-4">
                      <h3 className="font-semibold text-gray-700 mb-2">Links:</h3>
                      <ul className="list-disc pl-5">
                        {section.links.map((link) => (
                          <li key={link._id} className="text-blue-600">
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
          ))
        ) : (
          <p>No sections available.</p>
        )}
      </div>

      {selectedSection && (
        <Modal show={isModalOpenDelete} onClose={() => setIsModalOpenDelete(false)}>
          <Modal.Header>Delete Section</Modal.Header>
          <Modal.Body>Are you sure you want to delete this section?</Modal.Body>
          <Modal.Footer>
            <Button color="failure" onClick={deleteSection}>
              Delete
            </Button>
            <Button onClick={() => setIsModalOpenDelete(false)}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
