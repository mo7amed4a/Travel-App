import React, { useState } from "react";

export default function DropdownComponent({ButtonLink, children}) {
  // التحكم في إظهار القائمة المنسدلة
  const [isOpen, setIsOpen] = useState(false);

  // عرض القائمة عند التمرير
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  // إخفاء القائمة عند مغادرة الماوس
  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-center">
        <span onClick={() => setIsOpen(!isOpen)}>    
            {ButtonLink}
        </span>
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="ml-2 h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
      {isOpen && (
        <div className="absolute left-0 pt-3 z-10 w-full">
          <div className="w-full md:w-48 bg-white z-20 border border-gray-200 shadow-lg p-3 border-t-4 border-t-primary">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
