/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { BURGERS_DATA } from './data/burgers';
import { BurgerItem, CartItem } from './types/burger';
import { Header } from './components/Header';
import { HeroDisplay } from './components/HeroDisplay';
import { ProductInfo } from './components/ProductInfo';
import { SecondaryNav } from './components/SecondaryNav';
import { BottomBar } from './components/BottomBar';
import { CartDrawer } from './components/CartDrawer';
import { MenuDrawer } from './components/MenuDrawer';
import { ShareModal } from './components/ShareModal';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [activeTab, setActiveTab] = useState('BURGERS');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const total = BURGERS_DATA.length;
  const currentBurger = BURGERS_DATA[currentIndex];
  const nextIndex = (currentIndex + 1) % total;
  const nextBurger = BURGERS_DATA[nextIndex];

  // Carousel Navigation Handlers
  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleSelectIndex = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isCartOpen || isMenuOpen || isShareOpen) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isCartOpen, isMenuOpen, isShareOpen]);

  // Cart Management
  const handleAddToCart = (burger: BurgerItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.burger.id === burger.id);
      if (existing) {
        return prevCart.map((item) =>
          item.burger.id === burger.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { burger, quantity: 1, addedAt: Date.now() }];
    });
  };

  const handleUpdateQuantity = (burgerId: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.burger.id === burgerId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (burgerId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.burger.id !== burgerId));
  };

  const handleClearCart = () => setCart([]);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="min-h-screen w-full bg-[#080706] text-white flex flex-col justify-between relative overflow-hidden select-none font-body">
      {/* Subtle central radial highlight for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,_rgba(28,25,23,0.5)_0%,_rgba(5,5,5,0.95)_100%)] pointer-events-none" />

      {/* 1. Header (Logo, Minimalist Nav, Hamburger & Control) */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
        onShare={() => setIsShareOpen(true)}
      />

      {/* 2. Main Hero Area (Giant "BURGERS" text + Centered Burger on cutting board with Fries) */}
      <div className="relative flex-1 w-full h-full min-h-[520px] flex items-center justify-center">
        <HeroDisplay
          currentBurger={currentBurger}
          direction={direction}
        />

        {/* 3. Product Info (Bottom-left title, micro-description, ADD TO BAG button) */}
        <ProductInfo
          burger={currentBurger}
          onAddToCart={handleAddToCart}
        />

        {/* 4. Secondary Products Nav (Right side arrows & next burger preview thumbnail) */}
        <SecondaryNav
          currentIndex={currentIndex}
          total={total}
          nextBurger={nextBurger}
          onNext={handleNext}
          onPrev={handlePrev}
          onSelectNext={handleNext}
        />
      </div>

      {/* 5. Bottom Bar (Micro-text & pagination dots only - no socials, no languages) */}
      <BottomBar
        currentBurger={currentBurger}
        currentIndex={currentIndex}
        total={total}
        onSelectIndex={handleSelectIndex}
      />

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Editorial Menu Drawer */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
      />

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        burger={currentBurger}
      />
    </main>
  );
}
