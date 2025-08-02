import React, { useState, useEffect, useRef } from 'react';
import { Sun, Zap, DollarSign, Battery, Home, ShoppingCart, User, Bell, ArrowUp, ArrowDown, Settings, TrendingUp, X, Check, BarChart3, Eye } from 'lucide-react';

const EnergyFlowApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [energyProduction, setEnergyProduction] = useState(4.8);
  const [energyConsumption, setEnergyConsumption] = useState(3.2);
  const [batteryLevel, setBatteryLevel] = useState(75);
  const [totalSavingsYTD, setTotalSavingsYTD] = useState(847.50);

  const LoginForm = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-600 p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-slate-900" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">EnergyFlow</h1>
            <p className="text-slate-400">Trade energy with your community</p>
          </div>
          <button
            onClick={() => setIsLoggedIn(true)}
            className="w-full rounded-xl font-bold transition-all shadow-lg px-4 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900 hover:from-emerald-400 hover:to-cyan-400"
          >
            Enter Demo
          </button>
        </div>
      </div>
    </div>
  );

  if (!isLoggedIn) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-md mx-auto min-h-screen bg-slate-900/50 backdrop-blur-sm">
        <div className="p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Welcome to EnergyFlow</h2>
            <p className="text-slate-400">Demo Energy Trading Platform</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="rounded-2xl p-4 bg-orange-500/10 border border-orange-500/20">
              <div className="flex items-center justify-between mb-2">
                <Sun className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-lg font-bold text-white">{energyProduction.toFixed(1)} kW</div>
              <div className="text-sm text-orange-400">Production</div>
            </div>
            
            <div className="rounded-2xl p-4 bg-cyan-500/10 border border-cyan-500/20">
              <div className="flex items-center justify-between mb-2">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-lg font-bold text-white">{energyConsumption.toFixed(1)} kW</div>
              <div className="text-sm text-cyan-400">Consumption</div>
            </div>
            
            <div className="rounded-2xl p-4 bg-emerald-500/10 border border-emerald-500/20">
              <div className="flex items-center justify-between mb-2">
                <Battery className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-lg font-bold text-white">{batteryLevel}%</div>
              <div className="text-sm text-emerald-400">Battery</div>
            </div>
            
            <div className="rounded-2xl p-4 bg-purple-500/10 border border-purple-500/20">
              <div className="flex items-center justify-between mb-2">
                <DollarSign className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-lg font-bold text-white">${totalSavingsYTD.toFixed(2)}</div>
              <div className="text-sm text-purple-400">YTD Earnings</div>
            </div>
          </div>

          <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-600">
            <h3 className="text-lg font-semibold text-white mb-4">🎉 Demo Successfully Deployed!</h3>
            <p className="text-slate-300 text-sm mb-4">
              Your EnergyFlow app is now live on Netlify! This is a simplified version showing the core concept.
            </p>
            <div className="text-xs text-slate-400">
              ✅ Private GitHub Repository<br/>
              ✅ Live Netlify Deployment<br/>
              ✅ Ready for Portfolio<br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyFlowApp;
