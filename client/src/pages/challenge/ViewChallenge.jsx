import React, { useState, useEffect } from 'react';
import AuthAxios from '../../utils/AuthAxios';
import { useNavigate, useParams } from 'react-router-dom';

const ViewChallenge = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [step, setStep] = useState(1);
    const [challengeData, setChallengeData] = useState({
        gymName: '',
        challengeName: '',
        challengeCategory: '',
        challengeTimePeriod: '',
        focusBodyParts: '',
        fitnessBenefits: '',
        explanation: '',
        challengeImage: null,
        workoutStepsImage: null,
        workoutSteps: [
            { stepNo: 1, stepName: '', stepCount: '', time: '', sets: '' }
        ],
        focus: '',
        type: '',
        participants: [], // Explicitly an empty array
        completedUsers: [],
        leaderboard: []
    });


    const [imagePreviews, setImagePreviews] = useState({
        challengeImagePreview: '',
        workoutStepsImagePreview: ''
    });

    // Fetch existing challenge data for editing
    useEffect(() => {
        if (id) {
            AuthAxios.get(`/api/challenges/${id}`)
                .then(response => {
                    setChallengeData(response.data);
                    // Set preview images if already uploaded
                    if (response.data.challengeImage) {
                        setImagePreviews(prevState => ({
                            ...prevState,
                            challengeImagePreview: response.data.challengeImage
                        }));
                    }
                    if (response.data.workoutStepsImage) {
                        setImagePreviews(prevState => ({
                            ...prevState,
                            workoutStepsImagePreview: response.data.workoutStepsImage
                        }));
                    }
                })
                .catch(error => {
                    console.error('Error fetching challenge data:', error);
                    alert('Error fetching challenge data');
                });
        }
    }, [id]);

    const nextStep = () => {
        setStep(prevStep => prevStep + 1);
    };

    const prevStep = () => {
        setStep(prevStep => prevStep - 1);
    };


    const renderStep1 = () => (
        <div>
            <div className="flex flex-col gap-8 space-y-2 w-[1016px]">
                {imagePreviews.challengeImagePreview && (
                    <img
                        src={`http://localhost:5001${imagePreviews.challengeImagePreview}`}
                        alt="Challenge Preview"
                        className="w-full h-[400px] object-cover mb-4"
                    />
                )}
                <p>{challengeData.explanation}</p>
                <button
                    onClick={nextStep}
                    className="bg-black text-white py-3 px-6 rounded-lg cursor-pointer mx-auto"
                >
                    accept challenge
                </button>
            </div>
        </div>
    );

    const renderStep2 = () => (
        <div>
            <div className="flex flex-col gap-8 space-y-2 w-[1016px]">
                {imagePreviews.workoutStepsImagePreview && (
                    <img
                        src={`http://localhost:5001${imagePreviews.workoutStepsImagePreview}`}
                        alt="Challenge Preview"
                        className="w-32 h-32 object-cover mb-4"
                    />
                )}
            </div>
        </div>
    );

    const renderStep3 = () => (
        <div>
            <div className="flex flex-col gap-8 space-y-2 w-[1016px]">
                {imagePreviews.workoutStepsImagePreview && (
                    <img
                        src={`http://localhost:5001${imagePreviews.workoutStepsImagePreview}`}
                        alt="Challenge Preview"
                        className="w-32 h-32 object-cover mb-4"
                    />
                )}
            </div>
        </div>
    );

    const renderStep4 = () => (
        <div>
            <div className="flex flex-col gap-8 space-y-2 w-[1016px]">
                {imagePreviews.workoutStepsImagePreview && (
                    <img
                        src={`http://localhost:5001${imagePreviews.workoutStepsImagePreview}`}
                        alt="Challenge Preview"
                        className="w-32 h-32 object-cover mb-4"
                    />
                )}
            </div>
        </div>
    );

    const renderStep5 = () => (
        <div>
            <div className="flex flex-col gap-8 space-y-2 w-[1016px]">
                {imagePreviews.workoutStepsImagePreview && (
                    <img
                        src={`http://localhost:5001${imagePreviews.workoutStepsImagePreview}`}
                        alt="Challenge Preview"
                        className="w-32 h-32 object-cover mb-4"
                    />
                )}
            </div>
        </div>
    );

    return (
        <div div className='flex flex-col items-center gap-5 py-10'>
            <h1 className="text-2xl font-bold">{challengeData.challengeName}</h1>
            {step === 1 ? renderStep1() : renderStep2()}
            {step !== 1 && (
                <button
                    onClick={nextStep}
                    className="bg-green-500 text-white py-3 px-6 rounded-lg cursor-pointer mx-auto"
                >
                    Next
                </button>
            )}
        </div>
    );
};

export default ViewChallenge;
