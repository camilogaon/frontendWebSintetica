import { useState } from 'react';

function VerificationModal({ isOpen, onClose }) {
    const [verificationCode, setVerificationCode] = useState('');

    if (!isOpen) return null;

    function handleClose() {
        setVerificationCode('');
        onClose();
    }

    function handleBackdropClick(event) {
        if (event.target === event.currentTarget) {
            handleClose();
        }
    }

    // Manejador para actualizar el estado verificationCode cuando el usuario escribe en el campo de entrada
    function handleVerificationCodeChange(event) {
        setVerificationCode(event.target.value);
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20">
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50" onClick={handleBackdropClick}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-md z-30">
                <div className=' items-center justify-center'>
                    <h2 className="md:text-2xl  font-bold mb-2">Ingresa el código</h2>
                </div>
                <form>
                    <div className="mb-4 mt-3">
                        <input
                            type="text"
                            placeholder="Código de verificación"
                            value={verificationCode}
                            onChange={handleVerificationCodeChange}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-3rounded-md mb-3"
                        />
                    </div>
                    <button onClick={handleClose} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default VerificationModal;
