import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkPhoneNumberExists, sendVerification, registerUser } from '../services/api';

const AuthComponent = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [verificationSent, setVerificationSent] = useState(false);
    const [verificationInProgress, setVerificationInProgress] = useState(false);
    const [registrationInProgress, setRegistrationInProgress] = useState(false);
    const [registrationError, setRegistrationError] = useState('');
    const [phoneNumberExists, setPhoneNumberExists] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleSendVerification = async () => {
        setVerificationInProgress(true);
        try {
            const success = await sendVerification(phoneNumber);
            if (success) {
                setVerificationSent(true);
                const exists = await checkPhoneNumberExists(phoneNumber);
                setPhoneNumberExists(exists);
            }
        } catch (error) {
            console.error('Error sending verification:', error);
        }
        setVerificationInProgress(false);
    };

    const handleRegister = async () => {
        setRegistrationInProgress(true);
        try {
            const { success, message } = await registerUser({ phoneNumber, verificationCode, name, lastName, email });
            if (success) {
                navigate('/field');
            } else {
                setRegistrationError(message);
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
        setRegistrationInProgress(false);
    };

    const handleVerificationError = () => {
        // Aquí puedes mostrar una alerta o un mensaje de error
        alert('Invalid verification code. Please try again.');
    };

    const showRegistrationFields = verificationSent && !phoneNumberExists && !registrationError;

    const closeModal = () => setShowModal(false);

    return (
        <div className="flex justify-center items-center h-screen">
            <button
                onClick={() => setShowModal(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Open Modal
            </button>

            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Authentication</h3>
                            </div>
                            <div className="border-t border-gray-200">
                                <div className="px-4 py-5 sm:p-6">
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md mb-3"
                                    />
                                    {!verificationSent ? (
                                        <button
                                            onClick={handleSendVerification}
                                            disabled={verificationInProgress}
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm disabled:opacity-50"
                                        >
                                            {verificationInProgress ? 'Sending Verification...' : 'Send Verification Code'}
                                        </button>
                                    ) : (
                                        <>
                                            <input
                                                type="text"
                                                placeholder="Verification Code"
                                                value={verificationCode}
                                                onChange={(e) => setVerificationCode(e.target.value)}
                                                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md mb-3"
                                            />
                                            {showRegistrationFields && (
                                                <>
                                                    <input
                                                        type="text"
                                                        placeholder="Name"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md mb-3"
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="Last Name"
                                                        value={lastName}
                                                        onChange={(e) => setLastName(e.target.value)}
                                                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md mb-3"
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="Email (optional)"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md mb-3"
                                                    />
                                                    <button
                                                        onClick={handleRegister}
                                                        disabled={registrationInProgress}
                                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm disabled:opacity-50"
                                                    >
                                                        {registrationInProgress ? 'Registering...' : 'Register'}
                                                    </button>
                                                    {registrationError && (
                                                        <p className="mt-2 text-sm text-red-600" id="email-error">
                                                            {registrationError}
                                                        </p>
                                                    )}
                                                </>
                                            )}
                                            {phoneNumberExists && (
                                                <p className="mt-2 text-sm text-red-600" id="email-error">
                                                    This phone number is already registered.
                                                </p>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        );
};

export default AuthComponent;
