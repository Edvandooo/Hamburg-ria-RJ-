import React from 'react';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { BurgerItem } from '../types/burger';

interface SecondaryNavProps {
  currentIndex: number;
  total: number;
  nextBurger: BurgerItem;
  onNext: () => void;
  onPrev: () => void;
  onSelectNext: () => void;
}

export const SecondaryNav: React.FC<SecondaryNavProps> = ({
  currentIndex,
  total,
  nextBurger,
  onNext,
  onPrev,
  onSelectNext,
}) => {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30 flex items-center gap-3 sm:gap-4 pl-4 pointer-events-auto">
      {/* Navigation Chevrons - Stacked minimal chevrons matching reference blueprint */}
      <div className="flex flex-col items-center gap-2">
        <button
          onClick={onPrev}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-neutral-700/80 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-300 hover:text-white flex items-center justify-center transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
          aria-label="Previous burger"
          title="Previous item"
        >
          <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

        <button
          onClick={onNext}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-neutral-700/80 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-300 hover:text-white flex items-center justify-center transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
          aria-label="Next burger"
          title="Next item"
        >
          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>

      {/* 
        Next Burger Thumbnail Preview
        Flutuando naturalmente sem caixa/borda sólida, cortado pela borda direita
      */}
      <button
        onClick={onSelectNext}
        className="group relative flex items-center focus:outline-none text-left transition-transform duration-300 hover:scale-105"
        aria-label={`Switch to ${nextBurger.titleLine1} ${nextBurger.titleLine2}`}
        title={`Next: ${nextBurger.titleLine1} ${nextBurger.titleLine2}`}
      >
        <div className="w-24 sm:w-32 md:w-40 lg:w-48 h-24 sm:h-32 md:h-40 lg:h-48 flex items-center justify-center relative translate-x-6 sm:translate-x-10 pointer-events-auto">
          <img
            src={nextBurger.image}
            alt={nextBurger.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)] brightness-95 group-hover:brightness-110 group-hover:scale-105 transition-all duration-300"
          />
        </div>
      </button>
    </div>
  );
};
