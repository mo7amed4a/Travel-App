import React, { useState } from 'react';
import { Card, FileInput, Label } from "flowbite-react";

export default function PackegeEdit() {
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
    <div className='container mx-auto'>
      <div className='flex flex-wrap justify-between gap-6 mt-9'>
  
   <section className="w-full md:w-[65%]">
          <Card className="max-w-[65rem] ">
            <form className='flex flex-col'>
              <div className='flex flex-col mb-4'>
                <label htmlFor="Title" className="mb-2">Title</label>
                <input
                  type="text"
                  id='Title'
                  className="p-2 border border-gray-300 rounded"
                />
              </div>

              <div className='flex flex-col mb-4'>
                <label htmlFor="Description" className="mb-2">Description</label>
                <textarea
                  id="Description"
                  rows="5"
                  className="p-2 border border-gray-300 rounded resize-none"
                  style={{ width: '100%', height: '200px' }}
                />
              </div>

              <div className='flex flex-col mb-4'>
                <label htmlFor="TripDuration" className=" font-bold">Trip Duration</label>
             
              </div>

              <div className='flex space-x-4 mb-4'>
                <div className='flex flex-col w-1/2'>
                  <label htmlFor="Days" className="mb-2">Days</label>
                  <input
                    type="text"
                    id='Days'
                    value={days}  
                    onChange={handleDaysChange}  
                    className="p-2 border border-gray-300 rounded"
                  />
                </div>

                <div className='flex flex-col w-1/2'>
                  <label htmlFor="Nights" className="mb-2">Nights</label>
                  <input
                    type="text"
                    id='Nights'
                    value={nights}  
                    onChange={handleNightsChange}  
                    className="p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>

              <div className='flex justify-around'>
                <div className='flex flex-col mb-4 w-1/3'>
                  <label htmlFor="Category" className="mb-2">Category</label>
                  <select id="Category" className="p-2 border border-gray-300 rounded">
                    <option value="0">Adult</option>
                    <option value="1">Child</option>
                    <option value="2">Couple</option>
                  </select>
                </div>

                <div className='flex flex-col w-1/3'>
                  <label htmlFor="Location" className="mb-2">Location</label>
                  <input
                    type="text"
                    id='Location'
                    className="p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>

              <div className='flex flex-col '>
                <label htmlFor="TripDuration" className="mb-2 font-bold">Program</label>
              </div>

              <div className='flex space-x-4 mb-4'>
                <div className='flex flex-col w-1/2'>
                  <label htmlFor="day" className="mb-2">Days</label>
                  <input
                    type="text"
                    id='day'
                    className="p-2 border border-gray-300 rounded"
                  />
                </div>

                <div className='flex flex-col w-1/2'>
                  <label htmlFor="disribution" className="mb-2">Disribution</label>
                  <input
                    type="text"
                    id='disribution'
                    className="p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
            </form>
          </Card>

         
          <div className="max-w-[65rem] flex gap-2 mt-6">
            <div className='w-1/2'>
              <div className="flex  items-center justify-center">
                <Label
                  htmlFor="dropzone-file"
                  className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                      className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <FileInput id="dropzone-file" className="hidden" />
                </Label>
              </div>
            </div>

            <div className='w-1/2'>
              <div className="flex  items-center justify-center">
                <Label
                  htmlFor="dropzone-file"
                  className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                      className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <FileInput id="dropzone-file" className="hidden" />
                </Label>
              </div>
            </div>
          </div>
        </section>

        {/* ////////////////////////////////////////////////////////////////////////////// */}












        <section className="w-full md:w-[30%] sm:flex-ro  flex flex-col space-y-9">
        <section className="flex flex-col md:flex-row md:space-x-4">
  <Card href="#" className="w-full md:max-w-[15rem] mb-6 min-h-[20rem]">
    <h3 className='font-bold'>Publish</h3>
    <div className='flex justify-between mb-2'>
      <button className='border border-gray-300 py-1 px-3 hover:bg-[#007bff] hover:text-white transition duration-300'>
        Save Draft
      </button>
      <button className='border border-gray-300 py-1 px-3 hover:bg-[#007bff] hover:text-white transition duration-300'>
        Preview
      </button>
    </div>

    <div className='flex justify-between'>
      <p><span className='font-bold'>Status:</span> Draft</p>
      <span>Edit</span>
    </div>
    <div className='flex justify-between'>
      <p><span className='font-bold'>Visibility:</span> Public</p>
      <span>Edit</span>
    </div>
    <div className='flex justify-between'>
      <p><span className='font-bold'>Visibility:</span> Public</p>
      <span>Edit</span>
    </div>

    <div className="flex justify-end">
      <button className='border border-gray-300 py-1 px-3 bg-[#007bff] text-white hover:bg-blue-600 transition duration-300'>
        Preview
      </button>
    </div>
  </Card>
</section>


{/* ///////////////////////////////////////////////////////////////////////////////////////// */}




<Card href="#" className="border rounded-lg p-4 bg-white shadow-md w-full md:max-w-[15rem]">
  {/* Popular Checkbox */}
  <div className="mb-4">
    <h2 className="font-semibold text-lg mb-2">Popular</h2>
    <div className="flex items-center space-x-2">
      <input type="checkbox" id="use-popular" className="form-checkbox h-4 w-4" />
      <label htmlFor="use-popular">Use Popular</label>
    </div>
  </div>

  {/* Keywords Input */}
  <div className="mb-4">
    <h2 className="font-semibold text-lg mb-2">Keywords</h2>
    <input
      type="text"
      placeholder="Keywords"
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
    />
  </div>

  {/* Category Checkbox */}
  <div className="mb-4">
    <h2 className="font-semibold text-lg mb-2">Category</h2>
    <div className="flex items-center space-x-2">
      <input type="checkbox" id="hotel" className="form-checkbox h-4 w-4" />
      <label htmlFor="hotel">Hotel</label>
    </div>
    <div className="flex items-center space-x-2 mt-2">
      <input type="checkbox" id="walking" className="form-checkbox h-4 w-4" />
      <label htmlFor="walking">Walking</label>
    </div>
    <a href="#" className="text-blue-500 text-sm mt-2 inline-block">Add category</a>
  </div>

  {/* Add Image */}
  <div className="mb-4">
    <h2 className="font-semibold text-lg mb-2">Add Image</h2>
    <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
      <button className="text-white bg-red-500 px-4 py-2 rounded-md">Upload an image</button>
    </div>
  </div>
</Card>


</section>

      </div>
    </div>
  );
}
