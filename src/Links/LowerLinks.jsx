import React, { useState } from 'react';

const UpperLinks = () => {
    const [hoverQuickLinks, setHoverQuickLinks] = useState(false);
    const [studentResourceHoverlink, setStudentResourceHoverlink] = useState(false);

    return (
        <div className="flex justify-center items-center w-full">
            <div className="flex flex-row list-none gap-8 items-center justify-center w-full">
                <ul className='flex justify-center items-center gap-8'>
                    <li className="font-bold">
                        <a style={{ color: '#98012f' }} href="#news-events">ABOUT US</a>
                    </li>
                    <li className="relative font-bold">
                        <a style={{ color: '#98012f' }} href="#quick-links">ACADEMICS</a>
                        <button
                            className="ml-1 cursor-pointer"
                            onClick={() => setHoverQuickLinks(true)}
                        // onMouseLeave={() => setHoverQuickLinks(false)}
                        >
                            <svg
                                className="e-font-icon-svg e-fas-caret-down w-4 h-4"
                                viewBox="0 0 320 512"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                            </svg>
                        </button>
                        {hoverQuickLinks && (
                            <ul
                                className="absolute bg-white border mt-1 flex flex-col p-2 items-start font-medium "
                                onClick={() => setHoverQuickLinks(true)}
                                onMouseLeave={() => setHoverQuickLinks(false)}
                            >
                                <li>
                                    <a
                                        style={{ color: '#98012f' }}
                                        className="font-semibold whitespace-nowrap"
                                        href="#link1"
                                    >
                                        SHIVALIK COLLEGE OF ENGINEERING
                                    </a>
                                </li>
                                <li className="w-full">
                                    <a
                                        style={{ color: '#98012f' }}
                                        className="font-semibold whitespace-nowrap"
                                        href="#link2"
                                    >
                                        SHIVALIK COLLEGE OF PHARMACY
                                    </a>
                                </li>
                                <li>
                                    <a
                                        style={{ color: '#98012f' }}
                                        className="font-semibold whitespace-nowrap"
                                        href="#link3"
                                    >
                                        SHIVALIK COLLEGE OF PROFESSIONAL STUDIES
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="font-bold">
                        <a style={{ color: '#98012f' }} href="#admission-enquiry">PLACEMENTS CELL</a>
                    </li>

                    <li className="relative font-bold">
                        <a style={{ color: '#98012f' }} href="#">STUDENT RESOURCES</a>
                        <button
                            className="ml-1 cursor-pointer"
                            onClick={() => setStudentResourceHoverlink(true)}
                        // onMouseLeave={() => setHoverQuickLinks(false)}
                        >
                            <svg
                                className="e-font-icon-svg e-fas-caret-down w-4 h-4"
                                viewBox="0 0 320 512"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                            </svg>
                        </button>
                        {studentResourceHoverlink && (
                            <ul
                                className="absolute bg-white border mt-1 flex flex-col p-2 items-start font-medium mx-24"
                                onClick={() => setStudentResourceHoverlink(true)}
                                onMouseLeave={() => setStudentResourceHoverlink(false)}
                            >
                                <li>
                                    <a
                                        style={{ color: '#98012f' }}
                                        className="font-semibold whitespace-nowrap"
                                        href="#link1"
                                    >
                                        LIBRARY
                                    </a>
                                </li>
                                <li className="w-full">
                                    <a
                                        style={{ color: '#98012f' }}
                                        className="font-semibold whitespace-nowrap"
                                        href="#link2"
                                    >
                                        CLUBS
                                    </a>
                                </li>
                                <li>
                                    <a
                                        style={{ color: '#98012f' }}
                                        className="font-semibold whitespace-nowrap"
                                        href="#link3"
                                    >
                                        HOSTEL
                                    </a>
                                </li>
                                <li>
                                    <a
                                        style={{ color: '#98012f' }}
                                        className="font-semibold whitespace-nowrap"
                                        href="#link3"
                                    >
                                        MEDICAL
                                    </a>
                                </li>
                                <li>
                                    <a
                                        style={{ color: '#98012f' }}
                                        className="font-semibold whitespace-nowrap"
                                        href="#link3"
                                    >
                                        NCC
                                    </a>
                                </li>
                                <li>
                                    <a
                                        style={{ color: '#98012f' }}
                                        className="font-semibold whitespace-nowrap"
                                        href="#link3"
                                    >
                                        NSS
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="relative font-bold">
                        <a style={{ color: '#98012f' }} href="#examination-sce">CONTACT US</a>
                    </li>

                </ul>

                <div className=' bg-yellow-400 border-1 rounded-lg p-2 mt-1 px-5 text-lg flex items-center justify-center font-bold '>
                    <button style={{ color: '#98012f' }}>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default UpperLinks;
