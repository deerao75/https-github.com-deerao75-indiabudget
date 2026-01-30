import React, { useState } from 'react';

export const COMPANY_NAME = "Acer Tax & Corporate Services LLP";
export const BUDGET_TITLE = "India Budget 2026-27";
export const LOGO_URL = "/logo.png";

export const Logo: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex items-center gap-4 flex-nowrap">
      {!imgError ? (
        <img 
          src={LOGO_URL} 
          alt="Acer Logo" 
          /* Set to a consistent size that doesn't overwhelm the text */
          className="w-20 h-auto object-contain" 
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-12 h-12 bg-slate-900 flex items-center justify-center rounded text-white font-bold text-xl">
          A
        </div>
      )}
      
      <div className="flex flex-col justify-center border-l border-slate-200 pl-4">
        {/* Reduced font size from text-xl to text-base/lg for better balance */}
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