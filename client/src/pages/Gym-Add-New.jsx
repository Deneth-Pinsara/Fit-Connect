import React from 'react'
import { useState } from "react";
import toast from 'react-simple-toasts';
import AuthAxios from '../utils/AuthAxios';
import TopNav from '../components/TopNav';

export default function GymAddNew() {
  const [formData, setFormData] = useState({
    gymName: "Gym 24@@7",
    location: "123 Main Street, Los Angeles, CA",
    phone: "07835665578",
    email: "contact@fitzone.com",
    fees: 5000,
    services: {
      strengthTraining: true,
      cardioMachines: true,
      freeWeights: true,
      personalTraining: false,
      groupFitness: false,
      lockerRooms: false,
      parking: false,
    },
    photos: [],
  });

  const handleCheckboxChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: { ...prev.services, [service]: !prev.services[service] },
    }));
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length + formData.photos.length > 3) {
      alert("You can only upload up to 3 images.");
      return;
    }
    setFormData((prev) => ({
      ...prev,
      photos: [...prev.photos, ...files],
    }));
  };

  const handleSubmit = async () => {
    try {
      const data = new FormData();
      data.append("gymName", formData.gymName);
      data.append("location", formData.location);
      data.append("phone", formData.phone);
      data.append("email", formData.email);
      data.append("fees", formData.fees);
      // Object.entries(formData.services).forEach(([key, value]) => {
      //   data.append(key, value);
      // });
      data.append("services", JSON.stringify(formData.services));
      formData.photos.forEach((file, index) => {
        data.append(`photo${index + 1}`, file);
      });
      console.log("FormData submitted");

      // name, location, services, pricing 
      console.log(data);
      const resp = await AuthAxios.post("/api/gyms/create", data);

      console.log(resp);
    } catch (error) {
      toast(error?.response?.data?.message || "Something went wrong")
    }
  };

  const handleValueChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
    <TopNav/>
    <div className="max-w-lg mx-auto bg-amber-50 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">GYM Details</h2>
      <div className="space-y-3 flex flex-col">
        <label htmlFor="gymName">Gym name</label>
        <input label="Gym Name" className='bg-yellow-100 p-2 rounded-xl' onChange={handleValueChange} name="gymName" value={formData.gymName} />
        <label htmlFor="location">Location</label>
        <input label="Gym Location" className='bg-yellow-100 p-2 rounded-xl' onChange={handleValueChange} name="location" value={formData.location} />
        <label htmlFor="phone">Phone Number</label>
        <input label="Phone Number" className='bg-yellow-100 p-2 rounded-xl' onChange={handleValueChange} name="phone" value={formData.phone} />
        <label htmlFor="email">Email</label>
        <input label="Email" className='bg-yellow-100 p-2 rounded-xl' onChange={handleValueChange} name="email" value={formData.email}  />
        <label htmlFor="fees">Membership Fees</label>
        <input label="Membership Fees" className='bg-yellow-100 p-2 rounded-xl' onChange={handleValueChange} name="fees" value={formData.fees} />
      </div>
      <h3 className="mt-4 font-medium">Facilities & Services</h3>
      <div className="bg-gray-200 p-3 rounded-lg mt-2">
        {Object.entries(formData.services).map(([key, value]) => (
          <div key={key} className="flex items-center space-x-2">
            <input type="checkbox" checked={value} onCheckedChange={() => handleCheckboxChange(key)} />
            <span className="capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
          </div>
        ))}
      </div>
      <h3 className="mt-4 font-medium">Upload Photos (Max 3)</h3>
      <div className="mt-2 border p-4 rounded-lg flex flex-col items-center">
        <input type="file" accept="image/*" multiple onChange={handleFileChange} className="mb-2" />
        <div className="flex space-x-2">
          {formData.photos.map((file, index) => (
            <img key={index} src={URL.createObjectURL(file)} alt="preview" className="w-16 h-16 object-cover rounded" />
          ))}
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between mt-4 gap-3">
        <button variant="secondary" className='bg-gray-200 p-2 text-black'>Cancel</button>
        <button onClick={handleSubmit} className='bg-gray-500 p-2 text-white'>Save</button>
      </div>
    </div>
    </>
  );
}