import React, { useEffect, useState } from 'react';

const HomeServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data=>setServices(data))
    }, [])
    return (
        <div className='py-9'>
            <div className='text-center py-10'>
                <h2 className='text-4xl font-bold color-red'>Popular this month in your city</h2>
                <p className='text-gray-500 pt-5'>The easiest way to your favorite food</p>
            </div>
            <div className='mx-auto md:w-11/12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        services.map(service=><div key={service._id}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                    Shoes!
                                    <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div> 
                                    <div className="badge badge-outline">Products</div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeServices;