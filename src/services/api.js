// Por ejemplo, en tu archivo donde realizas la consulta a la API
import { apiUrl } from './apiConfig';

// Función para hacer la consulta a la API
export async function fetchFields() {
    try {
        const response = await fetch(`${apiUrl}/fields`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


///Login user validacion///
export const checkPhoneNumberExists = async (phoneNumber) => {
    try {
        const response = await fetch(`${apiUrl}/auth/check-phone-number`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phoneNumber: `+57${phoneNumber}` })
        });
        const data = await response.json();
        return data.exists;
    } catch (error) {
        console.error('Error checking phone number:', error);
        return false;
    }
};

export const sendVerification = async (phoneNumber) => {
    try {
        const response = await fetch(`${apiUrl}/auth/send-verification`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phoneNumber: `+57${phoneNumber}` })
        });
        return response.ok;
    } catch (error) {
        console.error('Error sending verification:', error);
        return false;
    }
};

export const registerUser = async ({ phoneNumber, verificationCode, name, lastName, email }) => {
    try {
        const response = await fetch(`${apiUrl}/autrh/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phoneNumber: `+57${phoneNumber}`, verificationCode, name, lastName, email })
        });
        const data = await response.json();
        return { success: response.ok, message: data.message };
    } catch (error) {
        console.error('Error registering user:', error);
        return { success: false, message: 'An error occurred while registering the user.' };
    }
};