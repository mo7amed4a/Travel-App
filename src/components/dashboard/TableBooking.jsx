import { Avatar, Badge, Checkbox, Table, Modal, Button } from "flowbite-react";
import React, { useState } from "react";
import { baseURL } from "../../lib/api/Axios";
import { deepSortObjectKeys } from "../../utils/sort";

export default function TableBooking({
  title,
  description,
  Buttons,
  values = [
    {
      _id: "6703ed76c2d1b92b40e5275a",
      title: "first Tiite 54",
      description: "fffffffffffffffffffffffffffff",
      user: {
        _id: "66c47c29d6e4a7cfe03c9ebc",
        firstName: "Abdelghany",
        lastName: "Ayman",
        mobile: "01123541265",
        phone: "01153214526",
        city: "cairo",
        country: "haram",
        email: "abdelghaniayman8@gmail.com",
        isAdmin: true,
        isStaff: false,
        role: "user",
        id: "66c47c29d6e4a7cfe03c9ebc",
      },
      tags: ["sea", "peash"],
      image: [
        {
          url: "/images/2024-10-07T14-17-26.022Zimg17.jpg",
          _id: "6703ed76c2d1b92b40e5275b",
          id: "6703ed76c2d1b92b40e5275b",
        },
        {
          url: "/images/2024-10-07T14-17-26.023Ziao9U2OdG8ZYG8ekVFVBHRKfo9RJ0mR5vjmdvt7x.jpg.webp",
          _id: "6703ed76c2d1b92b40e5275c",
          id: "6703ed76c2d1b92b40e5275c",
        },
      ],
      createdAt: "2024-10-07T14:17:27.123Z",
      updatedAt: "2024-10-07T14:17:27.123Z",
      __v: 0,
      id: "6703ed76c2d1b92b40e5275a",
    },
  ],
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [modalDataKey, setModalDataKey] = useState({});

  const openModal = (data, key) => {
    setModalData(data);
    setModalDataKey(key);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData({});
  };
  
  const sortedData = deepSortObjectKeys(values);

  return (
    <div className="rounded bg-white">
      <div className="p-4 space-y-2">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
      <div className="overflow-x-auto">
        <Table striped={true} hoverable>
          <Table.Head>
            {Object.keys(sortedData[0])
              .filter((key) => key !== "__v")
              .filter((key) => key !== "id")
              .filter((key) => key !== "_id")
              .map((key, index) => (
                <Table.HeadCell key={index}>{key}</Table.HeadCell>
              ))}
            {Buttons && <Table.HeadCell>Control</Table.HeadCell>}
          </Table.Head>

          <Table.Body>
            {sortedData.map((item, rowIndex) => (
              <Table.Row key={rowIndex}>
                {Object.entries(item)
                  .filter(([key]) => key !== "__v")
                  .filter(([key]) => key !== "id")
                  .filter(([key]) => key !== "_id")
                  // .filter(([key]) => key !== "description")
                  .map(([key, value], index) => (
                    <Table.Cell key={index}>
                      {key === "select" && value === true ? (
                        <Checkbox />
                      ) : key === "avatar" ? (
                        <Avatar
                          className="[&>*>img]:w-8 [&>*>img]:h-8"
                          img={value}
                          alt="User Avatar"
                          rounded
                        />
                      ) : key === "enquiry" ? (
                        <Badge color="success" className="inline-block">
                          {value}
                        </Badge>
                      ) : key === "content" ? (
                        <p className="text-sm line-clamp-1 w-24">{value}</p>
                      ) : (typeof value === "object" && value !== null) ||
                        key === "description" ? (
                        <Button size={"xs"} className="text-xs" onClick={() => openModal(value, key)}>
                          Show
                        </Button>
                      ) : key === "isPin" ? (
                        <span>{value ? "True .." : "False .."}</span>
                        // <span>{"True"}</span>
                      ) : 
                      <span>{value}</span>}
                    </Table.Cell>
                  ))}
                {Buttons && (
                  <Table.Cell className="flex max-w-44 gap-x-2">
                    {Buttons(item)}
                  </Table.Cell>
                )}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      <Modal show={isModalOpen} onClose={closeModal}>
        <Modal.Header>{modalDataKey} Details</Modal.Header>
        <Modal.Body>
          <Table striped={true}>
            <Table.Body>
              {typeof modalData === "string" ? (
                <Table.Row>
                  <Table.Cell className="font-medium">{modalData}</Table.Cell>
                </Table.Row>
              ) : (
                Object.entries(modalData).map(([key, value], index) => (
                  <Table.Row key={index}>
                    <Table.Cell className="font-medium">
                      {isNaN(key) ? key : parseInt(key) + 1}
                    </Table.Cell>
                    <Table.Cell>
                      {typeof value === "object" ? (
                        <img src={baseURL + value?.url} className="w-24 h-24" />
                      ) : (
                        value
                      )}
                    </Table.Cell>
                  </Table.Row>
                ))
              )}
            </Table.Body>
          </Table>
        </Modal.Body>
      </Modal>
    </div>
  );
}
