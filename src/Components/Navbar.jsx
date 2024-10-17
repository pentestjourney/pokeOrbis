import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="text-slate-700 font-medium font-mono relative bg-white">
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center">
                    <a href="/" className='text-orange-700'>
                        Poke Orbis
                    </a>
                    <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden focus:outline-none font-mono text-slate-700">
                        {isOpen ? 'X' : 'Menu'}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-full bg-white text-slate-700 z-20 transition-transform duration-700 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col items-center justify-center sm:hidden`}>
                    <a href="/" className="absolute top-4 left-4 text-orange-700">
                        Poke Orbis
                    </a>
                    <a href="/about" className="hover:text-slate-500 mb-4" onClick={() => setIsOpen(false)}>About</a>
                    <a href="/projects" className="hover:text-slate-500 mb-4" onClick={() => setIsOpen(false)}>What's New</a>
                    <a href="/art" className="hover:text-slate-500 mb-4" onClick={() => setIsOpen(false)}>Trading Cards</a>
                    <a href="/contact" className="hover:text-slate-500" onClick={() => setIsOpen(false)}>Contact</a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden sm:flex space-x-4 justify-center mt-4">
                    <a href="/about" className="hover:text-slate-500">About</a>
                    <a href="/projects" className="hover:text-slate-500">What's New</a>
                    <a href="/art" className="hover:text-slate-500">Trading Cards</a>
                    <a href="/contact" className="hover:text-slate-500">Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;



