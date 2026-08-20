"use client";

import React, { useState, useEffect } from 'react';
import { User } from '@/types/admin/admin';

interface AdminHeaderProps {
  currentUser: User;
}

const Header: React.FC<AdminHeaderProps> = ({ currentUser }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      {/* Header Banner */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-outline-variant shadow-sm">
        <div>
          <h1 
            suppressHydrationWarning 
            className="font-display font-black text-2xl text-on-surface mt-1"
          >
            Welcome back, {isMounted ? currentUser?.name || 'Admin User' : 'Admin User'}
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;