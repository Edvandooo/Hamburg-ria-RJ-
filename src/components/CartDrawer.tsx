import React from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types/burger';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (burgerId: string, delta: number) => void;
  onRemoveItem: (burgerId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.burger.price * item.quantity, 0);
  const delivery = subtotal > 30 ? 0 : 3.50;
  const total = subtotal > 0 ? subtotal + delivery : 0;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md h-full bg-[#0d0d0d] text-white border-l border-neutral-800 p-6 flex flex-col justify-between shadow-2xl relative animate-in slide-in-from-right duration-300"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-neutral-800">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#f99619]" />
            <h3 className="font-bold text-lg tracking-wide uppercase">YOUR BAG</h3>
            <span className="text-xs text-neutral-400">({items.reduce((sum, i) => sum + i.quantity, 0)} items)</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
            aria-label="Close bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto py-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <ShoppingBag className="w-12 h-12 text-neutral-700 mb-3" />
              <p className="text-neutral-400 text-sm font-medium">Your bag is currently empty.</p>
              <p className="text-neutral-600 text-xs mt-1">Select any signature craft burger to add to your order.</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.burger.id}
                className="flex items-center gap-4 bg-neutral-900/60 p-3 rounded-xl border border-neutral-800/80"
              >
                <img
                  src={item.burger.image}
                  alt={item.burger.alt}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 object-contain rounded-lg bg-black/40 p-1"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-white truncate uppercase">
                    {item.burger.titleLine1} {item.burger.titleLine2}
                  </h4>
                  <p className="text-xs text-neutral-400 font-medium mt-0.5 tabular-nums">
                    ${item.burger.price.toFixed(2)} each
                  </p>
                  
                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.burger.id, -1)}
                      className="w-6 h-6 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-300 flex items-center justify-center transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-semibold text-white px-1.5 tabular-nums">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.burger.id, 1)}
                      className="w-6 h-6 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-300 flex items-center justify-center transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between self-stretch">
                  <button
                    onClick={() => onRemoveItem(item.burger.id)}
                    className="text-neutral-500 hover:text-red-400 p-1 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-sm font-bold text-amber-400 tabular-nums">
                    ${(item.burger.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout */}
        {items.length > 0 && (
          <div className="pt-4 border-t border-neutral-800 space-y-3">
            <div className="space-y-1.5 text-xs text-neutral-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-white tabular-nums">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="font-semibold text-white tabular-nums">
                  {delivery === 0 ? 'FREE' : `$${delivery.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-neutral-800/80 text-sm font-bold text-white">
                <span>Total</span>
                <span className="text-[#f99619] tabular-nums">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => {
                alert(`Order submitted for ${items.length} items! Total: $${total.toFixed(2)}`);
                onClearCart();
                onClose();
              }}
              className="w-full py-3 bg-[#f99619] hover:bg-[#ff9f24] text-neutral-950 font-bold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
