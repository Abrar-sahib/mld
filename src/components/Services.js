import React from 'react';
import { Link } from 'react-router-dom';
import flatBed from "../images/flat-bed.jpg"

const Services = () => {
    return (
        <>
            <div className="my-4 py-4" id='services'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Services</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>
                <h2 className="my-2 text-center text-3xl text-black-900 uppercase font-bold">You have a need, <span className='text-blue-900'>we have a solution</span></h2>

                <div className="px-4 mt-5" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                        <div className="flex justify-center flat-bed transition-all ease-in-out duration-400 items-center h-[200px] overflow-hidden text-[#fff] hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max bg">
                            <div className="text-justify text-sm">
                                <h4 className="font-semibold uppercase  text-lg md:text-2xl text-center">Flatbed / step deck</h4>
                            </div>
                        </div>
                        <div className="flex justify-center dry-van transition-all ease-in-out duration-400 items-center h-[200px] overflow-hidden text-[#fff] hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max bg">
                            <div className="text-justify text-sm">
                                <h4 className="font-semibold uppercase  text-lg md:text-2xl text-center">Dry van</h4>
                            </div>
                        </div>
                        <div className="flex justify-center reefer transition-all ease-in-out duration-400 items-center h-[200px] overflow-hidden text-[#fff] hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max bg">
                            <div className="text-justify text-sm">
                                <h4 className="font-semibold uppercase  text-lg md:text-2xl text-center">Reefer</h4>
                            </div>
                        </div>
                        <div className="flex justify-center box-truck transition-all ease-in-out duration-400 items-center h-[200px] overflow-hidden text-[#fff] hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max bg">
                            <div className="text-justify text-sm">
                                <h4 className="font-semibold uppercase  text-lg md:text-2xl text-center">box truck</h4>
                            </div>
                        </div>

                  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;