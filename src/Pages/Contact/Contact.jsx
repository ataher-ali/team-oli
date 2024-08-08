import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
      };
    
      const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
        } else {
          console.log('Form data submitted:', formData);
          // Here you would typically send the form data to your server
          setFormData({ name: '', email: '', message: '' });
          setErrors({});
        }
      };
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-5">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-5xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-2"><strong>Address : </strong> Abhawa Office Road, Purba Babukha, Rangpur-5400 </p>
            <p className="text-gray-700 mb-2"><strong>Email : </strong>  saholiullah1995@gmail.com</p>
            <p className="text-gray-700 mb-2"><strong>Phone : </strong> +8801521-304671</p>
            <div className="mt-8 text-center">
             
            </div>
          </div>

          <form className="bg-gray-50 p-6 rounded-lg shadow-inner" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea 
                id="message" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Your Message" 
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
            </div>

            <div className="flex items-center justify-center">
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Contact;