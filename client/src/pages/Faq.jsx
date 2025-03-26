import React from 'react'
import TopNav from '../components/TopNav'
import imageB from '../assets/image 84.png'
import { useNavigate } from 'react-router-dom'

const Faq = () => {
    const navigate = useNavigate()
  return (
    <div>
        <TopNav/>

        <div>
            <button className='bg-gray-200 px-4 py-3 rounded-2xl mt-10 ml-10'>FAQ Page</button>
            <p className='text-lg font-semibold mt-10 ml-10'>Welcome to Our Gym's FAQ Page!</p>
        </div>
        <img src={imageB} alt="imageB" className='mt-10' />

        <h2 className='text-2xl font-semibold mt-10 ml-10'>Introduction</h2>

        <p className='text-lg font-semibold mt-10 ml-10'>We know you might have some questions before starting your fitness journey with
        us. Here, you'll find answers to the most common inquiries about memberships, facilities, classes, personal training, and more.</p>

        <button onClick={()=>navigate("/commonfaq")} className='bg-gray-200 px-4 py-3 rounded-2xl mt-10 ml-10 text-center mx-auto block'>See More</button>
    </div>
  )
}

export default Faq