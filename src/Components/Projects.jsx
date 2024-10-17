import React from 'react';
import shoe1 from './images/shoe1.jpg';
import shoe2 from './images/shoe2.jpg';
import shoe3 from './images/shoe3.jpg';

const Projects = () => {
    return (
        <div name="projects" className="h-[50%] w-full">
            <div className="flex flex-col md:flex-row justify-center p-4 md:p-12 gap-4 py-[5%] md:py-[10%] items-center">

                {/* Shoe 1 */}
                <div className="mb-4 md:mb-0">
                    <a className="cursor-pointer" href="https://www.belayer.co/">
                        <img className="mx-auto p-2 md:p-6 w-[65%]" src={shoe1} alt="Shoe 1" />
                    </a>
                </div>

                {/* Shoe 2 */}
                <div className="mb-4 md:mb-0">
                    <a className="cursor-pointer" href="https://www.belayer.co/">
                        <img className="mx-auto p-2 md:p-6 w-[65%]" src={shoe2} alt="Shoe 2" />
                    </a>
                </div>

                {/* Shoe 3 */}
                <div className="mb-4 md:mb-0">
                    <a className="cursor-pointer" href="https://www.belayer.co/">
                        <img className="mx-auto p-2 md:p-6 w-[65%]" src={shoe3} alt="Shoe 3" />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Projects;













