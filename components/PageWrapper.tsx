
import React from 'react';
import { Logo } from '../constants';

interface PageWrapperProps {
  children: React.ReactNode;
  pageNumber: number;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, pageNumber }) => {
  return (
    <div className="a4-page relative flex flex-col page-break">
      {/* Page Header */}
      <header className="flex justify-between items-start border-b border-slate-200 pb-4 mb-6">
        <Logo />
        <div className="text-right">
          <p className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">Budget Alert Bulletin</p>
          <p className="text-[10px] text-slate-400">Tax & Regulatory Updates</p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Page Footer */}
      <footer className="mt-8 border-t border-slate-100 pt-4 flex justify-between items-center text-[10px] text-slate-400 uppercase tracking-widest">
        <span>Acer Tax & Corporate Services LLP &copy; 2026</span>
        <span>Page {pageNumber}</span>
      </footer>
    </div>
  );
};
