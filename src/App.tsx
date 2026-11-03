/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ViewRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { OrderGatewayView } from './views/OrderGatewayView';
import { ServicesView } from './views/ServicesView';
import { RulesView } from './views/RulesView';
import { RoyalAttiresView } from './views/RoyalAttiresView';
import { FaqView } from './views/FaqView';
import { Part1View } from './views/Part1View';
import { Part2View } from './views/Part2View';
import { Part3View } from './views/Part3View';
import { Part4View } from './views/Part4View';
import { Part5View } from './views/Part5View';
import { ConfirmationView } from './views/ConfirmationView';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<ViewRoute>('home');

  // Sync with URL Hash on load & hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as ViewRoute;
      const validRoutes: ViewRoute[] = [
        'home', 'order', 'services', 'rules', 'royal-attires', 'faq',
        'part1', 'part2', 'part3', 'part4', 'part5', 'confirmation'
      ];
      if (validRoutes.includes(hash)) {
        setCurrentRoute(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (route: ViewRoute) => {
    setCurrentRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Spatial Limitations Rule:
  // Navbar is active ONLY on foundational informational pages (home, order, services, rules, royal-attires, faq, confirmation)
  // Navbar is COMPLETELY OMITTED from the multi-stage registration tunnel (part1 through part5) to block user exit paths!
  const isTunnelStage = ['part1', 'part2', 'part3', 'part4', 'part5'].includes(currentRoute);

  return (
    <div className="min-h-screen bg-[#070709] text-[#e2e2e8] flex flex-col justify-between selection:bg-[#c5a059]/40 selection:text-[#faebd7]">
      {/* Global Navigation Bar - Active ONLY on non-tunnel views */}
      {!isTunnelStage && (
        <Navbar currentRoute={currentRoute} onNavigate={handleNavigate} />
      )}

      {/* Main View Router Content */}
      <main className="flex-1 w-full">
        {currentRoute === 'home' && <HomeView onNavigate={handleNavigate} />}
        {currentRoute === 'order' && <OrderGatewayView onNavigate={handleNavigate} />}
        {currentRoute === 'services' && <ServicesView onNavigate={handleNavigate} />}
        {currentRoute === 'rules' && <RulesView onNavigate={handleNavigate} />}
        {currentRoute === 'royal-attires' && <RoyalAttiresView onNavigate={handleNavigate} />}
        {currentRoute === 'faq' && <FaqView onNavigate={handleNavigate} />}
        {currentRoute === 'part1' && <Part1View onNavigate={handleNavigate} />}
        {currentRoute === 'part2' && <Part2View onNavigate={handleNavigate} />}
        {currentRoute === 'part3' && <Part3View onNavigate={handleNavigate} />}
        {currentRoute === 'part4' && <Part4View onNavigate={handleNavigate} />}
        {currentRoute === 'part5' && <Part5View onNavigate={handleNavigate} />}
        {currentRoute === 'confirmation' && <ConfirmationView onNavigate={handleNavigate} />}
      </main>

      {/* Global Footer Architecture - Permanently active and visible at the base margin of EVERY single page */}
      <Footer />
    </div>
  );
}
