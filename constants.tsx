import React, { useState } from 'react';

export const COMPANY_NAME = "Acer Tax & Corporate Services LLP";
export const BUDGET_TITLE = "India Budget 2026-27";
export const LOGO_URL = "/indiabudgetnew/logo.png";

export const Logo: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex items-center gap-4 flex-nowrap">
      {!imgError ? (
        <img 
          src={LOGO_URL} 
          alt="Acer Logo" 
          /* Centering adjustment for mobile when text is hidden */
          className="w-20 h-auto object-contain mx-auto md:mx-0" 
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-12 h-12 bg-slate-900 flex items-center justify-center rounded text-white font-bold text-xl mx-auto md:mx-0">
          A
        </div>
      )}
      
      {/* - hidden: Hides the text container by default (Mobile)
          - md:flex: Restores the display for medium screens and above (Desktop)
      */}
      <div className="hidden md:flex flex-col justify-center border-l border-slate-200 pl-4">
        <h1 className="text-slate-900 font-extrabold text-base tracking-tight leading-none uppercase whitespace-nowrap">
          {COMPANY_NAME}
        </h1>
        <p className="text-[9px] text-slate-400 font-bold tracking-[0.25em] mt-1.5 uppercase">
          Tax & Corporate Services
        </p>
      </div>
    </div>
  );
};