import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BurgerItem } from '../types/burger';

interface HeroDisplayProps {
  currentBurger: BurgerItem;
  direction: number;
}

export const HeroDisplay: React.FC<HeroDisplayProps> = ({ currentBurger, direction }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none overflow-hidden">
      {/* 
        LAYER 1: GIANT GRAPHIC WORDMARK "BURGERS"
        Fica visualmente atrás do hamburger, exatamente como na referência.
        Fonte sans-serif condensada ultra-bold branca (Bebas Neue).
      */}
      <div 
        className="absolute inset-x-0 top-1/2 -translate-y-[62%] sm:-translate-y-[64%] md:-translate-y-[66%] flex items-center justify-center z-10 pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="font-display font-bold text-[25vw] sm:text-[21vw] md:text-[18.5vw] lg:text-[17vw] xl:text-[16rem] text-white leading-none tracking-[0.01em] uppercase select-none opacity-100 whitespace-nowrap">
          BURGERS
        </span>
      </div>

      {/* 
        LAYER 2: MAIN PRODUCT OVERLAY (BURGER + FRIES ON WOODEN BOARD)
        PNG com fundo transparente perfeitamente integrado ao fundo preto.
        Fisicamente sobreposto ao texto gigante "BURGERS", criando profundidade real.
      */}
      <div className="relative z-20 w-full max-w-[360px] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[780px] px-4 flex items-center justify-center pointer-events-auto mt-4 sm:mt-8 md:mt-12">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentBurger.id}
            custom={direction}
            initial={{
              opacity: 0,
              scale: 0.94,
              x: direction > 0 ? 40 : -40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              x: direction > 0 ? -40 : 40,
            }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative flex items-center justify-center w-full"
          >
            {/* The Real Transparent PNG Product Photography */}
            <div className="relative group max-w-full">
              <img
                src={currentBurger.image}
                alt={currentBurger.alt}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[48vh] sm:max-h-[54vh] md:max-h-[58vh] lg:max-h-[62vh] object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] filter contrast-[1.03] brightness-[1.01]"
              />

              {/* Natural soft contact shadow beneath the board */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/80 blur-xl rounded-full -z-10" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
