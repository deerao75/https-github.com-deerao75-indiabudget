import React from 'react';
import { TaxItem } from '../types';

interface DetailSectionProps {
  items: TaxItem[];
}

export const DetailSection: React.FC<DetailSectionProps> = ({ items }) => {
  return (
    <div className="relative">
      {/* Central Vertical Line: Only visible on medium screens and up */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-200 -translate-x-1/2 hidden md:block"></div>
      
      {/* Grid Fix: 
          - Changed gap-x from 16 to 12 for better fit.
          - Added px-2 to give breathing room on small screens.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-12 items-start px-2 md:px-0">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col">
            {/* Heading Fix: 
                - md:w-max: Keeps the underline tight on desktop.
                - w-full: Allows the underline/heading to wrap naturally on mobile without pushing the layout.
            */}
            <h4 className="font-extrabold text-slate-900 text-[13px] md:text-[14px] uppercase tracking-wider mb-2 border-b-2 border-slate-900 inline-block w-full md:w-max pb-1 break-words">
              {item.title}
            </h4>
            
            {/* Content Fix: 
                - md:text-justify: Keeps desktop professional.
                - text-left: Prevents awkward spacing on narrow mobile screens.
            */}
            <div className="text-[12px] text-slate-600 leading-relaxed text-left md:text-justify break-words whitespace-pre-wrap">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};