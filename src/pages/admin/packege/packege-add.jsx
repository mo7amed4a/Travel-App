import axios from "axios";
import React, { useState } from 'react';
import { Card } from 'flowbite-react';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify'; // إضافة مكتبة إشعارات

// إعداد Axios
const Authorization = localStorage.getItem('Authorization');
export const baseURL = "http://194.164.77.238:8003";

export const Axios = axios.create({
    baseURL: baseURL + '/api/v1',
    headers: {
        Authorization: `Bearer ${Authorization}`

    }
  });
  
          // Schema للتحقق من صحة النموذج 
const PackageSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    duration: Yup.object().shape({
      day: Yup.number().required('Day is required').min(1),
      nights: Yup.number().required('Nights are required').min(1),
    }),
    location: Yup.string().required('Location is required'),
    category: Yup.string().required('Category is required'),
    program: Yup.object().shape({
        title: Yup.string().required('Program title is required'),
        description: Yup.string().required('Program description is required'),
        programItem: Yup.array().of(
            Yup.object().shape({
                day: Yup.number().required('Day is required').min(1),
                description: Yup.string().required('Program item description is required'),
            })
        ).required('At least one program item is required'),
    }),
});

export default function PackageEdit() {
    const [days, setDays] = useState(1); // تغيير القيمة الافتراضية
    const [nights, setNights] = useState(1); // تغيير القيمة الافتراضية

    const handleDaysChange = (e) => {
        const daysValue = parseInt(e.target.value, 10) || 0;
        setDays(daysValue);
    };

    const handleNightsChange = (e) => {
        const nightsValue = parseInt(e.target.value, 10) || 0;
        setNights(nightsValue);
    };

    async function addPackage(values, { resetForm }) {
        const packageData = {
            title: values.title,
            description: values.description,
            duration: {
                day: days, 
                nights: nights,
            },
            location: values.location,
            category: values.category,
            program: {
                title: values.program.title,
                description: values.program.description,
                programItem: values.program.programItem,
            },
        };

        try {
            const response = await Axios.post('/package', packageData);
            console.log(response.data);
            toast.success("Package created successfully!");
            resetForm();
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
            toast.error("Failed to create package.");
        }
    }

    return (
        <div className="container mx-auto mb-5">
            <Formik
                initialValues={{
                    title: '',
                    description: '',
                    duration: {
                      day: 1,
                      nights: 1,
                    },
                    location: '',
                    category: '',
                    program: {
                        title: '',
                        description: '',
                        programItem: [{ day: 1, description: '' }],
                    },
                }}
                validationSchema={PackageSchema}
                onSubmit={addPackage}
            >
                {({ values, errors, touched }) => (
                    <Form className="grid lg:grid-cols-6 gap-6 mt-9">
                        <section className="w-full lg:col-span-4">
                            <Card>
                                <div className="flex flex-col">
                                    {/* الحقول المختلفة */}
                                    <div className="flex flex-col mb-4">
                                        <label htmlFor="title" className="mb-2">Title</label>
                                        <Field type="text" name="title" className="p-2 border border-gray-300 rounded" />
                                        {errors.title && touched.title && (
                                            <div className="text-red-500 text-sm">{errors.title}</div>
                                        )}
                                    </div>

                                    <div className="flex flex-col mb-4">
                                        <label htmlFor="description" className="mb-2">Description</label>
                                        <Field as="textarea" name="description" rows="5" className="p-2 border border-gray-300 rounded resize-none" />
                                        {errors.description && touched.description && (
                                            <div className="text-red-500 text-sm">{errors.description}</div>
                                        )}
                                    </div>

                                    <div className="flex space-x-4 mb-4">
                                        <div className="flex flex-col w-1/2">
                                            <label htmlFor="days" className="mb-2">Days</label>
                                            <Field type="number" name="days" value={days} onChange={handleDaysChange} className="p-2 border border-gray-300 rounded" />
                                            {errors.days && touched.days && (
                                                <div className="text-red-500 text-sm">{errors.days}</div>
                                            )}
                                        </div>

                                        <div className="flex flex-col w-1/2">
                                            <label htmlFor="nights" className="mb-2">Nights</label>
                                            <Field type="number" name="nights" value={nights} onChange={handleNightsChange} className="p-2 border border-gray-300 rounded" />
                                            {errors.nights && touched.nights && (
                                                <div className="text-red-500 text-sm">{errors.nights}</div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex flex-col mb-4">
                                        <label htmlFor="location" className="mb-2">Location</label>
                                        <Field type="text" name="location" className="p-2 border border-gray-300 rounded" />
                                        {errors.location && touched.location && (
                                            <div className="text-red-500 text-sm">{errors.location}</div>
                                        )}
                                    </div>

                                    <div className="flex flex-col mb-4">
                                        <label htmlFor="category" className="mb-2">Category</label>
                                        <Field type="text" name="category" className="p-2 border border-gray-300 rounded" />
                                        {errors.category && touched.category && (
                                            <div className="text-red-500 text-sm">{errors.category}</div>
                                        )}
                                    </div>

                                    <div className="flex flex-col mb-4">
                                        <label htmlFor="program.title" className="mb-2">Program Title</label>
                                        <Field type="text" name="program.title" className="p-2 border border-gray-300 rounded" />
                                        {errors.program?.title && touched.program?.title && (
                                            <div className="text-red-500 text-sm">{errors.program.title}</div>
                                        )}
                                    </div>

                                    <div className="flex flex-col mb-4">
                                        <label htmlFor="program.description" className="mb-2">Program Description</label>
                                        <Field as="textarea" name="program.description" rows="3" className="p-2 border border-gray-300 rounded resize-none" />
                                        {errors.program?.description && touched.program?.description && (
                                            <div className="text-red-500 text-sm">{errors.program.description}</div>
                                        )}
                                    </div>

                                    <FieldArray
                                        name="program.programItem"
                                        render={(arrayHelpers) => (
                                            <div>
                                                <label className="mb-2">Program Items</label>
                                                {values.program.programItem && values.program.programItem.length > 0 ? (
                                                    values.program.programItem.map((item, index) => (
                                                        <div key={index} className="flex space-x-4 mb-2">
                                                            <div className="w-1/2">
                                                                <Field
                                                                    type="number"
                                                                    name={`program.programItem.${index}.day`}
                                                                    placeholder={`Day ${index + 1}`}
                                                                    className="p-2 border border-gray-300 rounded"
                                                                />
                                                                {errors.program?.programItem?.[index]?.day && touched.program?.programItem?.[index]?.day && (
                                                                    <div className="text-red-500 text-sm">
                                                                        {errors.program.programItem[index].day}
                                                                    </div>
                                                                )}
                                                            </div>

                                                            <div className="w-full">
                                                                <Field
                                                                    type="text"
                                                                    name={`program.programItem.${index}.description`}
                                                                    placeholder="Program description"
                                                                    className="p-2 border border-gray-300 rounded"
                                                                />
                                                                {errors.program?.programItem?.[index]?.description && touched.program?.programItem?.[index]?.description && (
                                                                    <div className="text-red-500 text-sm">
                                                                        {errors.program.programItem[index].description}
                                                                    </div>
                                                                )}
                                                            </div>

                                                            <button
                                                                type="button"
                                                                onClick={() => arrayHelpers.remove(index)}
                                                                className="text-red-500 hover:text-red-700"
                                                            >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    ))
                                                ) : null}

                                                <button
                                                    type="button"
                                                      onClick={() => arrayHelpers.push({ day: 1, description: '' })}
                                                      className="mt-2 text-blue-500 hover:text-blue-700"
                                                  >
                                                      Add Program Item
                                                  </button>
                                              </div>
                                          )}
                                      />
  
                                      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">Submit</button>
                                  </div>
                              </Card>
                          </section>
                      </Form>
                  )}
              </Formik>
          </div>
      );
  }
  