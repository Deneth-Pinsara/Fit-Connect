import React, { useState } from 'react'
import TopNav from '../components/TopNav'
import { useNavigate } from 'react-router-dom'

const sampleQ = [
    {
        title: "What are your gym’s operating hours?",
        description: "Our gym is open during the week from around 6:00 AM to 10:00 PM"
    },
    {
        title: "Do I need a membership to use the gym?",
        description: "Yes, a membership is required, but we also offer day passes."
    },
    {
        title: "Do you have locker rooms and showers?",
        description: "Yes, we provide locker rooms, showers, and changing areas."
    }
]

const CommonFaq = () => {
    const [faqs, setFaqs] = useState(sampleQ)
    const navigate = useNavigate()
    return (
        <div>
            <TopNav />
            <button className='bg-gray-200 px-4 py-3 rounded-2xl mt-10 ml-10'>See More</button>
            <h2 className='text-2xl font-semibold mt-10 ml-10'>Common Questions</h2>

            {
                faqs.map((faq, index) => {
                    return (
                        <div key={index}>
                            <h3 className='text-lg font-semibold mt-10 ml-10 bg-gray-200 px-4 py-3 rounded-2xl'>Q : {faq.title}</h3>
                            <p className='text-lg font-semibold mt-10 ml-10 bg-gray-200 px-4 py-3 rounded-2xl'>A :{faq.description}</p>
                        </div>
                    )
                })
            }

            <button className='bg-gray-200 px-4 py-3 rounded-2xl mt-10 ml-10' onClick={()=>navigate("/myfaq")}>My Questions</button>
            <button className='bg-gray-200 px-4 py-3 rounded-2xl mt-10 ml-10' onClick={()=>navigate("/askfaq")}>Ask a Question</button>

        </div>
    )
}

export default CommonFaq