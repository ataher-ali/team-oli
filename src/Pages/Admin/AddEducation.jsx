import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddEducation = () => {
  

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (edu_data) => {
    console.log(edu_data);
    fetch("http://localhost:3000/add_education", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(edu_data),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Good job!",
          text: "Education added successfully!",
          icon: "success"
        });
        reset();  // Reset the form after successful submission
      })
      .catch((error) => {
        console.error('Error adding Education Details:', error);
        Swal.fire({
            
          title: "Sorry, try again!",

          text: "There was an error adding the member.",
          icon: "error"

        });
      });
  };

  return (
    <div className="mt-40">
      <form className="max-w-lg mx-auto p-4 space-y-6 bg-white shadow-md rounded-lg" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl font-bold my-7 text-center">Add Education</h1>
        


        <div className="flex flex-col items-center space-y-4">
          <div className="w-full max-w-md">
            <input
              placeholder="Time (June 2011 - Dec 2020)"
              {...register("time", { required: true }  )}
              
            
              className="w-full px-3 mt-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              placeholder="Institution Name"
              {...register("institution", { required: true }  )}
              
            
              className="w-full px-3 mt-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              placeholder="Degree Name"
              {...register("degree", { required: true }  )}
              
            
              className="w-full px-3 mt-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>



          <div className="w-full max-w-md space-y-2">
            <textarea
              placeholder="Details..."
              {...register("details", { required: true })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />

          </div>

      

          <button
            type="submit"
            className="px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Add Education
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEducation;
