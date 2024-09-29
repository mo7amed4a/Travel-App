import { Avatar, Badge, Checkbox, Table } from "flowbite-react";
import React from "react";

export default function TableBooking({
  title,
  description,
  values = [
    {
      select: true,
      avatar: "/images/comment4.jpg",
      name: "John Doe",
      date: "12 may",
      city: "Japan",
      enquiry: "15",
    },
    {
      select: true,
      avatar: "/images/comment4.jpg",
      name: "John Doe",
      date: "12 may",
      city: "Japan",
      enquiry: "15",
    },
    {
      select: true,
      avatar: "/images/comment4.jpg",
      name: "John Doe",
      date: "12 may",
      city: "Japan",
      enquiry: "15",
    },
  ],
}) {
  return (
    <div className="rounded bg-white">
      <div className="p-4 space-y-2">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
      <div className="overflow-x-auto">
        <Table striped={true} hoverable>
          <Table.Head>
            {/* عرض العناوين من أول عنصر في المصفوفة */}
            {Object.keys(values[0]).map((key, index) => (
              <Table.HeadCell key={index}>{key}</Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body>
            {/* التنقل عبر كل عنصر في المصفوفة */}
            {values.map((item, rowIndex) => (
              <Table.Row key={rowIndex}>
                {Object.entries(item).map(([key, value], index) => (
                  <Table.Cell key={index} className={`${(key === "avatar" || key === "select") && "w-16"}`}>
                    {/* عرض Checkbox إذا كانت قيمة select تساوي true */}
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
                    ) : (
                      <span>{value}</span>
                    )}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
