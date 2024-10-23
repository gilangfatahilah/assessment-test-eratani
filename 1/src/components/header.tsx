import React, { useState, useEffect, useRef } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className='relative'>
      {/* Header for Desktop */}
      <header className="hidden md:block bg-white shadow-2xl py-4 md:text-lg lg:text-2xl">
        <nav className="flex justify-center items-center space-x-10">
          <img src={'/logo.svg'} alt='logo' width={179} height={47} />
          <a href="#" className="text-black hover:text-primary">Beranda</a>
          <a href="#" className="text-black hover:text-primary">Tentang Kami</a>
          <a href="#" className="text-black hover:text-primary">Tips & Berita Pertanian</a>
          <a href="#" className="text-black hover:text-primary font-semibold">Kegiatan</a>
          <a href="#" className="text-black bg-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-600">Mitra Petani</a>
        </nav>
      </header>

      {/* Header for Mobile */}
      <header className='w-full md:hidden absolute flex justify-between items-center p-6'>
        <img src={'/logo.svg'} alt='logo' width={70} height={18} />

        <button onClick={toggleMenu} className='text-green-700 p-1 rounded bg-white/10'>
          {isMenuOpen ? <IoClose className='w-6 h-6' /> : <IoMenu className='w-6 h-6' />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div ref={menuRef} className="absolute right-0 w-[215px] h-max inset-y-0 bg-white z-50 flex flex-col items-center justify-center py-3 rounded-tl-lg rounded-bl-lg text-sm">
          <a href="#" className="w-full py-3 text-center text-black hover:font-bold hover:bg-yellow-100">Beranda</a>
          <a href="#" className="w-full py-3 text-center text-black hover:font-bold hover:bg-yellow-100">Tentang Kami</a>
          <a href="#" className="w-full py-3 text-center text-black hover:font-bold hover:bg-yellow-100">Tips & Berita Pertanian</a>
          <a href="#" className="w-full py-3 text-center text-black hover:font-bold hover:bg-yellow-100">Kegiatan</a>
          <a href="#" className="text-black bg-secondary px-4 py-2 rounded-md hover:bg-secondary/85">Mitra Petani</a>
        </div>
      )}
    </div>
  );
}

export default Header;
