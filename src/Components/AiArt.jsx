import React from 'react';
import marcus from './images/marcus.png';
import marcus1 from './images/marcus1.png';
import marcus2 from './images/marcus2.png';
import marcus3 from './images/marcus3.png';
import marcus4 from './images/marcus4.png';
import demo1 from './images/demo1.png';
import demo2 from './images/demo2.png';
import demo3 from './images/demo3.png';
import demo4 from './images/demo4.png';
import demo5 from './images/demo5.png';
import demo6 from './images/demo6.png';
import demo7 from './images/demo7.png';
const AiArt = () => {
    const images = [
        { src: marcus4, title: "Lorem Title 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum." },
{ src: demo6, title: "Lorem Title 2", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
{ src: demo3, title: "Lorem Title 3", description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
{ src: marcus2, title: "Lorem Title 4", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
{ src: demo2, title: "Lorem Title 5", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
{ src: marcus, title: "Lorem Title 6", description: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio." },
{ src: demo5, title: "Lorem Title 7", description: "Sed vel volutpat sapien. Vestibulum auctor consequat arcu nec vestibulum." },
{ src: demo4, title: "Lorem Title 8", description: "Aenean auctor gravida sem. Maecenas varius augue vel urna." },
{ src: marcus3, title: "Lorem Title 9", description: "Vestibulum iaculis lacinia est. Proin dictum elementum velit." },
{ src: demo1, title: "Lorem Title 10", description: "Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." },
{ src: marcus1, title: "Lorem Title 11", description: "Pellentesque sed dolor. Aliquam congue fermentum nisl." },
{ src: demo7, title: "Lorem Title 12", description: "Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet." }


    ];
    
    return (
        <div className='bg-black h-full py-10'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-3  gap-6">
                    {images.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row border-2 border-gray-300">
                            <div className="relative w-full md:w-1/2 overflow-hidden">
                                <img 
                                    src={item.src} 
                                    alt={`Image ${index + 1}`} 
                                    className="w-full h-auto object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                                />
                            </div>
                            <div className="p-4 md:p-6 w-full md:w-1/2">
                                <h2 className="font-bold mb-2 text-lg md:text-xl">{item.title}</h2>
                                <p className="text-gray-700 leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AiArt;





