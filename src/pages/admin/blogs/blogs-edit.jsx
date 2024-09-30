import React, { useState } from "react";
import { Button, Card, FileInput, Label } from "flowbite-react";

export default function BlogsEdit() {
  const [days, setDays] = useState(0);
  const [nights, setNights] = useState(0);
  const [tripDuration, setTripDuration] = useState(0);

  const handleDaysChange = (e) => {
    const daysValue = parseInt(e.target.value, 10) || 0;
    setDays(daysValue);
    setTripDuration(daysValue + nights);
  };

  const handleNightsChange = (e) => {
    const nightsValue = parseInt(e.target.value, 10) || 0;
    setNights(nightsValue);
    setTripDuration(days + nightsValue);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between gap-6 my-10">
        <section className="w-full">
          <div className="flex flex-col gap-4 my-5">
            <div >
              <div>
                <Label htmlFor="file-upload-helper-text" value="Upload Image blog" />
              </div>
              <div className="flex w-full gap-x-5">
              <FileInput
                id="file-upload-helper-text"
                helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
              />
                <Button>Update Image</Button>
              </div>
            </div>
          </div>
          <Card className="w-full ">
            <form className="flex flex-col">
              <div className="flex flex-col mb-4">
                <label htmlFor="Title" className="mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="Title"
                  className="p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="Description" className="mb-2">
                  Description
                </label>
                <textarea
                  id="Description"
                  rows="5"
                  className="p-2 border border-gray-300 rounded resize-none"
                  style={{ width: "100%", height: "200px" }}
                />
              </div>

              <Button >Update</Button>
            </form>
          </Card>
        </section>
      </div>
    </div>
  );
}
