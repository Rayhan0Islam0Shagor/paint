'use client';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Container from '../Container';

const Navbar = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // A static user object for display purposes
  const languages = [
    {
      lang: 'English',
      icon: '🇬🇧',
    },
    {
      lang: 'Bangla',
      icon: '🇧🇩',
    },
  ];

  // Effect to handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Handlers for mouse enter/leave to manage dropdown visibility with a delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsUserDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsUserDropdownOpen(false);
    }, 150); // Small delay to prevent flicker
  };

  // Toggles dropdown on click
  const handleDropdownClick = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  return (
    <Container className="pt-4">
      <header className="relative">
        <div className="bg-white rounded-full shadow-sm px-4 py-2">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Logo and Desktop Navigation */}
            <div>
              <img
                src="/assets/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="md:hidden h-[63px] w-[127px]"
              />
            </div>

            <a href="/">
              <img
                src="/assets/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="hidden md:block h-[63px] w-[127px]"
              />
            </a>

            {/* language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div
                className="flex items-center space-x-1 sm:space-x-3 cursor-pointer p-2 rounded-xl transition-all duration-300"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleDropdownClick}
              >
                <div className="w-9 h-6 rounded-lg overflow-hidden  flex items-center justify-center border border-gray-700">
                  <img
                    src="/assets/flag.png"
                    alt="User avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <ChevronDown
                  className={`h-4 w-4 text-gray-500 hidden sm:block transition-transform duration-300 ${
                    isUserDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {/* Dropdown Menu */}
              {isUserDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 bg-white border border-gray-800 rounded-xl shadow-2xl py-2 z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="px-4 py-3 space-y-2">
                    {languages.map((lang, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-9 h-6 rounded-lg overflow-hidden  flex items-center justify-center border border-gray-700">
                          <span>{lang.icon}</span>
                        </div>
                        <p className="text-black font-medium truncate">
                          {lang.lang}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </Container>
  );
};

export default Navbar;
