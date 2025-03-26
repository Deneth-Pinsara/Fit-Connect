import React, { useEffect, useState } from 'react'
import TopNav from '../components/TopNav'
import myQimage from '../assets/my.png'
import AuthAxios from '../utils/AuthAxios'
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

const MyFaq = () => {
    const [myq, setMyq] = useState(sampleQ)
    const navigate = useNavigate()

    const getMyq = async () => {
        try {
            const rep = await AuthAxios.get("/discussion/")
            console.log(rep)
            setMyq(rep.data?.data?.discussions)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMyq()
    }, [])
    return (
        <div>
            <TopNav />

            <button className='bg-gray-200 px-4 py-3 rounded-2xl mt-10 ml-10'>My Question</button>

            <img src={myQimage} alt="myQimage" className='mt-10 w-full md:w-1/2' />

            <div className='text-center w-3/4 md:w-1/2 mx-auto p-10 bg-gray-400 mt-10'>
                <h2>Submitted Questions</h2>

                {
                    myq.map((item, index) => {
                        return (
                            <div key={index} className='flex bg-gray-200 justify-between py-3 items-center my-5'>
                                <h3 className='text-lg font-semibold ml-10  px-4 rounded-2xl'>Q : {item.title}</h3>

                                <button onClick={()=>navigate(`/faq/${item._id}`)} className=' px-4 rounded-2xl ml-10'>View</button>
                            </div>
                        )
                    })
                }
            </div>

            <button className='bg-gray-200 px-4 py-3 rounded-2xl mt-10 ml-10' onClick={()=>navigate("/commonfaq")}>Back</button>

        </div>
    )
}

export default MyFaq