import React from 'react';
import { X, MapPin, Clock, Phone, ArrowUpRight } from 'lucide-react';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  activeTab,
  onSelectTab,
}) => {
  if (!isOpen) return null;

  const links = [
    { name: 'HOME', desc: 'Main signature showcase & seasonal specials' },
    { name: 'BURGERS', desc: 'Craft smash patties, fried buttermilk & wagyu' },
    { name: 'SNACKS', desc: 'Wire-basket skin-on fries, onion rings & tenders' },
    { name: 'DRINKS', desc: 'Artisan craft shakes, cold-brews & house sodas' },
    { name: 'CONTACTS', desc: 'Downtown flagships, table reservations & catering' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-lg h-full bg-[#0a0a0a] text-white border-l border-neutral-800 p-8 sm:p-12 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
        {/* Top bar with close button */}
        <div className="flex items-center justify-between pb-8 border-b border-neutral-900">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f99619]" />
            <span className="text-xs font-bold tracking-[0.25em] text-neutral-400 uppercase">
              BULL & BUN DIRECTORY
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Navigation Links */}
        <div className="py-8 space-y-6">
          {links.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <button
                key={link.name}
                onClick={() => {
                  onSelectTab(link.name);
                  onClose();
                }}
                className="w-full text-left group flex items-start justify-between py-2 transition-transform duration-200 hover:translate-x-2 focus:outline-none"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className={`font-display text-3xl sm:text-4xl tracking-wider uppercase transition-colors ${
                      isActive ? 'text-[#f99619]' : 'text-neutral-100 group-hover:text-[#f99619]'
                    }`}>
                      {link.name}
                    </span>
                    {isActive && (
                      <span className="text-[10px] tracking-widest font-bold px-2 py-0.5 bg-[#f99619] text-black rounded-full uppercase">
                        ACTIVE
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-500 mt-1 max-w-xs">{link.desc}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" />
              </button>
            );
          })}
        </div>

        {/* Editorial Footer Info */}
        <div className="pt-8 border-t border-neutral-900 space-y-4 text-xs text-neutral-400">
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-[#f99619]" />
            <span>482 Broadway Blvd, Soho District, NY</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-[#f99619]" />
            <span>Mon – Sun: 11:30 AM — 01:00 AM</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#f99619]" />
            <span>+1 (212) 555-0198 · orders@bullandbun.craft</span>
          </div>
        </div>
      </div>
    </div>
  );
};
