import { useState } from 'react';
import { checkPhoneNumberExists, sendVerification, registerUser } from '../services/api';


function Modal({ isOpen, onClose }) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [verificationSent, setVerificationSent] = useState(false);
    const [verificationInProgress, setVerificationInProgress] = useState(false);
    const [phoneNumberExists, setPhoneNumberExists] = useState(false);


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

    if (!isOpen) return null;

    function handleClose() {
        setPhoneNumber('');
        onClose();
    }

    function handleBackdropClick(event) {
        if (event.target === event.currentTarget) {
            handleClose();
        }
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full sm:w-[90%] flex items-center justify-center z-20">
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50" onClick={handleBackdropClick}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-md z-30">
                <div className=' items-center justify-center'>
                    <h2 className="md:text-2xl  font-bold mb-2 ">Para iniciar sesion o registrarte <br></br>brindanos tu numero de telefono</h2>
                    <h5 className="text-[15px] mb-4 ">Enviaremos un SMS a tu celular</h5>
                </div>
                <form>
                    <div className="mb-4 mt-3">
                        <input
                            type="text"
                            placeholder="Numero de telefono"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-3 rounded-md mb-3"
                        />
                    </div>
                    <button
                        onClick={handleSendVerification}
                        disabled={verificationInProgress}
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:texdisabled:opacity-50"
                    >
                        {verificationInProgress ? 'Enviando codigo...' : 'Siguiente'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Modal;
