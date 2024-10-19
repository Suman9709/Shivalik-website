import React, { useState, useEffect } from 'react';
import img1 from '../../Images/img1.jpg';
import img2 from '../../Images/img2.png';
import img3 from '../../Images/img3.jpg';

const images = [img1, img2, img3];
const texts = [
    'CHOOSE YOUR OWN PATH TO SUCCESS',
    'LEARN THE NEW WAY OF LEARNING',
    'YOUR WAY TO FUTURE'
];

const MainPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative overflow-hidden w-screen h-screen">
            <div className="w-full h-full">
                <div className="relative w-screen h-screen  flex items-center justify-center">
                    <img
                        src={images[currentIndex]}
                        alt={`img${currentIndex + 1}`}
                        className="w-full h-full object-cover"
                    />
                    <p className="absolute text-white text-5xl font-sans bg-black bg-opacity-50 p-2 w-1/4 left-20 rounded-md font-semibold">
                        {texts[currentIndex]}
                    </p>
                </div>
            </div>

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-4 h-4 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
                            }`}
                    ></button>
                ))
                }
            </div>
        </div>
    );
};

export default MainPage;
