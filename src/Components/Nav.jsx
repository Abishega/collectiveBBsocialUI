import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { RiComputerLine } from "react-icons/ri";
import { IoStatsChart } from "react-icons/io5";
import { PiGraphDuotone } from "react-icons/pi";
import { LuFolderSearch } from "react-icons/lu";
import { MdOutlineRotate90DegreesCcw } from "react-icons/md";

export const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="mt-20">
      <div className="space-y-10 cursor-pointer">
        <GoHome size={25}/>
        <HiOutlineSpeakerphone
          size={25}
          className={location.pathname === '/creator' ? 'bg-slate-300' : ''}
          onClick={() => navigate('/creator')}
        />
        <RiComputerLine
          size={25}
          className={location.pathname === '/users' ? 'bg-slate-300' : ''}
          onClick={() => navigate('/users')}
        />
        <IoStatsChart size={25} className={location.pathname === '/stats' ? 'text-black' : ''} />
        <PiGraphDuotone size={25} className={location.pathname === '/graphs' ? 'text-black' : ''} />
        <LuFolderSearch size={25} className={location.pathname === '/search' ? 'text-black' : ''} />
        <MdOutlineRotate90DegreesCcw size={25} className={location.pathname === '/rotate' ? 'text-black' : ''} />
      </div>
    </div>
  );
};
