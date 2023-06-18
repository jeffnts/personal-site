'use client'
import Link from 'next/link'
import { useState } from 'react'

import { Logo } from '../'

type MenuItems = {
    name: string
    link: string
}

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems: Array<MenuItems> = [
        // {
        //     name: 'Pojetos',
        //     link: '/projects'
        // }
    ]

    return (
        <nav className="bg-gray-800">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                <div className="flex items-center">
                <Logo />
                </div>

                <div className="hidden md:flex items-center">
                    {
                        menuItems.map(menu => (
                            <Link 
                                key={menu.name}
                                href={menu.link} 
                                className="text-white mx-4 hover:text-gray-300"
                            >
                                { menu.name }
                            </Link>
                        ))
                    }         
                </div>

                <div className="md:hidden flex items-center">
                <button
                    className="text-white focus:outline-none"
                    onClick={handleMenuToggle}
                >
                    <svg
                    className="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    >
                    {isMenuOpen ? (
                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 5.75C3 5.33579 3.33579 5 3.75 5H20.25C20.6642 5 21 5.33579 21 5.75C21 6.16421 20.6642 6.5 20.25 6.5H3.75C3.33579 6.5 3 6.16421 3 5.75ZM3 12.75C3 12.3358 3.33579 12 3.75 12H20.25C20.6642 12 21 12.3358 21 12.75C21 13.1642 20.6642 13.5 20.25 13.5H3.75C3.33579 13.5 3 13.1642 3 12.75ZM3.75 18.5H20.25C20.6642 18.5 21 18.8358 21 19.25C21 19.6642 20.6642 20 20.25 20H3.75C3.33579 20 3 19.6642 3 19.25C3 18.8358 3.33579 18.5 3.75 18.5Z"
                        />
                    ) : (
                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4C21 4.55228 20.5523 5 20 5H4C3.44772 5 3 4.55228 3 4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 20C3 19.4477 3.44772 19 4 19H20C20.5523 19 21 19.4477 21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20Z"
                        />
                    )}
                    </svg>
                </button>
                </div>
            </div>

            <div
                className={`md:hidden bg-gray-700 transition-all duration-300 ease-in-out transform ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full h-0'
                }`}
            >
                {
                        menuItems.map(menu => (
                            <Link 
                                key={menu.name}
                                href={menu.link} 
                                className="block text-white py-2 px-4 hover:bg-gray-600"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                { menu.name }
                            </Link>
                        ))
                    } 
            </div>
        </nav>
    )
}