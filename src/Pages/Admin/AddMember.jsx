import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddMember = () => {
  const [districts, setDistricts] = useState([]);
  const api = `http://localhost:3000/district`;

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setDistricts(data))
      .catch((error) => console.error('Error fetching districts:', error));
  }, [api]);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const {
      firstName,
      lastName,
      district,
      skills_category,
      ProfilePicturesURL,
      bio,
      address,
      cv_url,
      phone,
      phone2,
      email,
    } = data;
    const fullName = `${firstName} ${lastName}`
    const url =`${district}#${skills_category}#${firstName}_${lastName}`
    const member_data = {
      fullName,
      url ,
      bio,
      skills_category,
      ProfilePicturesURL,
      district,
      address,
    };

    const privet_member_data = {
      fullName,
      url ,
      bio,
      skills_category,
      ProfilePicturesURL,
      district,
      address,
      cv_url,
      phone,
      phone2,
      email,
    };

    fetch("http://localhost:3000/privet_member_data", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(privet_member_data),
    })
      .then((res) => res.json())
      .then((data) => {
        fetch("http://localhost:3000/new_member", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(member_data),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Good job!",
              text: "Member added successfully!",
              icon: "success"
            });
            reset();  // Reset the form after successful submission
          })
          .catch((error) => {
            console.error('Error adding new member:', error);
            Swal.fire({
              title: "Sorry, try again!",
              text: "There was an error adding the member.",
              icon: "error"
            });
          });
      })
      .catch((error) => {
        console.error('Error adding new member:', error);
        
      });

    
  };

  return (
    <div className="mt-40">
      <form className="max-w-lg mx-auto p-4 space-y-6 bg-white shadow-md rounded-lg" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl font-bold my-7 text-center">Add New Member</h1>
        <div className="flex p-4 gap-3 items-center">
          <div className="w-fit">
            <div className="relative w-full h-10">
              <input
                {...register("firstName", { required: true, maxLength: 20 })}
                className="w-full px-3 mt-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="w-fit">
            <div className="relative w-full min-w-[200px] h-10">
              <input
                {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
                className="w-full px-3 mt-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center m-2 gap-4 px-3">
          <select
            placeholder="district"
            {...register("district", { required: true })}
            className="block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {districts.map((dist) => (
              <option key={dist._id} value={dist.name}>
                {dist.name}
              </option>
            ))}
          </select>

          <select
            {...register("skills_category")}
            className="block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="programming_tech">Programming & Tech</option>
            <option value="graphics_design">Graphics & Design</option>
            <option value="digital_marketing">Digital Marketing</option>
            <option value="video_animation">Video & Animation</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="w-full max-w-md">
            <input
              placeholder="Email"
              {...register("email", { required: true }  )}
              
            
              className="w-full px-3 mt-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="w-full max-w-md flex space-x-2">
            <input
              placeholder="Whats App Number"
              {...register("phone", { required: true })}
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              placeholder="Others Phone"
              {...register("phone2")}
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="w-full max-w-md space-y-2">
            <textarea
              placeholder="Bio"
              {...register("bio", { required: true })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <textarea
              placeholder="Address"
              {...register("address", { required: true })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="w-full max-w-md flex space-x-2">
            <input
              placeholder="CV URL"
              {...register("cv_url", { required: true })}
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              placeholder="Profile Pictures URL"
              {...register("ProfilePicturesURL", { required: true })}
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Add Member
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMember;
