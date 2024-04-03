import React from "react";
import { useState } from "react";
function SearchBar() {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search logic here using formData
    console.log('Search terms:', formData);
  };
    return (
      <div className=" my-[60px]  flex justify-center items-center border h-[200px] rounded-md shadow-inner w-full">
      <form className="flex flex-col md:flex-row md:items-center gap-3 w-full mx-[40px] " onSubmit={handleSubmit}>
        <div className=" border w-full md:w-1/3 rounded-md shadow-sm bg-white px-3 py-2 flex items-center border-black">
          <span className="text-slate-700 mr-2">Origin:</span>
          <input
            type="text"
            name="field1"
            placeholder="Enter The city.."
            className="flex-grow focus:outline-none focus:ring-1 focus:ring-blue-500 h-[40px] rounded-md"
            value={formData.field1}
            onChange={handleChange}
          />
        </div>
        <div className="border border-black w-full md:w-1/3 rounded-md shadow-sm bg-white px-3 py-2 flex items-center">
          <span className=" text-slate-700 mr-2">Destination:</span>
          <input
            type="text"
            name="field2"
            placeholder="Enter the destination..."
            className="flex-grow focus:outline-none focus:ring-1 focus:ring-blue-500  h-[40px] rounded-md"
            value={formData.field2}
            onChange={handleChange}
          />
        </div>
        <div className="border border-black w-full md:w-1/3 rounded-md shadow-sm bg-white px-3 py-2 flex items-center">
          <span className="text-slate-700 mr-2">Weight :</span>
          <input
            type="text"
            name="field3"
            placeholder="In Kgs..."
            className="flex-grow focus:outline-none focus:ring-1 focus:ring-blue-500  h-[40px] rounded-md"
            value={formData.field3}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-orange-600 w-[200px] flex justify-center items-center  hover:bg-orange-500 text-white font-bold px-[20px] py-[20px] rounded-md focus:outline-none "
        >
          Check Price
        </button>
      </form>
      </div>
    );
}

export default SearchBar;
