import React, { useState } from 'react'
import AuthAxios from '../utils/AuthAxios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-simple-toasts';



const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
   try {
    const resp = await AuthAxios.post("api/users/login", {
        email,
        password
    })

    console.log(resp)
    localStorage.setItem("auth_token", resp.data.data.token)
    
    navigate("/challenges")
   } catch (error) {
    console.log(error)
    toast(error?.response?.data?.message || "Something went wrong")
   }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full md:w-1/2 mx-auto mt-20">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="border p-2"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Home;
