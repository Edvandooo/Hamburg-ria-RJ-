import React from 'react';
import { BurgerItem } from '../types/burger';

interface BottomBarProps {
  currentBurger: BurgerItem;
  currentIndex: number;
  total: number;
  onSelectIndex: (index: number) => void;
}

export const BottomBar: React.FC<BottomBarProps> = ({
  currentBurger,
  currentIndex,
  total,
  onSelectIndex,
}) => {
  return (
    <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2.5 text-center pointer-events-auto">
      {/* Editorial micro text */}
      <p className="text-[9px] sm:text-[10px] tracking-[0.24em] font-medium text-neutral-300 uppercase select-none transition-opacity duration-300">
        {currentBurger.microTitle}
      </p>

      {/* Carousel Indicator Dots */}
      <div className="flex items-center gap-2" role="tablist" aria-label="Burger selection carousel">
        {Array.from({ length: total }).map((_, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={idx}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectIndex(idx)}
              className={`transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 flex items-center justify-center ${
                isActive ? 'w-4 h-4' : 'w-2 h-2'
              }`}
              aria-label={`Slide ${idx + 1}`}
            >
              {isActive ? (
                <span className="w-2.5 h-2.5 rounded-full bg-white ring-2 ring-white/30 ring-offset-2 ring-offset-black" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 hover:bg-neutral-400 transition-colors" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

