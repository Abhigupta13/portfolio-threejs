// FloatingFollowButton.js
import React, { useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub, FaGit } from 'react-icons/fa';
import { IoEyeOutline, IoEyeOffOutline, IoCloseOutline } from 'react-icons/io5'; 
import {TbBrandLeetcode, TbBrandLinkedin} from 'react-icons/tb'

const FloatingFollowButton = () => {
  const [showFollowButton, setShowFollowButton] = useState(true);

  return (
    <div
      className={`${
        showFollowButton ? 'translate-x-0' : 'translate-x-20'
      } fixed bottom-4 right-4 flex flex-col items-center transition-transform bg-[#2A1D54] bg-opacity-40 p-4 rounded-lg shadow-lg space-y-2`}
    >
      {showFollowButton && (
        <div className="space-y-4">
  <a href="https://x.com/Kgupta_abhishek" className="text-slate-200 hover:bg-[#2f225b] hover:text-secondary">
    <FaTwitter className="w-6 h-6 rounded-md shadow-md" />
  </a>
  <a href="https://leetcode.com/u/Abhigupta13/" className="text-slate-200 hover:bg-[#2f225b] hover:text-secondary">
    <TbBrandLeetcode className="w-6 h-6 rounded-md shadow-md" />
  </a>
  <a href="https://www.linkedin.com/in/abhigupta3007/" className="text-slate-200 hover:bg-[#2f225b] hover:text-secondary">
    <TbBrandLinkedin className="w-6 h-6 rounded-md shadow-md" />
  </a>
  <a href="https://github.com/Abhigupta13" className="text-slate-200 hover:bg-[#2f225b] hover:text-secondary">
    <FaGithub className="w-6 h-6 rounded-md shadow-md" />
  </a>
</div>



      )}
    <button
        onClick={() => setShowFollowButton(!showFollowButton)}
        className="bg-black text-white rounded-md px-6 py-2 hover:text-secondary"
      >
        {showFollowButton ? (
          <IoCloseOutline className="w-6 h-6" />
        ) : (
          <IoEyeOutline className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default FloatingFollowButton;
