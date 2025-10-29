import React from 'react';
import { Button } from '../ui/button';

function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5 w-full'>
      <img 
        src="../../logo.png" 
        alt="Logo" 
        className='w-10 h-10 object-cover' 
      />
      <div>
        <Button className="italic text-m tracking-wide font-extrabold text-white">Saarthi.AI</Button>
      </div>
    </div>
  );
}

export default Header;
