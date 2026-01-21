import React, { useState, useEffect } from 'react';
import { getImageUrl } from '../utils';
import { Menu, X } from 'lucide-react';
import { ViewState } from '../App';
import ContactModal from './ContactModal';

interface NavigationProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onViewChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; id: ViewState }[] = [
    { name: '首页概览', id: 'home' },
    { name: '四养技术', id: 'tech' },
    { name: '生态产品', id: 'products' },
    { name: '科研与基地', id: 'team' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-white/95 backdrop-blur-md border-primary-100 py-2' : 'bg-white border-transparent py-3'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Area */}
          <div
            className="cursor-pointer group"
            onClick={() => onViewChange('home')}
          >
            <div className="flex items-center gap-3">
              <img
                src={getImageUrl("/images/other/logo（长）.png")}
                alt="绿佳元"
                className="h-14 w-auto"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onViewChange(link.id)}
                className={`font-serif text-lg tracking-wide transition-all duration-300 relative py-2
                  ${currentView === link.id
                    ? 'text-primary-800 font-bold'
                    : 'text-gray-500 hover:text-primary-600'
                  }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold-500 transform transition-transform duration-300 origin-left ${currentView === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </button>
            ))}
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="px-6 py-2 bg-primary-800 text-gold-100 font-serif text-sm hover:bg-primary-900 transition-colors shadow-sm border border-gold-600/30"
            >
              联系我们
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-primary-950 absolute w-full left-0 top-full p-6 shadow-2xl border-t border-primary-800 h-screen">
            <div className="flex flex-col space-y-6 pt-10 items-center">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onViewChange(link.id);
                    setIsOpen(false);
                  }}
                  className={`text-2xl font-serif ${currentView === link.id ? 'text-gold-400' : 'text-primary-100'}`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsContactModalOpen(true);
                  setIsOpen(false);
                }}
                className="px-8 py-3 bg-gold-500 text-primary-900 font-serif text-xl hover:bg-gold-400 transition-colors"
              >
                联系我们
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default Navigation;