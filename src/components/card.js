import React, {useEffect, useState} from 'react';
import { fetchFields } from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function FieldsPage() {
    const [fields, setFields] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const data = await fetchFields();
            setFields(data);
        } catch (error) {
            console.error('Error fetching data:',error);
        }
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 '>
        {fields.map((field,index)  =>(

            
        <div key={index} className=" justify-center ">
        <a href="#" class="block  rounded-lg p-4 mt-5 bg-white sm: shadow-md shadow-gray-400">
            <img
            alt=""
            src={field.imagen}
            class="h-56 w-full rounded-md object-cover"
            />

            <div class="mt-2">
            <dl>
                <div>
                <dt class="sr-only">Price</dt>

                <dd class="text-sm text-gray-500">${field.price_hour}</dd>
                </div>

                <div>
                <dt class="sr-only">Address</dt>

                <dd class="font-medium">{field.name_field}</dd>
                </div>
            </dl>

            <div class="mt-6  items-center flex gap-8 text-xs">
                <div class="lg:inline-flex lg:shrink-0 lg:items-center lg:gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='h-4'><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" fill='#009903'/></svg>

                <div class="mt-1.5 sm:mt-0">
                    <p class="text-gray-500">Jugadores</p>

                    <p class="font-medium">2</p>
                </div>
                </div>

                <div class="lg:inline-flex lg:shrink-0 lg:items-center lg:gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='h-4'><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" fill='#009903'/></svg>

                <div class="mt-1.5 sm:mt-0">
                    <p class="text-gray-500">Direccion</p>

                    <p class="font-medium">{field.address_field}</p>
                </div>
                </div>

                

                <div className=''>
                
                <button 
                    type="button" 
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mb-2 md:mb-0 md:mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                    Reservar
                </button>
                </div>
            </div>
            </div>
        </a>
        </div>
        ))}
        </div>
    );
}

export default FieldsPage;
