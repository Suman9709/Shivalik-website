import React, { useState } from 'react';

const UpperLinks = () => {
    const [hoverQuickLinks, setHoverQuickLinks] = useState(false);
    const [hoverExaminationLinks, setHoverExaminationLinks] = useState(false);

    return (
        <div>
            <div className="flex flex-row list-none gap-8 justify-center items-center w-full">
                <li className="font-bold">
                    <a style={{ color: '#98012f' }} href="#news-events">News & Events</a>
                </li>

                {/* Quick Links with Dropdown */}
                <li className="relative font-bold">
                    <a style={{ color: '#98012f' }} href="#quick-links">Quick Links</a>
                    <button
                        className="ml-1 cursor-pointer"
                        onClick={() => setHoverQuickLinks(true)}
                    >
                        <svg
                            className="e-font-icon-svg e-fas-caret-down w-4 h-4"
                            viewBox="0 0 320 512"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                        </svg>
                    </button>
                    {/* Dropdown for Quick Links */}
                    {hoverQuickLinks && (
                        <ul
                            className="absolute bg-white border mt-1 flex flex-col p-2 items-start font-medium z-10"
                            onMouseLeave={() => setHoverQuickLinks(false)}
                        >
                            {['ERP Login', 'Admission Help', 'Academic Calendar', 'Blogs', 'Pay-Fee', 'NewsLetter', 'Our Alumni', 'Student/Faculty Feedback'].map((link, index) => (
                                <li className="w-full whitespace-nowrap" key={index}>
                                    <a
                                        style={{ color: '#98012f' }}
                                        className="font-semibold block w-full hover:bg-slate-400 py-2"
                                        href={`#link${index + 1}`}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>

                <li className="font-bold">
                    <a style={{ color: '#98012f' }} href="#admission-enquiry">Admission Enquiry</a>
                </li>

                <li className="relative font-bold">
                    <a style={{ color: '#98012f' }} href="#examination-sce">Examination @ SCE</a>
                    <button
                        className="ml-1 cursor-pointer"
                        onClick={() => setHoverExaminationLinks(true)}
                    >
                        <svg
                            className="e-font-icon-svg e-fas-caret-down w-4 h-4"
                            viewBox="0 0 320 512"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                        </svg>
                    </button>
                    {/* Dropdown for Examination Links */}
                    {hoverExaminationLinks && (
                        <ul
                            className="absolute bg-white border mt-2 p-2 z-10 mx-20"
                            onMouseLeave={() => setHoverExaminationLinks(false)}
                        >
                            <li className="w-full">
                                <a
                                    style={{ color: '#98012f' }}
                                    className="py-2 px-4 font-semibold block w-full hover:bg-slate-400"
                                    href="#examination-link1"
                                >
                                    Result
                                </a>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="font-bold">
                    <a style={{ color: '#98012f' }} href="#sce-e-library">SCE E Library</a>
                </li>
            </div>
        </div>
    );
};

export default UpperLinks;
