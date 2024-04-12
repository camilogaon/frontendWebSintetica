import React from 'react';
import CardFields from '../components/card'

function FieldsPage() {
    return (
        <div className="md:flex justify-center md:h-screen mb-5 ">
                <div className="md:w-[90%] h-full  items-center justify-center">
                    <CardFields/>
                </div>
        </div>
    );
}

export default FieldsPage;
