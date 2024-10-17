import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";


function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <div className="bg-slate-800 py-12">

                <div className="flex justify-center">
                    <div className="text-center">
                        <p className="mb-2 text-lg text-gray-100">Connect with us:</p>
                        <div className="flex space-x-4">
                            <a href="mailto:pentestjourney@gmail.com" target="_blank" rel="noopener noreferrer">
                                <FaEnvelope className="text-2xl text-slate-100 hover:text-blue-600 transition" />
                            </a>
                            <a href="https://www.linkedin.com/in/geronimo-nolasco-iii-347421224/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-2xl text-slate-100 hover:text-blue-600 transition" />
                            </a>
                            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-2xl text-slate-100 hover:text-blue-600 transition" />
                            </a>
                        </div>

                    </div>
                </div>

                <div className="mt-12 text-center ">
                    <p className="text-gray-500">Copyright © {currentYear} <h1 className="text-xl f text-orange-700">
                        Poke Orbis
                    </h1></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;