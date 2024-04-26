import React, { useState } from 'react';
import ARROW from "../assets/icons/arrow-down.png";

const Header = () => {
    const [dropdowns, setDropdowns] = useState({
        libraryProfile: false,
        libraryServices: false,
        eResources: false,
        eventsActivities: false,
    });

    // Function to toggle dropdown visibility
    const toggleDropdown = (dropdown) => {
        setDropdowns(prevState => ({
            ...prevState,
            [dropdown]: !prevState[dropdown]
        }));
    };

    const closeDropdowns = (dropdown) => {
        setDropdowns(prevState => ({
            ...prevState,
            [dropdown]: false
        }));
    };

    return (
        <div className="flex bg-gradient-to-r from-[#03045E] to-[#023E8A] justify-center items-center gap-10">
            <div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/04e0cd858c6ffd5b766231770be65e10b1f4961c0ac31b9a23eae301b694cbad?apiKey=90a6ed213758449eabd6c6a72ae84f75"
                    className="shrink-0 max-w-full aspect-[1.03] w-[115px]"
                />
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-white">
                    <ul className="flex gap-20">
                        <li className="relative flex items-center">
                            <span>Library Profile</span>
                            <img
                                src={ARROW}
                                className="w-3 h-3 ml-1 arrow-icon cursor-pointer"
                                onClick={() => {
                                    toggleDropdown('libraryProfile');
                                }}
                            />
                            {dropdowns.libraryProfile && (
                                <div className="dropdown-menu">
                                    <div className='bg-white text-black w-48'>
                                        <ul className='flex flex-col'>
                                            <li>About Library</li>
                                            <li>Vision & Mission</li>
                                            <li>Library Rules</li>
                                            <li>Library Facilities</li>
                                            <li>Collection at glance</li>
                                            <li>Library Committee</li>
                                            <li>M.O.U</li>
                                            <li>Library Staff</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li className="relative flex items-center">
                            <span>Library Services</span>
                            <img
                                src={ARROW}
                                className="w-3 h-3 ml-1 arrow-icon cursor-pointer"
                                onClick={() => {
                                    toggleDropdown('libraryServices');
                                }}
                            />
                            {dropdowns.libraryServices && (
                                <div className="dropdown-menu">
                                    <div className='bg-white text-black w-48'>
                                        <ul className='flex flex-col'>
                                            <li>Library Service</li>
                                            <li>Research Support</li>
                                            <li>E-News Papers & Clippings</li>
                                            <li>University Rare Books</li>
                                            <li>Collection at glance</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li className="relative flex items-center">
                            <span>E-resources</span>
                            <img
                                src={ARROW}
                                className="w-3 h-3 ml-1 arrow-icon cursor-pointer"
                                onClick={() => {
                                    toggleDropdown('eResources');
                                }}
                            />
                            {dropdowns.eResources && (
                                <div className="dropdown-menu">
                                    <div className='bg-white text-black w-48'>
                                        <ul className='flex flex-col'>
                                            <li>Libtrend</li>
                                            <li>Open Access E-Books</li>
                                            <li>Open Access E-Resources</li>
                                            <li>E-Magazines</li>
                                            <li>E-Database</li>
                                            <li>INDCAT</li>
                                            <li>Delnet Connectivity</li>
                                            <li>South Asia Archive(SAA)</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li className="relative flex items-center">
                            <span onClick={() => {
                                toggleDropdown('eventsActivities');
                            }}>Events and Activities</span>
                            <img
                                src={ARROW}
                                className="w-3 h-3 ml-1 arrow-icon cursor-pointer"
                                onClick={() => {
                                    toggleDropdown('eventsActivities');
                                    closeDropdowns('eventsActivities');
                                }}
                            />
                            {dropdowns.eventsActivities && (
                                <div className="dropdown-menu">
                                    <div className='bg-white text-black w-48'>
                                        <ul className='flex flex-col'>
                                            <li>Delnet Workshop</li>
                                            <li>Librarian Day Celebration</li>
                                            <li>Journal Publication</li>
                                            <li>Library Facilities</li>                                       
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="text-white pl-10">
                    <ul className="flex gap-20">
                        <li className="cursor-pointer">Downloads</li>
                        <li className="cursor-pointer">Gallery</li>
                        <li className="cursor-pointer">Other Links</li>
                        <li className="cursor-pointer">FAQs</li>
                        <li className="cursor-pointer">Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
