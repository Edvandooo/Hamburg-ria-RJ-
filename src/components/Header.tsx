import React from 'react';
import { Share2, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenMenu: () => void;
  onOpenCart: () => void;
  cartCount: number;
  onShare: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenMenu,
  onOpenCart,
  cartCount,
  onShare,
}) => {
  const navItems = ['HOME', 'BURGERS', 'SNACKS', 'DRINKS', 'CONTACTS'];

  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-6 sm:px-10 pt-6 sm:pt-8 flex items-center justify-between pointer-events-auto">
      {/* Brand Logo - Minimalist circular stamp matching reference blueprint */}
      <button
        onClick={() => setActiveTab('HOME')}
        className="flex items-center gap-2 group text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
        aria-label="Bull & Bun Craft Burgers Home"
      >
        <div className="relative w-10 h-10 rounded-full border border-white/80 flex flex-col items-center justify-center p-1 group-hover:border-amber-400 transition-colors">
          {/* Top bun outline */}
          <div className="w-5 h-2 border-t-2 border-x-2 border-white rounded-t-full group-hover:border-amber-400 transition-colors" />
          {/* Seeds dots */}
          <div className="flex gap-0.5 my-[1px]">
            <span className="w-0.5 h-0.5 bg-white rounded-full opacity-80" />
            <span className="w-0.5 h-0.5 bg-white rounded-full opacity-80" />
            <span className="w-0.5 h-0.5 bg-white rounded-full opacity-80" />
          </div>
          {/* Patty & bottom bun */}
          <div className="w-5 h-[2px] bg-white rounded-full my-[1px] group-hover:bg-amber-400 transition-colors" />
          <div className="w-4 h-1 border-b-2 border-x-2 border-white rounded-b-md group-hover:border-amber-400 transition-colors" />
          <span className="text-[6px] tracking-widest font-black uppercase text-white scale-75 group-hover:text-amber-400">
            CRAFT
          </span>
        </div>
      </button>

      {/* Center Navigation - Tiny uppercase, letter-spaced, minimal */}
      <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
        {navItems.map((item) => {
          const isActive = activeTab === item;
          return (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`text-[10px] lg:text-[11px] font-medium tracking-[0.22em] uppercase transition-colors relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 ${
                isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {item}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#f99619] rounded-full" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Top Right Controls - Hamburger button with share icon below it matching reference */}
      <div className="flex items-center gap-3">
        {cartCount > 0 && (
          <button
            onClick={onOpenCart}
            className="relative p-1.5 text-neutral-300 hover:text-white transition-colors focus:outline-none"
            title="Shopping Bag"
            aria-label={`Shopping bag with ${cartCount} items`}
          >
            <ShoppingBag className="w-4 h-4 text-[#f99619]" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#f99619] text-black text-[8px] font-bold rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </button>
        )}

        <div className="flex flex-col items-center gap-2">
          {/* Minimalist Hamburger Menu Trigger */}
          <button
            onClick={onOpenMenu}
            className="p-1 flex flex-col justify-center items-end gap-1 text-white hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
            aria-label="Open navigation menu"
          >
            <span className="w-5 h-[2px] bg-current rounded-full" />
            <span className="w-3.5 h-[2px] bg-current rounded-full transition-all group-hover:w-5" />
          </button>

          {/* Share Icon below hamburger */}
          <button
            onClick={onShare}
            className="p-1 text-neutral-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
            title="Share Product"
            aria-label="Share product"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
