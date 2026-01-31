import React from 'react';
import { Logo, COMPANY_NAME } from '../constants'; // Ensure COMPANY_NAME is exported from constants

interface PageWrapperProps {
  children: React.ReactNode;
  pageNumber: number;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, pageNumber }) => {
  return (
    <div className="bg-white shadow-2xl mx-auto my-0 md:my-8 p-6 md:p-12 w-full md:max-w-[210mm] min-h-screen md:min-h-[297mm] relative flex flex-col page-break box-border overflow-hidden">
      
      {/* RESPONSIVE HEADER: Stacks and centers on mobile, spreads on desktop */}
      <header className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-slate-200 pb-4 mb-6 gap-3">
        
        {/* Logo and Company Branding Container */}
        <div className="flex flex-col items-center md:items-start w-full md:w-auto">
          <Logo />
          {/* Company Name: Visible and centered on mobile, matches desktop branding */}
          <h1 className="text-[12px] md:text-sm font-bold text-slate-800 tracking-tight uppercase mt-2 text-center md:text-left">
            Acer Tax & Corporate Services LLP
          </h1>
          <p className="text-[9px] text-slate-400 uppercase tracking-widest font-bold md:hidden">
            Economic Survey & Budget Alert
          </p>
        </div>

        {/* Right Side Info: Centered on mobile below the logo group */}
        <div className="text-center md:text-right w-full md:w-auto">
          <p className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">
            Budget Alert Bulletin
          </p>
          <p className="text-[10px] text-slate-400">
            Tax & Regulatory Updates
          </p>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="mt-8 border-t border-slate-100 pt-4 flex justify-between items-center text-[10px] text-slate-400 uppercase tracking-widest">
        <span>Acer Tax & Corporate Services LLP &copy; 2026</span>
        <span className="font-bold">Page {pageNumber}</span>
      </footer>
    </div>
  );
};