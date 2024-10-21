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
        <div ref={ref} className="flex flex-col items-center justify-center shadow-2xl md:mt-0 mt-5 md:p-4 bg-[#f6f7fd] rounded-3xl border md:w-96 w-full mx-auto"> {/* Card Container */}
            {/* Image above the title */}
            <img src={imageUrl} alt={title} className="md:w-48 md:h-40 mb-2 mt-3 w-24 h-20 mx-auto" /> {/* Adjust the size for mobile */}
            <h3 className="text-lg font-Poppins font-semibold mb-2 mt-4 text-center">{title}</h3> {/* Poppins font applied */}
            <div 
                className="text-4xl font-bold text-indigo-600 rounded-full flex justify-center mt-4 transition-transform duration-500 ease-in-out transform" 
                style={{ minWidth: '100px', height: '60px', textAlign: 'center' }} // Fixed height for stability
            >
                {currentNumber} +
            </div>
        </div>
    );
};

const MultiIncrementor = () => {
    return (
        <div className="md:flex flex-col items-center">
            <div className="md:h-[500px] md:p-0 p-6 items-center md:flex justify-center bg-gradient-to-r from-indigo-400 to-indigo-600 w-full">
                <div>
                    <div className='md:flex justify-center'>
                        <h1 className='font-Poppins md:text-3xl text-2xl text-white font-semibold'>
                            People who trust Mechfinder!
                        </h1>
                    </div>
                    <div className="md:flex justify-center md:gap-10 mt-10 flex-wrap"> {/* Adjusted gap for card spacing */}
                        <Incrementor 
                            title="Shops" 
                            startNumber={0} 
                            targetNumber={50} 
                            speed={50} 
                            imageUrl="https://i.pinimg.com/564x/59/7a/de/597ade7f979fdb7c06df948d599862bb.jpg" // Replace with your image URL
                        />
                        <Incrementor 
                            title="Individual Workers" 
                            startNumber={0} 
                            targetNumber={127} 
                            speed={50} 
                            imageUrl="https://i.pinimg.com/564x/c5/b9/aa/c5b9aa5a78343c74ab488401008979a8.jpg" // Replace with your image URL
                        />
                        <Incrementor 
                            title="Users" 
                            startNumber={0} 
                            targetNumber={120} 
                            speed={50} 
                            imageUrl="https://i.pinimg.com/564x/08/57/0a/08570a1d2cc5f1b4294bf7243969a1c3.jpg" // Replace with your image URL
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultiIncrementor;
