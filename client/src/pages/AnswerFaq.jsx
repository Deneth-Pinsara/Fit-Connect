import React, { useEffect, useState } from 'react';
import TopNav from '../components/TopNav';
import { useNavigate, useParams } from 'react-router-dom';
import AuthAxios from '../utils/AuthAxios';
import toast from 'react-simple-toasts';

const AnswerFaq = () => {
    const navigate = useNavigate();
    const params = useParams();
    const isAnswer = true
    const [isEditing, setIsEditing] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [q, setQ] = useState({
        title: "What are your gym’s operating hours?",
        description: "Our gym is open during the week from around 6:00 AM to 10:00 PM."
    });

    const handleChange = (e) => {
        setQ({
            ...q,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = async () => {
        try {
            if (!isEditing && !isAnswer) {
                setIsEditing(true);
                return;
            }

            if(!q.description){
                toast("Please enter answer");
                return
            }
            const rep = await AuthAxios.patch(`/discussion/${q._id}`, {
                title: q?.title,
                description: q?.description
            });
            console.log(rep);
            setIsEditing(false);
            setRefresh(!refresh);
            toast("Question Updated Successfully");
        } catch (error) {
            console.log(error);
            setIsEditing(false);
        }
    };

    const getMyq = async () => {
        try {
            const rep = await AuthAxios.get(`/discussion/${params.id}`);
            console.log(rep);
            setQ(rep.data?.data?.discussion);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMyq();
    }, [refresh]);

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <TopNav />

            <div className="max-w-4xl mx-auto p-6">
                <button className="bg-gray-500 text-white px-6 py-3 rounded-2xl mt-6 w-full md:w-auto text-center font-semibold">View Question</button>

                <div className="w-full md:w-3/4 mx-auto px-4 py-8 bg-white shadow-lg rounded-lg mt-10">
                    <h5 className="text-lg font-semibold mb-4">Submitted Question:</h5>
                    <input disabled={true} name='title' className='text-xl bg-gray-200 p-3 font-semibold w-full rounded-lg' onChange={handleChange} value={q?.title}></input>
                    <h5 className='text-lg font-semibold mt-5'>Answer:</h5>
                    <input name='description' className='text-lg font-semibold mt-3 bg-gray-200 p-3 w-full rounded-lg' onChange={handleChange} value={q?.description}></input>
                </div>

                <div className="flex justify-center gap-4 mt-10">
                    <button className='bg-gray-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-gray-600 transition-all' onClick={handleSave}>Submit Answer</button>
                </div>
            </div>
        </div>
    );
};

export default AnswerFaq;