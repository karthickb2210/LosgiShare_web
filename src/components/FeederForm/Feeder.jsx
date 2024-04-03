import React, { useState } from 'react';
import NavBar from '../NavBar';

const VehicleTypes = ['Car', 'Truck', 'Van', 'Motorcycle'];
const Locations = [ "Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur",
"Pudukkottai",
"Ramanathapuram",
"Salem",
"Sivaganga",
"Thanjavur",
"Theni",
"Thoothukudi (Tuticorin)",
"Tiruchirappalli",
"Tirunelveli",
"Tiruppur",
"Tiruvallur",
"Tiruvannamalai",
"Tiruvarur",
"Vellore",
"Viluppuram",
"Virudhunagar"];
const Feeder = () => {
  const [formData, setFormData] = useState({
    source: '',
    destination: '',
    spaceAvailable: '',
    vehicleType: '',
    startTime:'',
    estimatedArrivalTime: '',
    route: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
    <NavBar />
    <div className="container mx-auto px-4 pt-24">
        <h1 className=' text-[40px]'>Feeder Form</h1>
      <form onSubmit={handleSubmit} className="mt-8 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="source" className="block text-gray-700 text-sm font-bold mb-2">
            Source
          </label>
          <select
            id="source"
            name="source"
            value={formData.source}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Source</option>
            {Locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="destination" className="block text-gray-700 text-sm font-bold mb-2">
            Destination
          </label>
          <select
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Destination</option>
            {Locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="spaceAvailable" className="block text-gray-700 text-sm font-bold mb-2">
            Space Available
          </label>
          <input
            id="spaceAvailable"
            name="spaceAvailable"
            type="text"
            value={formData.spaceAvailable}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Space Available by cubic feet.."
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="vehicleType" className="block text-gray-700 text-sm font-bold mb-2">
            Vehicle Type
          </label>
          <select
            id="vehicleType"
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Vehicle Type</option>
            {VehicleTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="estimatedArrivalTime" className="block text-gray-700 text-sm font-bold mb-2">
            Estimated Start Time
          </label>
          <input
            id="startTime"
            name="startTime"
            type="time"
            value={formData.startTime}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="estimatedArrivalTime" className="block text-gray-700 text-sm font-bold mb-2">
            Estimated Arrival Time
          </label>
          <input
            id="estimatedArrivalTime"
            name="estimatedArrivalTime"
            type="time"
            value={formData.estimatedArrivalTime}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="route" className="block text-gray-700 text-sm font-bold mb-2">
            Route
          </label>
          <select
            id="route"
            name="route"
            value={formData.route}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Route</option>
            {Locations.map((route, index) => (
              <option key={index} value={route}>
                {route}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Feeder;
