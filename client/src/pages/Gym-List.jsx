import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';
import TopNav from '../components/TopNav';

const GymList = () => {
  const [gyms, setGyms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGyms = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/gyms');
        setGyms(response.data);
      } catch (error) {
        console.error('Error fetching gyms:', error);
      }
    };
    fetchGyms();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`text-xl ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
      );
    }
    return stars;
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this gym?")) {
      try {
        await axios.delete(`http://localhost:5000/api/gyms/${id}`);
        setGyms(gyms.filter(gym => gym._id !== id));
      } catch (error) {
        console.error("Error deleting gym:", error);
      }
    }
  };

  return (
    <>
      <TopNav />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center mb-4">Gym List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Gym Name</th>
                <th className="py-3 px-6 text-left">Location</th>
                <th className="py-3 px-6 text-center">Ratings</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {gyms.length > 0 ? (
                gyms.map((gym) => (
                  <tr key={gym._id} className="border-b hover:bg-gray-100">
                    <td className="py-3 px-6">{gym.name}</td>
                    <td className="py-3 px-6">{gym.location}</td>
                    <td className="py-3 px-6 text-center">{renderStars(gym.ratings)}</td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex justify-center space-x-3">
                        <button onClick={() => navigate(`/gym-view/${gym._id}`)} className="text-black hover:text-gray-700">
                          <FaEye size={20} />
                        </button>
                        <button onClick={() => navigate(`/gym-update/${gym._id}`)} className="text-black hover:text-gray-700">
                          <FaPen size={20} />
                        </button>
                        <button onClick={() => handleDelete(gym._id)} className="text-black hover:text-gray-700">
                          <FaTrash size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4">No gyms found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default GymList;