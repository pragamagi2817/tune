import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const nav = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Music', 'Podcasts'];

  return (
    <>
      {/* Top Navigation */}
      <div className='w-full flex justify-between items-center font-semibold'>
        {/* Back/Forward Arrows */}
        <div className='flex items-center gap-2'>
          <img
            onClick={() => nav(-1)}
            className='w-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-gray-800 transition duration-200'
            src={assets.arrow_left}
            alt="Back"
          />
          <img
            onClick={() => nav(1)}
            className='w-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-gray-800 transition duration-200'
            src={assets.arrow_right}
            alt="Forward"
          />
        </div>

        {/* Right Side Controls */}
        <div className='flex items-center gap-4'>
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl outline-none w-[150px] md:w-[250px]"
          />

          <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer hover:bg-gray-200 transition duration-200'>
            Explore Premium
          </p>
          <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer hover:bg-gray-800 transition duration-200'>
            Install App
          </p>

          {/* User Avatar Dropdown */}
          <div className="relative group">
            <p className='bg-orange-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer'>
              V
            </p>
            <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md p-2 hidden group-hover:block z-10">
              <p className="cursor-pointer hover:text-orange-500">Profile</p>
              <p className="cursor-pointer hover:text-orange-500">Settings</p>
              <p className="cursor-pointer hover:text-orange-500">Logout</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className='flex items-center gap-2 mt-4'>
        {tabs.map(tab => (
          <p
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1 rounded-2xl cursor-pointer transition duration-200 ${
              activeTab === tab ? 'bg-white text-black' : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            {tab}
          </p>
        ))}
      </div>
    </>
  );
};

export default Navbar;