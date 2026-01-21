
import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import TradeInCalculator from './components/TradeInCalculator';
import Simulator from './components/Simulator';
import ResponseGenerator from './components/ResponseGenerator';
import Cart from './components/Cart';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('catalog');
  const [selectedProductForSim, setSelectedProductForSim] = useState<Product | undefined>(undefined);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleSelectProduct = (product: Product) => {
    setSelectedProductForSim(product);
    setCurrentTab('simulator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product: Product) => {
    const newItem: CartItem = {
      cartId: Math.random().toString(36).substr(2, 9),
      product: product
    };
    setCartItems(prev => [...prev, newItem]);
    // Feedback visual opcional ou navegação
  };

  const removeFromCart = (cartId: string) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  const clearCart = () => setCartItems([]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20">
      <Header 
        currentTab={currentTab} 
        onTabChange={setCurrentTab} 
        cartCount={cartItems.length} 
      />
      
      <main className="container mx-auto px-4 py-8">
        {currentTab === 'catalog' && (
          <div className="animate-fadeIn">
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight">Nosso Catálogo</h2>
              <p className="text-slate-400 text-lg">Produtos Apple & Tecnologia com Garantia e Procedência</p>
              <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            </div>
            <ProductList onSelectProduct={handleSelectProduct} onAddToCart={addToCart} />
          </div>
        )}

        {currentTab === 'cart' && (
          <Cart 
            items={cartItems} 
            onRemove={removeFromCart} 
            onClear={clearCart}
          />
        )}

        {currentTab === 'tradein' && (
           <div className="animate-fadeIn">
              <div className="mb-10 text-center">
                <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight">Tabela de Troca</h2>
                <p className="text-slate-400 text-lg">Valorizamos seu iPhone usado na compra de um novo</p>
                <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
              </div>
             <TradeInCalculator />
           </div>
        )}

        {currentTab === 'simulator' && (
           <div className="animate-fadeIn">
              <div className="mb-10 text-center">
                <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight">Simulador</h2>
                <p className="text-slate-400 text-lg">Calcule entradas, trocas e parcelamento</p>
                <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
              </div>
             <Simulator initialProduct={selectedProductForSim} />
           </div>
        )}

        {currentTab === 'generator' && (
           <ResponseGenerator />
        )}
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 mt-20 py-12 text-center">
        <p className="text-white font-bold text-xl tracking-tight">FITCH TECNOLOGIA</p>
        <p className="text-slate-500 text-sm mt-2">© {new Date().getFullYear()} - Especialistas em Apple & Eletrônicos Premium.</p>
        <div className="flex justify-center gap-4 mt-6 text-slate-600 text-xs">
          <span>Qualidade</span>
          <span>•</span>
          <span>Confiança</span>
          <span>•</span>
          <span>Garantia</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
