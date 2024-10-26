import React, { useState, useEffect, useRef } from 'react';

const Incrementor = ({ title, startNumber, targetNumber, speed, imageUrl }) => {
    const [currentNumber, setCurrentNumber] = useState(startNumber);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    // Increment the number only if the component is visible
    useEffect(() => {
        let interval;

        const increment = () => {
            setCurrentNumber(prev => {
                const incrementValue = Math.ceil((targetNumber - prev) / 20); // Increment towards target
                return Math.min(prev + incrementValue, targetNumber); // Ensure it doesn't exceed the target
            });
        };

        if (isVisible && currentNumber < targetNumber) {
            interval = setInterval(increment, speed); // Call increment function every `speed` milliseconds
        } else {
            clearInterval(interval); // Clear interval if already at the target
        }

        return () => clearInterval(interval); // Cleanup on unmount
    }, [isVisible, currentNumber, targetNumber, speed]);

    // Intersection Observer to detect visibility
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
                if (entry.isIntersecting) {
                    setCurrentNumber(startNumber); // Reset to start number when visible
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the component is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current); // Clean up observer
            }
        };
    }, [ref, startNumber]);

    return (
        <div ref={ref} className="flex flex-col items-center justify-center shadow-2xl md:mt-0 mt-5 md:p-0 bg-[#ffffff] rounded-2xl md:rounded-3xl border md:w-72 w-4/6 mx-auto"> {/* Card Container */}
            {/* Image above the title */}
            {/* <img src={imageUrl} alt={title} className="md:w-56 md:h-44 mb-2 mt-6 md:mt-5 w-48 h-40 mx-auto" />   */}
            <h3 className=" text-lg font-Poppins font-semibold mb-2 mt-2 text-center">{title}</h3> {/* Poppins font applied */}
            <div 
                className="text-4xl font-bold font-Poppins text-indigo-600 rounded-full flex justify-center   transition-transform duration-500 ease-in-out transform" 
                style={{ minWidth: '100px', height: '60px', textAlign: 'center' }} // Fixed height for stability
            >
                {currentNumber}+
            </div>
        </div>
    );
};

const MultiIncrementornew = () => {
    return (
        <div className="md:flex flex-col items-center">
            <div className="md:h-[300px] md:p-0 p-6 items-center md:flex justify-center bg-gradient-to-r from-indigo-400 to-indigo-600 w-full">
                <div>
                    <div className='md:flex justify-center'>
                        <h1 className='font-Poppins text-center md:text-3xl text-2xl text-white font-semibold'>
                            People who trust Mechfinder!
                        </h1>
                    </div>
                    <div className="md:flex justify-center md:gap-10 mt-10 flex-wrap"> {/* Adjusted gap for card spacing */}
                        <Incrementor 
                            title="Shops" 
                            startNumber={0} 
                            targetNumber={50} 
                            speed={50} 
                            imageUrl="https://i.pinimg.com/564x/d6/2f/ef/d62fefddddacc8c457dbbbe6c95226b5.jpg" // Replace with your image URL
                        />
                        <Incrementor 
                            title="Individual Workers" 
                            startNumber={0} 
                            targetNumber={127} 
                            speed={50} 
                            imageUrl="https://i.pinimg.com/564x/65/cf/e4/65cfe4830b9a34aa4790efe95d4733d5.jpg" // Replace with your image URL
                        />
                        <Incrementor 
                            title="Users" 
                            startNumber={0} 
                            targetNumber={120} 
                            speed={50} 
                            imageUrl="https://i.pinimg.com/564x/ee/60/33/ee6033453ff0706e2e77bfc7e2c74d8e.jpg" // Replace with your image URL
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultiIncrementornew;
