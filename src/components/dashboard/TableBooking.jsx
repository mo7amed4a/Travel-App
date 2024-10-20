import { Avatar, Badge, Checkbox, Table, Modal, Button } from "flowbite-react";
import React, { useState } from "react";
import { baseURL } from "../../lib/api/Axios";
import { deepSortObjectKeys } from "../../utils/sort";
import { formatDate, formatISODate } from "../../utils/formatDate";
import { deleteTypePackages } from "../../methods/typePackages";
import { Link } from "react-router-dom";
import EditTypeModal from "../../pages/admin/packege/EditType";

export default function TableBooking({
  setReload=null,
  title,
  description,
  Buttons,
  LinkTo = null,
  values = [
    {
      duration: {
        day: 2,
        nights: 3,
      },
      program: {
        title: "ررر",
        programItem: [
          {
            day: 1,
            description: "ررر",
            _id: "670b980e653c5c1837fe78c0",
            id: "670b980e653c5c1837fe78c0",
          },
          {
            day: 2,
            description: "رررر",
            _id: "670b980e653c5c1837fe78c1",
            id: "670b980e653c5c1837fe78c1",
          },
          {
            day: 3,
            description: "dknknjoknjo",
            _id: "670b9a3e653c5c1837fe79f1",
            id: "670b9a3e653c5c1837fe79f1",
          },
          {
            day: 4,
            description: "wekwefj",
            _id: "670b9ae7653c5c1837fe7a58",
            id: "670b9ae7653c5c1837fe7a58",
          },
        ],
        description: "رررررر",
      },
      _id: "670b980e653c5c1837fe78bf",
      title: "ررررdd",
      description: "ررر",
      location: "ررررر",
      category: "ررر",
      isPin: false,
      image: [],
      mapImages: [],
      createdAt: "2024-10-13T09:51:10.354Z",
      updatedAt: "2024-10-13T10:03:19.818Z",
      __v: 0,
      typePackages: [
        {
          _id: "670b9b52653c5c1837fe7b1a",
          name: "DAIMOND",
          pricing: [
            {
              numUser: "single",
              pricePerUser: 5000,
              _id: "670b9b52653c5c1837fe7b1b",
            },
            {
              numUser: "4 - 2",
              pricePerUser: 5000,
              _id: "670b9b52653c5c1837fe7b1c",
            },
          ],
          packageName: "670b980e653c5c1837fe78bf",
          __v: 0,
        },
      ],
      id: "670b980e653c5c1837fe78bf",
    },
    {
      duration: {
        day: 2,
        nights: 3,
      },
      program: {
        title: "خخخخخخخخخخخخخخخخخ",
        description: "خخخخخخخخخخخخخخخخ",
        programItem: [
          {
            day: 1,
            description: "خخخخخخخخخخخخخ",
            _id: "670b97e3653c5c1837fe78a9",
            id: "670b97e3653c5c1837fe78a9",
          },
        ],
      },
      _id: "670b97e3653c5c1837fe78a8",
      title: "خخخخخ",
      description: "حححححح",
      location: "خخخخخخخخخخخ",
      category: "خخخخخخخخخخخخخخخ",
      isPin: false,
      image: [],
      mapImages: [],
      createdAt: "2024-10-13T09:50:27.868Z",
      updatedAt: "2024-10-13T09:59:41.777Z",
      __v: 0,
      typePackages: [],
      id: "670b97e3653c5c1837fe78a8",
    },
    {
      duration: {
        day: 1,
        nights: 1,
      },
      program: {
        title: "ببب",
        description: "ببب",
        programItem: [
          {
            day: 1,
            description: "ببب",
            _id: "670b977c653c5c1837fe7880",
            id: "670b977c653c5c1837fe7880",
          },
        ],
      },
      _id: "670b977c653c5c1837fe787f",
      title: "بب",
      description: "ببب",
      location: "ببب",
      category: "بب",
      isPin: false,
      image: [],
      mapImages: [],
      createdAt: "2024-10-13T09:48:44.224Z",
      updatedAt: "2024-10-13T09:59:40.833Z",
      __v: 0,
      typePackages: [],
      id: "670b977c653c5c1837fe787f",
    },
    {
      duration: {
        day: 5,
        nights: 4,
      },
      program: {
        title: "Program Title",
        description: "Detailed program description",
        programItem: [
          {
            day: 1,
            description: "Arrival and orientation",
            _id: "670b8dec653c5c1837fe7827",
            id: "670b8dec653c5c1837fe7827",
          },
          {
            day: 2,
            description: "Mountain hiking",
            _id: "670b8dec653c5c1837fe7828",
            id: "670b8dec653c5c1837fe7828",
          },
          {
            day: 3,
            description: "Mountain hiking",
            _id: "670b8dec653c5c1837fe7829",
            id: "670b8dec653c5c1837fe7829",
          },
        ],
      },
      _id: "670b8dec653c5c1837fe7826",
      title: "Adventure in the Mountains",
      description: "A thrilling 5-day adventure in the mountains.",
      location: "Mountain Range",
      category: "hony moon",
      isPin: false,
      image: [],
      mapImages: [],
      createdAt: "2024-10-13T09:07:56.376Z",
      updatedAt: "2024-10-13T09:07:56.376Z",
      __v: 0,
      typePackages: [],
      id: "670b8dec653c5c1837fe7826",
    },
  ],
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [modalDataKey, setModalDataKey] = useState({});

  const [isModalOpenEditType, setIsModalOpenEditType] = useState(false);
  const [modalEditType, setModalEditType] = useState(null);


  const openModalEditType = (e) => {
    setIsModalOpenEditType(perv => !perv);
    setModalEditType(e)
  };

  const openModal = (data, key) => {
    setModalData(data);
    setModalDataKey(key);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(values);
  };

  const sortedData = deepSortObjectKeys(values);

  return (
    <div className="rounded bg-white">
      {LinkTo ? (
        <Link to={LinkTo} >
          <div className="p-4 space-y-2">
            <h1 className="text-lg font-bold">{title}</h1>
            <p className="text-sm">{description}</p>
          </div>
        </Link>
      ) : (
        <div className="p-4 space-y-2">
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>
      )}
      <div className="overflow-x-auto">
        <Table striped={true} hoverable>
          <Table.Head>
            {Object.keys(sortedData[0])
              .filter((key) => key !== "__v")
              .filter((key) => key !== "id")
              .filter((key) => key !== "_id")
              .filter((key) => key !== "updatedAt")
              .filter((key) => key !== "passwordResetToken")
              .filter((key) => key !== "passwordResetTokenExpire")
              .filter((key) => key !== "isStaff")
              .filter((key) => key !== "packageId")
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
                  .filter(([key]) => key !== "updatedAt")
                  .filter(([key]) => key !== "passwordResetToken")
                  .filter(([key]) => key !== "passwordResetTokenExpire")
                  .filter(([key]) => key !== "isStaff")
                  .filter(([key]) => key !== "packageId")
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
                      ) : key === "profilePhoto" ? (
                        <Avatar
                          className="[&>*>img]:w-8 [&>*>img]:h-8"
                          img={value?.startsWith('http') ? value : `${baseURL }${value}`}
                          alt="User Avatar"
                          rounded
                        />
                      ) : key === "content" ? (
                        <p className="text-sm line-clamp-1 w-24">{value}</p>
                      ) : (typeof value === "object" && value !== null) ||
                        key === "description" ? (
                        <Button
                          size={"xs"}
                          color={"primary"}
                          className="text-xs"
                          onClick={() => openModal(value, key)}
                        >
                          Show
                        </Button>
                      ) : key === "isPin" ? (
                        <span>
                          <svg
                            className={`${
                              value
                                ? "text-primary"
                                : "text-primary text-opacity-15"
                            } w-6 h-6`}
                            viewBox="0 0 32 32"
                            style={{
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              strokeLinejoin: "round",
                              strokeMiterlimit: 1.41421,
                            }}
                            version="1.1"
                            xmlSpace="preserve"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:serif="http://www.serif.com/"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            fill="#000000"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <rect
                                height="32"
                                id="Pin"
                                style={{ fill: "none" }}
                                width="32"
                                x="0"
                                y="0"
                              ></rect>{" "}
                              <g id="Pin1">
                                {" "}
                                <path
                                  d="M10.845,17.429c0.086,0.013 0.109,0.013 0.192,0.039c0.126,0.038 0.243,0.101 0.344,0.184c0.026,0.02 0.049,0.044 0.073,0.066l2.829,2.828c0.022,0.024 0.045,0.047 0.066,0.073c0.227,0.277 0.29,0.681 0.15,1.017c-0.037,0.091 -0.088,0.176 -0.15,0.252c-0.021,0.025 -0.044,0.048 -0.066,0.072l-6.789,6.788c-0.021,0.02 -0.042,0.041 -0.065,0.06c-0.068,0.057 -0.143,0.105 -0.224,0.142c-0.072,0.033 -0.092,0.036 -0.167,0.059l-3.818,0.99c-0.032,0.007 -0.064,0.015 -0.097,0.02c-0.358,0.056 -0.74,-0.098 -0.958,-0.393c-0.157,-0.212 -0.225,-0.488 -0.184,-0.749c0.005,-0.032 0.013,-0.064 0.02,-0.097l0.99,-3.818c0.009,-0.028 0.016,-0.057 0.026,-0.085c0.03,-0.083 0.071,-0.163 0.121,-0.235c0.045,-0.065 0.061,-0.078 0.114,-0.136l6.788,-6.788c0.065,-0.059 0.079,-0.076 0.152,-0.125c0.108,-0.073 0.232,-0.124 0.36,-0.149c0.086,-0.017 0.108,-0.015 0.195,-0.019c0.033,0.001 0.065,0.003 0.098,0.004Z"
                                  style={{ fill: "#f2f2f2" }}
                                ></path>{" "}
                                <path
                                  d="M12.868,19.132l1.415,1.414c0.022,0.024 0.045,0.047 0.066,0.073c0.227,0.277 0.29,0.681 0.15,1.017c-0.037,0.091 -0.088,0.176 -0.15,0.252c-0.021,0.025 -0.044,0.048 -0.066,0.072l-6.789,6.788c-0.021,0.02 -0.042,0.041 -0.065,0.06c-0.068,0.057 -0.143,0.105 -0.224,0.142c-0.072,0.033 -0.092,0.036 -0.167,0.059l-3.818,0.99c-0.032,0.007 -0.064,0.015 -0.097,0.02c-0.31,0.049 -0.637,-0.06 -0.861,-0.281l10.606,-10.606Z"
                                  style={{ fill: "#d9d9d9" }}
                                ></path>{" "}
                                <path
                                  d="M6.52,14.167c0.843,-0.839 1.947,-1.448 3.125,-1.721c1.22,-0.282 2.517,-0.213 3.708,0.18c0.09,0.03 0.18,0.061 0.27,0.095l6.569,-6.569c-0.298,-0.608 -0.39,-1.333 -0.231,-2.001c0.182,-0.761 0.691,-1.441 1.383,-1.824c0.409,-0.226 0.876,-0.348 1.34,-0.357c0.021,-0.001 0.043,-0.001 0.064,-0.001c0.763,0.004 1.514,0.31 2.069,0.829c0.022,0.021 0.044,0.042 0.066,0.064c1.418,1.415 2.833,2.833 4.249,4.249c0.601,0.603 0.94,1.459 0.895,2.306c-0.036,0.668 -0.308,1.32 -0.77,1.81c-0.019,0.02 -0.038,0.039 -0.057,0.058c0,0 -0.041,0.041 -0.073,0.071c-0.601,0.56 -1.45,0.833 -2.272,0.745c-0.349,-0.038 -0.691,-0.138 -1.007,-0.292l-6.569,6.569c0.356,0.95 0.513,2.01 0.422,3.048c-0.126,1.445 -0.732,2.843 -1.73,3.911c-0.031,0.034 -0.063,0.068 -0.096,0.101l-0.032,0.033l0.021,-0.024l-0.067,0.069l-0.073,0.063c-0.027,0.018 -0.052,0.038 -0.079,0.055c-0.298,0.188 -0.696,0.204 -1.01,0.034c-0.057,-0.031 -0.11,-0.067 -0.16,-0.108c-0.025,-0.02 -0.047,-0.043 -0.071,-0.064l-9.9,-9.9c-0.021,-0.023 -0.043,-0.045 -0.063,-0.07c-0.201,-0.243 -0.277,-0.585 -0.197,-0.891c0.041,-0.153 0.117,-0.295 0.223,-0.413c0.021,-0.024 0.044,-0.045 0.066,-0.068l-0.013,0.013l-0.008,0.008l0.007,-0.008l0.001,0Z"
                                  fill="currentcolor"
                                ></path>{" "}
                                <path
                                  d="M27.011,4.989c0.707,0.707 1.414,1.415 2.121,2.122c0.601,0.603 0.94,1.459 0.895,2.306c-0.036,0.668 -0.308,1.32 -0.77,1.81c-0.019,0.02 -0.038,0.039 -0.057,0.058c0,0 -0.041,0.041 -0.073,0.071c-0.601,0.56 -1.45,0.833 -2.272,0.745c-0.349,-0.038 -0.691,-0.138 -1.007,-0.292l-6.569,6.569c0.356,0.95 0.513,2.01 0.422,3.048c-0.126,1.445 -0.732,2.843 -1.73,3.911c-0.031,0.034 -0.063,0.068 -0.096,0.101l-0.032,0.033l0.021,-0.024l-0.067,0.069l-0.073,0.063c-0.027,0.018 -0.052,0.038 -0.079,0.055c-0.298,0.188 -0.696,0.204 -1.01,0.034c-0.057,-0.031 -0.11,-0.067 -0.16,-0.108c-0.025,-0.02 -0.047,-0.043 -0.071,-0.064l-4.95,-4.95l15.557,-15.557Z"
                                  fill="currentcolor"
                                ></path>{" "}
                              </g>{" "}
                            </g>
                          </svg>
                        </span>
                      ) : key === "isAdmin" ? (
                        value ? (
                          <Avatar
                            className="[&>*>img]:w-4 [&>*>img]:h-4"
                            img={"/svgs/admin.svg"}
                            alt="User Avatar"
                            rounded
                          />
                        ) : (
                          <Avatar
                            className="[&>*>img]:w-4 [&>*>img]:h-4"
                            img={"/svgs/user.svg"}
                            alt="User Avatar"
                            rounded
                          />
                        )
                      ) : key === "date" ? (
                        <span>{formatDate(value)}</span>
                      ) : key === "createdAt" ? (
                        <span>{formatISODate(value)}</span>
                      ) : key === "email" ? (
                        <a className="hover:text-primary hover:underline" href={`mailto:${value}`}>{value}</a>
                      ) : (
                        <span>{value}</span>
                      )}
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
      {LinkTo && <div className="flex justify-end p-4">
        <Button as={Link} to={LinkTo}>Show more..</Button>
      </div>}

      <Modal dismissible show={isModalOpen} onClose={closeModal}>
        <Modal.Header className="uppercase">
          {modalDataKey} details
        </Modal.Header>
        <Modal.Body>
          <Table striped={true}>
            <Table.Body>
              {modalDataKey === "typePackages" ? (
                modalData?.map((packageItem, index) => (
                  <Table.Row key={index}>
                    <Table.Cell className="font-bold">
                      {packageItem?.name}
                    </Table.Cell>
                    <Table.Cell>
                      <div>
                        {packageItem?.pricing?.map((priceItem, priceIndex) => (
                          <div key={priceIndex} className="mb-4">
                            <p>
                              <span className="font-bold">Users :</span>{" "}
                              {priceItem?.numUser}
                            </p>
                            <p>
                              <span className="font-bold">price :</span>{" "}
                              {priceItem?.pricePerUser} $
                            </p>
                          </div>
                        ))}
                      </div>
                    </Table.Cell>
                    <Table.Cell className="flex gap-x-2">
                      {modalEditType && <EditTypeModal setModalEditType={setModalEditType} isModalOpenEditType={isModalOpenEditType} setIsModalOpenEditType={setIsModalOpenEditType} closeModal={closeModal} setReload={setReload} selected={modalEditType} />}
                      <Button onClick={() => openModalEditType(packageItem)}>
                        Edit
                      </Button>
                      <Button color="failure" onClick={() => deleteTypePackages(packageItem?._id)}>
                        Delete
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))
              ) : typeof modalData === "string" ? (
                <Table.Row>
                  <Table.Cell className="font-medium">{modalData}</Table.Cell>
                </Table.Row>
              ) : (
                Object.entries(modalData).map(([key, value], index) => (
                  <Table.Row key={index}>
                    <Table.Cell className="text-primary font-bold">
                      {isNaN(key) ? key : parseInt(key) + 1}
                    </Table.Cell>
                    <Table.Cell>
                      <div className="divide-y-2 space-y-2">
                        {key === "programItem" &&
                          value.map((item, index) => (
                            <div key={index} className="flex flex-col">
                              <p>
                                <span className="font-bold text-primary">
                                  Day:{" "}
                                </span>
                                <span>{item.day}</span>
                              </p>
                              <p>
                                <span className="font-bold text-primary">
                                  Description:{" "}
                                </span>
                                <span>{item.description}</span>
                              </p>
                            </div>
                          ))}
                      </div>
                      {typeof value === "object" ? (
                        key != "programItem" && (
                          <img
                            src={baseURL + value?.url}
                            className="w-24 h-24"
                          />
                        )
                      ) : modalDataKey === "user" ? (
                        key === "isAdmin" ? (
                          <span>{value ? "Admin" : "User"}</span>
                        ) : (
                          value
                        )
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
