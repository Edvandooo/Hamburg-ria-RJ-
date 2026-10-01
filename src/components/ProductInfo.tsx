import React, { useState } from 'react';
import { ChevronRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { BurgerItem } from '../types/burger';

interface ProductInfoProps {
  burger: BurgerItem;
  onAddToCart: (burger: BurgerItem) => void;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ burger, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(burger);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1400);
  };

  return (
    <div className="absolute left-6 sm:left-10 lg:left-14 bottom-14 sm:bottom-16 lg:bottom-20 z-30 max-w-[260px] sm:max-w-[300px] pointer-events-auto">
      {/* Product Title in White - Compact, bold, structured */}
      <motion.div
        key={`title-${burger.id}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mb-2 sm:mb-2.5"
      >
        <h2 className="text-white font-bold text-lg sm:text-xl lg:text-2xl leading-[1.08] tracking-tight uppercase">
          <span className="block">{burger.titleLine1}</span>
          <span className="block">{burger.titleLine2}</span>
        </h2>
      </motion.div>

      {/* Micro-Description - Tiny, uppercase, editorial */}
      <motion.div
        key={`desc-${burger.id}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="mb-4 sm:mb-5"
      >
        <p className="text-[9px] sm:text-[10px] text-neutral-400 font-medium tracking-[0.14em] uppercase leading-relaxed max-w-[210px]">
          {burger.tagline}
        </p>
        <div className="mt-1 flex items-center gap-2 text-[10px] text-neutral-300 font-semibold tabular-nums">
          <span>${burger.price.toFixed(2)}</span>
          <span className="text-neutral-600 font-normal">·</span>
          <span className="text-neutral-400 font-normal">{burger.calories}</span>
        </div>
      </motion.div>

      {/* Button: ADD TO BAG with arrow circle - Compact & refined */}
      <motion.button
        onClick={handleAdd}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 bg-[#f99619] hover:bg-[#ff9f24] text-neutral-950 font-bold text-[10px] sm:text-[11px] tracking-wider uppercase rounded-full shadow-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label={`Add ${burger.titleLine1} ${burger.titleLine2} to bag`}
      >
        <span>{isAdded ? 'ADDED' : 'ADD TO BAG'}</span>
        <span className="w-5 h-5 rounded-full bg-white text-neutral-900 flex items-center justify-center transition-transform">
          {isAdded ? (
            <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
          ) : (
            <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
          )}
        </span>
      </motion.button>
    </div>
  );
};
