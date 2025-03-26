import React, { useEffect, useState } from 'react'
import TopNav from '../components/TopNav'
import { useNavigate, useParams } from 'react-router-dom'
import AuthAxios from '../utils/AuthAxios'

const SingleFaq = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [isEditing, setIsEditing] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [q, setQ] = useState({
        title: "What are your gym’s operating hours?",
        description: "Our gym is open during the week from around 6:00 AM to 10:00 PM"
    })

    const handleCHange = (e) => {
        setQ({
            ...q,
            [e.target.name]: e.target.value
        })
    }

    const handleDelete = async () => {
        try {
            const rep = await AuthAxios.delete(`/discussion/${q._id}`)
            console.log(rep)
            alert("Question Deleted Successfully")
            navigate("/myfaq")
        } catch (error) {
            console.log(error)
        }
    }

    const handleSave = async () => {
        try {
            if (!isEditing) {
                setIsEditing(true)
                return
            }
            const rep = await AuthAxios.patch(`/discussion/${q._id}`, {
                title: q.title,
                description: q.description
            })
            console.log(rep)
            setIsEditing(false)
            setRefresh(!refresh)
            alert("Question Updated Successfully")
        } catch (error) {
            console.log(error)
            setIsEditing(false)
        }
    }

    const getMyq = async () => {
        try {
            const rep = await AuthAxios.get(`/discussion/${params.id}`)
            console.log(rep)
            setQ(rep.data?.data?.discussion)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMyq()
    },[refresh])
    return (
        <div>
            <TopNav />

            <button className='bg-gray-200 px-4 py-3 rounded-2xl mt-10 ml-10'>View Question</button>

            <div className=' w-3/4 md:w-1/2 mx-auto px-3 py-10 bg-gray-400 mt-10'>
                <h5 className='text-lg font-semibold'>Submitted Questions:</h5>
                <input disabled={!isEditing} name='title' className='text-xl bg-gray-200 p-3 font-semibold mt-10 w-full' onChange={handleCHange} value={q.title}></input>
                <h5 className='text-lg font-semibold mt-5'>Answer:</h5>
                <input disabled={!isEditing} name='description' className='text-lg font-semibold mt-10 bg-gray-200 p-3 w-full' onChange={handleCHange} value={q.description}></input>
            </div>

            <div>
                <button className='bg-gray-200 px-4 py-3 rounded-2xl mt-10 ml-10' onClick={handleSave}>{isEditing ? "Save" : "Edit"}</button>
                <button className='bg-gray-200 px-4 py-3 rounded-2xl mt-10 ml-10' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default SingleFaq