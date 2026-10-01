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
    <div className="absolute left-4 sm:left-10 lg:left-14 bottom-8 sm:bottom-14 md:bottom-16 lg:bottom-20 z-40 max-w-[210px] xs:max-w-[250px] sm:max-w-[300px] pointer-events-auto">
      {/* Product Title in White - Compact, bold, structured */}
      <motion.div
        key={`title-${burger.id}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mb-1.5 sm:mb-2.5"
      >
        <h2 className="text-white font-bold text-base xs:text-lg sm:text-xl lg:text-2xl leading-[1.08] tracking-tight uppercase">
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
        className="mb-2.5 sm:mb-4 lg:mb-5"
      >
        <p className="text-[8.5px] xs:text-[9px] sm:text-[10px] text-neutral-400 font-medium tracking-[0.12em] sm:tracking-[0.14em] uppercase leading-relaxed max-w-[190px] sm:max-w-[210px]">
          {burger.tagline}
        </p>
        <div className="mt-1 sm:mt-1.5 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-neutral-300 font-semibold tabular-nums">
          <span className="text-[#f99619] font-bold">R$ {burger.price.toFixed(2).replace('.', ',')}</span>
          <span className="text-neutral-600 font-normal">·</span>
          <span className="text-neutral-400 font-normal">{burger.calories}</span>
        </div>
      </motion.div>

      {/* Button: ADICIONAR AO CARRINHO with arrow circle - Compact & refined */}
      <motion.button
        onClick={handleAdd}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 sm:gap-2.5 pl-3 sm:pl-4 pr-1 sm:pr-1.5 py-1 sm:py-1.5 bg-[#f99619] hover:bg-[#ff9f24] text-neutral-950 font-bold text-[9px] sm:text-[11px] tracking-wider uppercase rounded-full shadow-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
        aria-label={`Adicionar ${burger.titleLine1} ${burger.titleLine2} ao carrinho`}
      >
        <span>{isAdded ? 'ADICIONADO' : 'ADICIONAR AO CARRINHO'}</span>
        <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white text-neutral-900 flex items-center justify-center transition-transform">
          {isAdded ? (
            <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-600 stroke-[3]" />
          ) : (
            <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
          )}
        </span>
      </motion.button>
    </div>
  );
};
