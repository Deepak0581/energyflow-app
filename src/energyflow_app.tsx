import React, { useState, useEffect, useRef } from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Sun, Zap, DollarSign, Users, Battery, Home, ShoppingCart, User, Bell, ArrowUp, ArrowDown, Leaf, MapPin, Clock, Star, CheckCircle, Eye, Settings, TrendingUp, X, Check, BarChart3 } from 'lucide-react';


const LoginForm = () => {
 const [localEmailOrPhone, setLocalEmailOrPhone] = useState('');
 const [localPassword, setLocalPassword] = useState('');
 const [localLoginMethod, setLocalLoginMethod] = useState('email');
 const [localShowPassword, setLocalShowPassword] = useState(false);
 const [localIsLoading, setLocalIsLoading] = useState(false);


 const handleLocalLogin = async () => {
   if (localLoginMethod === 'email') {
     if (!localEmailOrPhone.includes('@')) {
       alert('Please enter a valid email address with @');
       return;
     }
   }
  
   if (!localPassword) {
     alert('Please enter your password');
     return;
   }


   setLocalIsLoading(true);
   await new Promise(resolve => setTimeout(resolve, 1500));
   window.dispatchEvent(new CustomEvent('login-success'));
 };


 const handleEmailOrPhoneChange = (e) => {
   const value = e.target.value;
  
   if (localLoginMethod === 'phone') {
     const phoneRegex = /^[0-9\s\-\(\)\+]*$/;
     if (phoneRegex.test(value) || value === '') {
       setLocalEmailOrPhone(value);
     }
   } else {
     setLocalEmailOrPhone(value);
   }
 };


 const isLoginDisabled = () => {
   if (localIsLoading || !localPassword) return true;
  
   if (localLoginMethod === 'email') {
     return !localEmailOrPhone.includes('@') || localEmailOrPhone.length < 3;
   } else {
     return localEmailOrPhone.length < 10;
   }
 };


 return (
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


         <div className="space-y-4">
           <div className="flex bg-slate-700/50 rounded-xl p-1">
             <button
               type="button"
               onClick={() => {
                 setLocalLoginMethod('email');
                 setLocalEmailOrPhone('');
               }}
               className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                 localLoginMethod === 'email'
                   ? 'bg-emerald-500 text-slate-900'
                   : 'text-slate-300 hover:text-white'
               }`}
             >
               Email
             </button>
             <button
               type="button"
               onClick={() => {
                 setLocalLoginMethod('phone');
                 setLocalEmailOrPhone('');
               }}
               className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                 localLoginMethod === 'phone'
                   ? 'bg-emerald-500 text-slate-900'
                   : 'text-slate-300 hover:text-white'
               }`}
             >
               Phone
             </button>
           </div>


           <div>
             <input
               type={localLoginMethod === 'email' ? 'email' : 'tel'}
               placeholder={localLoginMethod === 'email' ? 'Enter your email' : 'Enter your phone number'}
               value={localEmailOrPhone}
               onChange={handleEmailOrPhoneChange}
               className={`w-full p-4 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400 focus:outline-none transition-colors ${
                 localLoginMethod === 'email' && localEmailOrPhone && !localEmailOrPhone.includes('@')
                   ? 'border-red-500 focus:border-red-400'
                   : 'border-slate-600 focus:border-emerald-500'
               }`}
             />
             {localLoginMethod === 'email' && localEmailOrPhone && !localEmailOrPhone.includes('@') && (
               <p className="text-red-400 text-xs mt-1">Email must contain @ symbol</p>
             )}
             {localLoginMethod === 'phone' && localEmailOrPhone && localEmailOrPhone.length < 10 && localEmailOrPhone.length > 0 && (
               <p className="text-orange-400 text-xs mt-1">Phone number should be at least 10 digits</p>
             )}
           </div>


           <div className="relative">
             <input
               type={localShowPassword ? 'text' : 'password'}
               placeholder="Enter your password"
               value={localPassword}
               onChange={(e) => setLocalPassword(e.target.value)}
               className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors pr-12"
             />
             <button
               type="button"
               onClick={() => setLocalShowPassword(!localShowPassword)}
               className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
             >
               <Eye className="w-5 h-5" />
             </button>
           </div>


           <button
             onClick={handleLocalLogin}
             disabled={isLoginDisabled()}
             className={`w-full rounded-xl font-bold transition-all shadow-lg px-4 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900 hover:from-emerald-400 hover:to-cyan-400 ${isLoginDisabled() ? 'opacity-50 cursor-not-allowed' : ''}`}
           >
             {localIsLoading ? 'Signing in...' : 'Sign in'}
           </button>


           <div className="text-center">
             <button className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
               Forgot password?
             </button>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};


const ParticlesBackground = () => {
 const canvasRef = useRef(null);
 const animationRef = useRef(null);
 const particlesRef = useRef([]);


 useEffect(() => {
   const canvas = canvasRef.current;
   if (!canvas) return;


   const ctx = canvas.getContext('2d');
  
   const resizeCanvas = () => {
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
   };


   resizeCanvas();


   const initParticles = () => {
     particlesRef.current = [];
     const particleCount = 50;
    
     for (let i = 0; i < particleCount; i++) {
       particlesRef.current.push({
         x: Math.random() * canvas.width,
         y: Math.random() * canvas.height,
         vx: (Math.random() - 0.5) * 0.5,
         vy: (Math.random() - 0.5) * 0.5,
         size: Math.random() * 2 + 1,
         opacity: Math.random() * 0.5 + 0.2,
         hue: Math.random() * 60 + 160
       });
     }
   };


   const animate = () => {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
    
     particlesRef.current.forEach((particle, i) => {
       particle.x += particle.vx;
       particle.y += particle.vy;
      
       if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
       if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      
       particle.x = Math.max(0, Math.min(canvas.width, particle.x));
       particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      
       ctx.beginPath();
       ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
       ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, ${particle.opacity})`;
       ctx.fill();
      
       particlesRef.current.slice(i + 1).forEach(otherParticle => {
         const dx = particle.x - otherParticle.x;
         const dy = particle.y - otherParticle.y;
         const distance = Math.sqrt(dx * dx + dy * dy);
        
         if (distance < 120) {
           const opacity = (1 - distance / 120) * 0.1;
           ctx.beginPath();
           ctx.moveTo(particle.x, particle.y);
           ctx.lineTo(otherParticle.x, otherParticle.y);
           ctx.strokeStyle = `hsla(${(particle.hue + otherParticle.hue) / 2}, 70%, 60%, ${opacity})`;
           ctx.lineWidth = 0.5;
           ctx.stroke();
         }
       });
     });
    
     animationRef.current = requestAnimationFrame(animate);
   };


   initParticles();
   animate();


   window.addEventListener('resize', resizeCanvas);


   return () => {
     window.removeEventListener('resize', resizeCanvas);
     if (animationRef.current) {
       cancelAnimationFrame(animationRef.current);
     }
   };
 }, []);


 return (
   <canvas
     ref={canvasRef}
     className="fixed inset-0 z-0 pointer-events-none"
     style={{ background: 'transparent' }}
   />
 );
};


const EnergyFlowApp = () => {
 const [currentTime, setCurrentTime] = useState(new Date());
 const [activeTab, setActiveTab] = useState('dashboard');
 const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Energy data - real-time updating
 const [energyProduction, setEnergyProduction] = useState(4.8);
 const [energyConsumption, setEnergyConsumption] = useState(3.2);
 const [batteryLevel, setBatteryLevel] = useState(75);
 const [totalSavingsYTD, setTotalSavingsYTD] = useState(847.50);
  const [smartBuyEnabled, setSmartBuyEnabled] = useState(true);
 const [smartSellEnabled, setSmartSellEnabled] = useState(true);
 const [realTimeUsers, setRealTimeUsers] = useState(247);
 const [tradingMode, setTradingMode] = useState('spot');
 const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);
 const [showTradeModal, setShowTradeModal] = useState(false);
 const [tradeDuration, setTradeDuration] = useState('2 hours');
 const [autoAccept, setAutoAccept] = useState(true);
 const [allowPartial, setAllowPartial] = useState(true);
 const [activeOffers, setActiveOffers] = useState([]);
 const [notifications, setNotifications] = useState([]);
 const [toasts, setToasts] = useState([]);
 const [updateCounter, setUpdateCounter] = useState(0);


 const [transactions, setTransactions] = useState([
   { id: 1, type: 'sold', amount: '2.1 kWh', energyEarned: '$0.58', buyer: 'Tom H.', time: '2h ago' },
   { id: 2, type: 'bought', amount: '1.5 kWh', totalPaid: '$0.45', seller: 'Grid', time: '5h ago' },
   { id: 3, type: 'sold', amount: '3.2 kWh', energyEarned: '$0.89', buyer: 'EcoGrid', time: '1d ago' }
 ]);


 // Static data
 const carbonSaved = 185.7;
 const communityRank = 12;
 const batteryCapacity = 13.5;
 const batteryCurrentStorage = (batteryLevel / 100) * batteryCapacity;
 const monthlyROI = 23.4;


 const hourlyRates = [
   { hour: 6, rate: 0.12, demand: 'Low' },
   { hour: 9, rate: 0.18, demand: 'Medium' },
   { hour: 12, rate: 0.28, demand: 'High' },
   { hour: 15, rate: 0.35, demand: 'Peak' },
   { hour: 18, rate: 0.42, demand: 'Peak' },
   { hour: 21, rate: 0.25, demand: 'Medium' }
 ];


 const currentHour = currentTime.getHours();
 const currentRate = hourlyRates.find(r => currentHour >= r.hour) || hourlyRates[0];
 const excessEnergy = Math.max(0, energyProduction - energyConsumption);
 const energySellingRate = currentRate.rate * 0.75;
 const isAutoSelling = smartSellEnabled && energyProduction > 0;


 // Real-time updates
 useEffect(() => {
   if (!isLoggedIn) return;
  
   const interval = setInterval(() => {
     setEnergyProduction(2 + Math.random() * 6);
     setEnergyConsumption(1.5 + Math.random() * 4);
     setBatteryLevel(30 + Math.random() * 60);
     setTotalSavingsYTD(prev => prev + Math.random() * 0.05);
     setUpdateCounter(prev => prev + 1);
   }, 1000);
  
   return () => clearInterval(interval);
 }, [isLoggedIn]);


 // Listen for login success
 useEffect(() => {
   const handleLoginSuccess = () => {
     setIsLoggedIn(true);
     showToast('Welcome back to EnergyFlow!', 'success');
   };


   window.addEventListener('login-success', handleLoginSuccess);
   return () => window.removeEventListener('login-success', handleLoginSuccess);
 }, []);


 // Update time every minute
 useEffect(() => {
   if (!isLoggedIn) return;
  
   const interval = setInterval(() => {
     setCurrentTime(new Date());
   }, 60000);
   return () => clearInterval(interval);
 }, [isLoggedIn]);


 const showToast = (message, type = 'info') => {
   const id = Date.now();
   const toast = { id, message, type };
   setToasts(prev => [...prev, toast]);
  
   setTimeout(() => {
     setToasts(prev => prev.filter(t => t.id !== id));
   }, 4000);
 };


 const removeToast = (id) => {
   setToasts(prev => prev.filter(t => t.id !== id));
 };


 const Toast = ({ message, type, onClose }) => (
   <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 flex items-center space-x-3 ${
     type === 'success' ? 'bg-emerald-500 text-white' :
     type === 'error' ? 'bg-red-500 text-white' :
     'bg-blue-500 text-white'
   }`}>
     {type === 'success' && <Check className="w-5 h-5" />}
     <span>{message}</span>
     <button onClick={onClose} className="ml-2">
       <X className="w-4 h-4" />
     </button>
   </div>
 );


 const Badge = ({ children, variant = 'default' }) => {
   const variants = {
     default: 'bg-slate-600/20 text-slate-400',
     success: 'bg-emerald-500/20 text-emerald-300',
     warning: 'bg-orange-500/20 text-orange-300',
     info: 'bg-cyan-500/20 text-cyan-300'
   };
  
   return (
     <span className={`text-xs px-2 py-1 rounded-full ${variants[variant]}`}>
       {children}
     </span>
   );
 };


 const Card = ({ children, className = '' }) => (
   <div className={`bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-600 hover:border-slate-500 transition-all duration-300 ${className}`}>
     {children}
   </div>
 );


 const Button = ({ children, variant = 'primary', size = 'md', onClick, className = '', disabled = false, ...props }) => {
   const variants = {
     primary: 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900 hover:from-emerald-400 hover:to-cyan-400',
     secondary: 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600',
     ghost: 'text-slate-300 hover:text-white hover:bg-slate-700/50'
   };
  
   const sizes = {
     sm: 'px-3 py-2 text-sm',
     md: 'px-4 py-3',
     lg: 'px-6 py-4 text-lg'
   };
  
   return (
     <button
       onClick={onClick}
       disabled={disabled}
       className={`rounded-xl font-bold transition-all shadow-lg ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
       {...props}
     >
       {children}
     </button>
   );
 };


 const Switch = ({ checked, onChange, label }) => (
   <div className="flex items-center justify-between">
     <span className="text-slate-300">{label}</span>
     <button
       onClick={() => onChange(!checked)}
       className={`w-12 h-6 rounded-full relative transition-all duration-200 ${
         checked ? 'bg-emerald-500' : 'bg-slate-600'
       }`}
     >
       <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-200 ${
         checked ? 'translate-x-6' : 'translate-x-0.5'
       }`}></div>
     </button>
   </div>
 );


 const Modal = ({ isOpen, onClose, title, children }) => {
   if (!isOpen) return null;
  
   return (
     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
       <div className="bg-slate-800 rounded-3xl p-6 max-w-md w-full border border-slate-700 shadow-2xl">
         <div className="flex items-center justify-between mb-6">
           <h3 className="text-xl font-bold text-white">{title}</h3>
           <button
             onClick={onClose}
             className="text-slate-400 hover:text-white transition-colors"
           >
             <X className="w-5 h-5" />
           </button>
         </div>
         {children}
       </div>
     </div>
   );
 };


 const BottomNavigation = () => {
   const navItems = [
     { id: 'dashboard', icon: Home, label: 'Home' },
     { id: 'trade', icon: ShoppingCart, label: 'Trade' },
     { id: 'portfolio', icon: BarChart3, label: 'Portfolio' },
     { id: 'settings', icon: Settings, label: 'Settings' }
   ];


   return (
     <nav className="fixed bottom-0 left-0 right-0 bg-slate-800/95 backdrop-blur-sm border-t border-slate-700 z-50">
       <div className="max-w-md mx-auto px-6">
         <div className="flex items-center justify-between py-3">
           {navItems.map(item => (
             <button
               key={item.id}
               onClick={() => setActiveTab(item.id)}
               className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-xl transition-all ${
                 activeTab === item.id
                   ? 'text-emerald-400 bg-emerald-500/10'
                   : 'text-slate-400 hover:text-white hover:bg-slate-700/30'
               }`}
             >
               <item.icon className="w-6 h-6 flex-shrink-0" />
               <span className="text-xs font-medium">{item.label}</span>
             </button>
           ))}
         </div>
       </div>
     </nav>
   );
 };


 const startTrading = () => {
   setShowTradeModal(true);
 };


 const createEnergyListing = () => {
   const newOffer = {
     id: Date.now(),
     amount: excessEnergy.toFixed(1),
     price: energySellingRate,
     duration: tradeDuration,
     autoAccept: autoAccept,
     allowPartial: allowPartial,
     status: 'active',
     created: new Date().toLocaleTimeString()
   };
  
   setActiveOffers(prev => [newOffer, ...prev]);
   setShowTradeModal(false);


   if (autoAccept) {
     setTimeout(() => {
       const buyerMatches = [
         { name: 'Sarah L.', amount: parseFloat(excessEnergy.toFixed(1)), price: energySellingRate },
         { name: 'Mike R.', amount: parseFloat((excessEnergy * 0.6).toFixed(1)), price: energySellingRate * 1.02 },
         { name: 'EcoGrid Coop', amount: parseFloat(excessEnergy.toFixed(1)), price: energySellingRate * 0.98 }
       ];


       const selectedBuyer = buyerMatches[Math.floor(Math.random() * buyerMatches.length)];
       const saleAmount = allowPartial ? selectedBuyer.amount : parseFloat(excessEnergy.toFixed(1));
       const salePrice = selectedBuyer.price;
       const totalEarning = saleAmount * salePrice;
       const platformFee = totalEarning * 0.02;
       const netEarning = totalEarning - platformFee;


       setTotalSavingsYTD(prev => prev + netEarning);


       const newTransaction = {
         id: Date.now(),
         type: 'sold',
         amount: `${saleAmount.toFixed(1)} kWh`,
         energyEarned: `$${netEarning.toFixed(2)}`,
         buyer: selectedBuyer.name,
         time: 'Just now'
       };


       setTransactions(prev => [newTransaction, ...prev.slice(0, 4)]);
       setActiveOffers(prev => prev.filter(offer => offer.id !== newOffer.id));
       showToast(`Sold ${saleAmount.toFixed(1)} kWh to ${selectedBuyer.name} for $${netEarning.toFixed(2)}!`, 'success');
       setEnergyProduction(prev => prev - (saleAmount / 24));


     }, 2000 + Math.random() * 3000);
   } else {
     showToast('Energy listing created successfully!', 'success');
   }
 };


 const renderContent = () => {
   switch (activeTab) {
     case 'dashboard':
       return (
         <div className="space-y-6">
           <div className="text-center mb-6">
             <h2 className="text-2xl font-bold text-white mb-2">Welcome back, DJ</h2>
             <div className="text-slate-400 text-sm mt-4">
               Generating ${(excessEnergy * energySellingRate * 24).toFixed(2)}/day
             </div>
             {isAutoSelling && (
               <div className="mt-3">
                 <Badge variant="success">Auto-selling active</Badge>
               </div>
             )}
           </div>


           <div className="grid grid-cols-2 gap-4">
             <div className="rounded-2xl p-3 border transition-all duration-300 hover:scale-105 bg-orange-500/10 border-orange-500/20 text-orange-400">
               <div className="flex items-center justify-between mb-2">
                 <Sun className="w-5 h-5" />
                 <span className="text-xs px-2 py-1 rounded-full bg-orange-500/20 text-orange-300">+12%</span>
               </div>
               <div className="text-lg font-bold text-white">
                 {energyProduction.toFixed(1)} kW
               </div>
               <div className="text-xs opacity-80">Production</div>
             </div>


             <div className="rounded-2xl p-3 border transition-all duration-300 hover:scale-105 bg-cyan-500/10 border-cyan-500/20 text-cyan-400">
               <div className="flex items-center justify-between mb-2">
                 <Zap className="w-5 h-5" />
                 <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300">-5%</span>
               </div>
               <div className="text-lg font-bold text-white">
                 {energyConsumption.toFixed(1)} kW
               </div>
               <div className="text-xs opacity-80">Consumption</div>
             </div>


             <div className="rounded-2xl p-3 border transition-all duration-300 hover:scale-105 bg-emerald-500/10 border-emerald-500/20 text-emerald-400">
               <div className="flex items-center justify-between mb-2">
                 <Battery className="w-5 h-5" />
                 <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300">{batteryCurrentStorage.toFixed(1)} kWh</span>
               </div>
               <div className="text-lg font-bold text-white">
                 {Math.round(batteryLevel)}%
               </div>
               <div className="text-xs opacity-80">Battery</div>
             </div>


             <div className="rounded-2xl p-3 border transition-all duration-300 hover:scale-105 bg-purple-500/10 border-purple-500/20 text-purple-400">
               <div className="flex items-center justify-between mb-2">
                 <DollarSign className="w-5 h-5" />
                 <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">+{monthlyROI}%</span>
               </div>
               <div className="text-lg font-bold text-white">
                 ${totalSavingsYTD.toFixed(2)}
               </div>
               <div className="text-xs opacity-80">YTD Earnings</div>
             </div>
           </div>


           <Card className="p-5">
             <div className="flex items-center justify-between mb-4">
               <h3 className="text-lg font-semibold text-white">Current Rate</h3>
               <Badge variant="info">{currentRate.demand}</Badge>
             </div>
             <div className="text-center">
               <div className="text-3xl font-bold text-emerald-400 mb-2">
                 ${currentRate.rate.toFixed(2)}/kWh
               </div>
               <div className="text-slate-400 text-sm mb-4">Grid buying price</div>
               <div className="bg-slate-700/30 rounded-xl p-3">
                 <div className="text-sm text-slate-300 mb-1">Your selling rate</div>
                 <div className="text-xl font-bold text-emerald-300">
                   ${energySellingRate.toFixed(2)}/kWh
                 </div>
               </div>
             </div>
           </Card>


           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <Button onClick={startTrading} className="w-full flex items-center justify-center space-x-2">
               <ShoppingCart className="w-5 h-5" />
               <span>Trade Energy</span>
             </Button>
             <Button
               variant="secondary"
               className="w-full flex items-center justify-center space-x-2"
               onClick={() => {
                 setShowAnalyticsModal(true);
                 showToast('Opening Analytics Dashboard...', 'info');
               }}
             >
               <TrendingUp className="w-5 h-5" />
               <span>View Analytics</span>
             </Button>
           </div>


           <Card className="p-5">
             <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
             <div className="space-y-3">
               {transactions.slice(0, 3).map((transaction) => (
                 <div key={transaction.id} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-xl">
                   <div className="flex items-center space-x-3">
                     <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                       transaction.type === 'sold' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-cyan-500/20 text-cyan-400'
                     }`}>
                       {transaction.type === 'sold' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                     </div>
                     <div>
                       <div className="text-sm font-medium text-white">
                         {transaction.type === 'sold' ? 'Sold' : 'Bought'} {transaction.amount}
                       </div>
                       <div className="text-xs text-slate-400">
                         {transaction.type === 'sold' ? `To ${transaction.buyer}` : `From ${transaction.seller}`} • {transaction.time}
                       </div>
                     </div>
                   </div>
                   <div className={`text-sm font-semibold ${
                     transaction.type === 'sold' ? 'text-emerald-400' : 'text-cyan-400'
                   }`}>
                     {transaction.type === 'sold' ? transaction.energyEarned : transaction.totalPaid}
                   </div>
                 </div>
               ))}
             </div>
           </Card>
         </div>
       );


     case 'trade':
       return (
         <div className="space-y-6">
           <div className="text-center">
             <h2 className="text-2xl font-bold text-white mb-2">Energy Exchange</h2>
             <div className="flex items-center justify-center space-x-4 mb-4">
               <Badge variant="success">Live Market</Badge>
               <Badge variant="info">${(currentRate.rate).toFixed(3)}/kWh</Badge>
             </div>
           </div>


           {/* Quick Actions - Most Used Feature First */}
           <div className="grid grid-cols-2 gap-3">
             <Button className="bg-emerald-500 hover:bg-emerald-400 flex items-center justify-center space-x-2">
               <ArrowUp className="w-4 h-4" />
               <span>Instant Buy</span>
             </Button>
             <Button onClick={startTrading} className="bg-red-500 hover:bg-red-400 flex items-center justify-center space-x-2">
               <ArrowDown className="w-4 h-4" />
               <span>Instant Sell</span>
             </Button>
           </div>


           {/* Market Price - Hero Information */}
           <Card className="p-4 bg-gradient-to-r from-slate-800/80 to-slate-700/80 border-slate-600">
             <div className="text-center">
               <div className="flex items-center justify-center space-x-2 mb-2">
                 <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                 <span className="text-xs text-slate-400 uppercase tracking-wide">Live Market Price</span>
               </div>
               <div className="text-3xl font-bold text-white mb-1">${currentRate.rate.toFixed(3)}</div>
               <div className="text-sm text-emerald-400 font-medium">+0.8% today</div>
               <div className="text-xs text-slate-400 mt-1">{currentRate.demand} demand</div>
             </div>
           </Card>


           {/* Live Order Book - Core Trading Data */}
           <Card className="p-4">
             <div className="flex items-center justify-between mb-4">
               <h3 className="text-lg font-semibold text-white">Live Order Book</h3>
               <div className="text-xs text-slate-400">Real-time</div>
             </div>


             <div className="grid grid-cols-2 gap-4 mb-4">
               {/* Ask (Sell) Orders */}
               <div>
                 <div className="text-sm font-semibold text-red-400 mb-3 text-center flex items-center justify-center space-x-1">
                   <span>ASK</span>
                   <span className="text-xs text-slate-400">(Sellers)</span>
                 </div>
                 <div className="space-y-2">
                   {[1.02, 1.015, 1.01, 1.005].map((multiplier, i) => (
                     <div key={i} className="flex justify-between items-center text-xs p-2 bg-red-500/5 hover:bg-red-500/10 rounded cursor-pointer transition-colors">
                       <span className="text-red-400 font-mono">${(currentRate.rate * multiplier).toFixed(3)}</span>
                       <span className="text-slate-300">{(2.1 + i * 0.7).toFixed(1)} kWh</span>
                     </div>
                   ))}
                 </div>
               </div>


               {/* Bid (Buy) Orders */}
               <div>
                 <div className="text-sm font-semibold text-emerald-400 mb-3 text-center flex items-center justify-center space-x-1">
                   <span>BID</span>
                   <span className="text-xs text-slate-400">(Buyers)</span>
                 </div>
                 <div className="space-y-2">
                   {[0.995, 0.99, 0.985, 0.98].map((multiplier, i) => (
                     <div key={i} className="flex justify-between items-center text-xs p-2 bg-emerald-500/5 hover:bg-emerald-500/10 rounded cursor-pointer transition-colors">
                       <span className="text-emerald-400 font-mono">${(currentRate.rate * multiplier).toFixed(3)}</span>
                       <span className="text-slate-300">{(2.7 - i * 0.2).toFixed(1)} kWh</span>
                     </div>
                   ))}
                 </div>
               </div>
             </div>


             {/* Spread Analysis */}
             <div className="bg-slate-700/30 rounded-lg p-3">
               <div className="flex justify-between items-center text-xs">
                 <span className="text-slate-400">Bid-Ask Spread</span>
                 <span className="text-cyan-400 font-mono">${((currentRate.rate * 1.005) - (currentRate.rate * 0.995)).toFixed(4)}</span>
               </div>
             </div>
           </Card>


           {/* Market Depth & Analytics */}
           <Card className="p-4">
             <h3 className="text-lg font-semibold text-white mb-4">Market Intelligence</h3>
            
             <div className="grid grid-cols-3 gap-3 mb-4">
               <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                 <div className="text-xs text-slate-400 mb-1">24h High</div>
                 <div className="text-sm font-bold text-emerald-400">${(currentRate.rate * 1.05).toFixed(3)}</div>
               </div>
               <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                 <div className="text-xs text-slate-400 mb-1">24h Low</div>
                 <div className="text-sm font-bold text-red-400">${(currentRate.rate * 0.92).toFixed(3)}</div>
               </div>
               <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                 <div className="text-xs text-slate-400 mb-1">Volume</div>
                 <div className="text-sm font-bold text-cyan-400">847 kWh</div>
               </div>
             </div>


             {/* Recent Trades Feed */}
             <div>
               <div className="flex items-center justify-between mb-2">
                 <div className="text-sm font-medium text-slate-300">Recent Trades</div>
                 <div className="text-xs text-slate-400">Last 10 minutes</div>
               </div>
               <div className="space-y-1 max-h-24 overflow-y-auto">
                 {[
                   { price: currentRate.rate * 1.001, size: 1.5, time: '12:34', type: 'buy' },
                   { price: currentRate.rate * 0.998, size: 2.3, time: '12:33', type: 'sell' },
                   { price: currentRate.rate * 1.002, size: 0.8, time: '12:32', type: 'buy' },
                   { price: currentRate.rate, size: 3.2, time: '12:31', type: 'buy' }
                 ].map((trade, i) => (
                   <div key={i} className="flex justify-between items-center text-xs p-2 bg-slate-700/20 rounded hover:bg-slate-700/30 transition-colors">
                     <span className={`font-mono ${trade.type === 'buy' ? 'text-emerald-400' : 'text-red-400'}`}>
                       ${trade.price.toFixed(3)}
                     </span>
                     <span className="text-slate-300">{trade.size} kWh</span>
                     <span className="text-slate-400">{trade.time}</span>
                   </div>
                 ))}
               </div>
             </div>
           </Card>


           {/* Advanced Trading Tools */}
           <Card className="p-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-blue-500/20">
             <div className="flex items-center space-x-3 mb-4">
               <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                 <TrendingUp className="w-4 h-4 text-white" />
               </div>
               <div>
                 <h3 className="text-lg font-semibold text-white">Smart Trading</h3>
                 <div className="text-xs text-slate-400">AI-powered order management</div>
               </div>
             </div>
            
             <div className="space-y-3">
               <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                 <div>
                   <div className="text-sm text-white font-medium">Auto-Arbitrage</div>
                   <div className="text-xs text-slate-400">Capture price differences across markets</div>
                 </div>
                 <Switch checked={smartBuyEnabled} onChange={setSmartBuyEnabled} label="" />
               </div>
              
               <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                 <div>
                   <div className="text-sm text-white font-medium">Dynamic Pricing</div>
                   <div className="text-xs text-slate-400">Adjust sell orders based on demand</div>
                 </div>
                 <Switch checked={smartSellEnabled} onChange={setSmartSellEnabled} label="" />
               </div>
             </div>


             <Button variant="secondary" className="w-full mt-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30">
               Configure Advanced Orders
             </Button>
           </Card>
         </div>
       );


     case 'portfolio':
       return (
         <div className="space-y-6">
           <div className="text-center">
             <h2 className="text-2xl font-bold text-white mb-2">Energy Portfolio</h2>
             <div className="text-slate-400 text-sm">Powered by Google AI & Cloud Infrastructure</div>
           </div>


           {/* Portfolio Overview */}
           <Card className="p-5 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 border-blue-500/20">
             <div className="flex items-center justify-between mb-4">
               <h3 className="text-lg font-semibold text-white">Total Portfolio Value</h3>
               <div className="flex items-center space-x-2">
                 <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                 <span className="text-xs text-slate-400">AI Optimized</span>
               </div>
             </div>
            
             <div className="text-center mb-4">
               <div className="text-3xl font-bold text-white mb-1">${(totalSavingsYTD * 3.36).toFixed(2)}</div>
               <div className="flex items-center justify-center space-x-2">
                 <div className="text-emerald-400 font-semibold">+{monthlyROI}% (30d)</div>
                 <div className="text-xs text-slate-400">• +$142.30 today</div>
               </div>
             </div>


             <div className="grid grid-cols-3 gap-3">
               <div className="text-center p-2 bg-white/5 rounded-lg">
                 <div className="text-xs text-slate-400">Energy Assets</div>
                 <div className="text-sm font-bold text-white">${(batteryCurrentStorage * 19.8).toFixed(0)}</div>
               </div>
               <div className="text-center p-2 bg-white/5 rounded-lg">
                 <div className="text-xs text-slate-400">Trading P&L</div>
                 <div className="text-sm font-bold text-emerald-400">+${(totalSavingsYTD * 0.68).toFixed(0)}</div>
               </div>
               <div className="text-center p-2 bg-white/5 rounded-lg">
                 <div className="text-xs text-slate-400">Carbon Credits</div>
                 <div className="text-sm font-bold text-cyan-400">${(carbonSaved * 0.12).toFixed(0)}</div>
               </div>
             </div>
           </Card>


           {/* AI Insights */}
           <Card className="p-5 bg-gradient-to-r from-purple-500/5 to-pink-500/5 border-purple-500/20">
             <div className="flex items-center space-x-3 mb-4">
               <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                 <span className="text-white font-bold text-sm">AI</span>
               </div>
               <div>
                 <h3 className="text-lg font-semibold text-white">Gemini AI Insights</h3>
                 <div className="text-xs text-slate-400">Real-time market analysis</div>
               </div>
             </div>
            
             <div className="space-y-3">
               <div className="p-3 bg-white/5 rounded-xl">
                 <div className="flex items-center justify-between mb-2">
                   <div className="text-sm font-medium text-emerald-400">Optimize Selling Window</div>
                   <Badge variant="success">High Confidence</Badge>
                 </div>
                 <div className="text-xs text-slate-300">Peak demand predicted at 6-8 PM today. Sell 2.3 kWh for +12% above market rate.</div>
               </div>
              
               <div className="p-3 bg-white/5 rounded-xl">
                 <div className="flex items-center justify-between mb-2">
                   <div className="text-sm font-medium text-cyan-400">Storage Strategy</div>
                   <Badge variant="info">Recommendation</Badge>
                 </div>
                 <div className="text-xs text-slate-300">Battery at {Math.round(batteryLevel)}%. Consider charging during 2-4 AM low-rate window.</div>
               </div>


               <div className="p-3 bg-white/5 rounded-xl">
                 <div className="flex items-center justify-between mb-2">
                   <div className="text-sm font-medium text-orange-400">Weather Impact</div>
                   <Badge variant="warning">Alert</Badge>
                 </div>
                 <div className="text-xs text-slate-300">Cloudy conditions tomorrow. Reduce solar production forecast by 18%.</div>
               </div>
             </div>


             <Button variant="secondary" className="w-full mt-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30">
               View Full AI Report
             </Button>
           </Card>


           {/* Holdings Breakdown */}
           <Card className="p-5">
             <h3 className="text-lg font-semibold text-white mb-4">Asset Allocation</h3>
             <div className="space-y-4">
               <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/40 transition-colors">
                 <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl flex items-center justify-center">
                     <Battery className="w-5 h-5 text-white" />
                   </div>
                   <div>
                     <div className="text-sm font-medium text-white">Energy Storage</div>
                     <div className="text-xs text-slate-400">{batteryCurrentStorage.toFixed(1)} kWh • Tesla Powerwall</div>
                   </div>
                 </div>
                 <div className="text-right">
                   <div className="text-sm font-semibold text-white">${(batteryCurrentStorage * 19.8).toFixed(0)}</div>
                   <div className="text-xs text-emerald-400">+12.3%</div>
                 </div>
               </div>


               <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/40 transition-colors">
                 <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
                     <Sun className="w-5 h-5 text-white" />
                   </div>
                   <div>
                     <div className="text-sm font-medium text-white">Solar Production Rights</div>
                     <div className="text-xs text-slate-400">6.2kW System • 12 panels</div>
                   </div>
                 </div>
                 <div className="text-right">
                   <div className="text-sm font-semibold text-white">$1,247</div>
                   <div className="text-xs text-emerald-400">+8.7%</div>
                 </div>
               </div>


               <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/40 transition-colors">
                 <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center">
                     <ShoppingCart className="w-5 h-5 text-white" />
                   </div>
                   <div>
                     <div className="text-sm font-medium text-white">Active Trading Positions</div>
                     <div className="text-xs text-slate-400">{activeOffers.length} open orders • Auto-managed</div>
                   </div>
                 </div>
                 <div className="text-right">
                   <div className="text-sm font-semibold text-white">$567</div>
                   <div className="text-xs text-emerald-400">+15.2%</div>
                 </div>
               </div>


               <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/40 transition-colors">
                 <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center">
                     <Leaf className="w-5 h-5 text-white" />
                   </div>
                   <div>
                     <div className="text-sm font-medium text-white">Carbon Credits</div>
                     <div className="text-xs text-slate-400">{carbonSaved.toFixed(1)} kg CO₂ offset</div>
                   </div>
                 </div>
                 <div className="text-right">
                   <div className="text-sm font-semibold text-white">${(carbonSaved * 0.12).toFixed(0)}</div>
                   <div className="text-xs text-cyan-400">+4.1%</div>
                 </div>
               </div>
             </div>
           </Card>


           {/* Performance Analytics */}
           <Card className="p-5">
             <div className="flex items-center justify-between mb-4">
               <h3 className="text-lg font-semibold text-white">Performance Analytics</h3>
               <div className="flex items-center space-x-1 text-xs text-slate-400">
                 <span>Powered by</span>
                 <span className="font-semibold text-blue-400">Google Cloud</span>
               </div>
             </div>
            
             <div className="grid grid-cols-2 gap-4">
               <div className="p-3 bg-slate-700/30 rounded-xl">
                 <div className="text-xs text-slate-400 mb-1">Efficiency Score</div>
                 <div className="flex items-center justify-between">
                   <div className="text-lg font-bold text-emerald-400">94/100</div>
                   <div className="text-xs text-emerald-400">Top 5%</div>
                 </div>
               </div>
              
               <div className="p-3 bg-slate-700/30 rounded-xl">
                 <div className="text-xs text-slate-400 mb-1">ROI Rank</div>
                 <div className="flex items-center justify-between">
                   <div className="text-lg font-bold text-cyan-400">#{communityRank}</div>
                   <div className="text-xs text-cyan-400">of 2,847</div>
                 </div>
               </div>
              
               <div className="p-3 bg-slate-700/30 rounded-xl">
                 <div className="text-xs text-slate-400 mb-1">Trading Win Rate</div>
                 <div className="flex items-center justify-between">
                   <div className="text-lg font-bold text-purple-400">87%</div>
                   <div className="text-xs text-purple-400">Excellent</div>
                 </div>
               </div>
              
               <div className="p-3 bg-slate-700/30 rounded-xl">
                 <div className="text-xs text-slate-400 mb-1">Carbon Impact</div>
                 <div className="flex items-center justify-between">
                   <div className="text-lg font-bold text-green-400">A+</div>
                   <div className="text-xs text-green-400">Elite</div>
                 </div>
               </div>
             </div>
           </Card>
         </div>
       );


     case 'settings':
       return (
         <div className="space-y-6">
           <div className="text-center">
             <h2 className="text-2xl font-bold text-white mb-2">Settings</h2>
             <div className="text-slate-400 text-sm">Manage your preferences</div>
           </div>


           <Card className="p-5">
             <h3 className="text-lg font-semibold text-white mb-4">Trading Settings</h3>
             <div className="space-y-4">
               <Switch
                 checked={smartBuyEnabled}
                 onChange={setSmartBuyEnabled}
                 label="Smart Buy (Auto-purchase when rates are low)"
               />
               <Switch
                 checked={smartSellEnabled}
                 onChange={setSmartSellEnabled}
                 label="Smart Sell (Auto-sell excess energy)"
               />
               <Switch
                 checked={autoAccept}
                 onChange={setAutoAccept}
                 label="Auto-accept trades within 5% of market rate"
               />
             </div>
           </Card>


           <Card className="p-5">
             <h3 className="text-lg font-semibold text-white mb-4">Account</h3>
             <div className="space-y-3">
               <div className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-xl">
                 <User className="w-5 h-5 text-slate-400" />
                 <span className="text-white">Profile Settings</span>
               </div>
               <div className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-xl">
                 <Bell className="w-5 h-5 text-slate-400" />
                 <span className="text-white">Notifications</span>
               </div>
             </div>
           </Card>


           <Card className="p-5">
             <h3 className="text-lg font-semibold text-white mb-4">System Information</h3>
             <div className="space-y-2 text-sm">
               <div className="flex justify-between">
                 <span className="text-slate-400">Battery Capacity</span>
                 <span className="text-white">{batteryCapacity} kWh</span>
               </div>
               <div className="flex justify-between">
                 <span className="text-slate-400">Solar Panels</span>
                 <span className="text-white">12 panels, 6.2kW</span>
               </div>
               <div className="flex justify-between">
                 <span className="text-slate-400">Grid Connection</span>
                 <span className="text-emerald-400">Active</span>
               </div>
             </div>
           </Card>
         </div>
       );


     default:
       return null;
   }
 };


 if (!isLoggedIn) {
   return <LoginForm />;
 }


 return (
   <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
     <ParticlesBackground />
    
     {toasts.map(toast => (
       <Toast
         key={toast.id}
         message={toast.message}
         type={toast.type}
         onClose={() => removeToast(toast.id)}
       />
     ))}


     <div className="max-w-md mx-auto min-h-screen bg-slate-900/50 backdrop-blur-sm relative z-10">
       <div className="sticky top-0 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 z-40">
         <div className="flex items-center justify-between p-4">
           <div className="flex items-center space-x-3">
             <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
               <Zap className="w-5 h-5 text-slate-900" />
             </div>
             <div>
               <div className="text-white font-semibold text-sm">EnergyFlow</div>
               <div className="text-slate-400 text-xs">{currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
             </div>
           </div>
           <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
             <Bell className="w-5 h-5" />
             {notifications.length > 0 && (
               <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full"></div>
             )}
           </button>
         </div>
       </div>


       <div className="p-6 pb-24">
         {renderContent()}
       </div>


       <BottomNavigation />


       <Modal
         isOpen={showTradeModal}
         onClose={() => setShowTradeModal(false)}
         title="Create Energy Listing"
       >
         <div className="space-y-4">
           <div>
             <label className="block text-sm text-slate-300 mb-2">Available Energy</label>
             <div className="text-2xl font-bold text-emerald-400">{excessEnergy.toFixed(1)} kWh</div>
           </div>
          
           <div>
             <label className="block text-sm text-slate-300 mb-2">Selling Rate</label>
             <div className="text-xl font-bold text-white">${energySellingRate.toFixed(3)}/kWh</div>
           </div>


           <div>
             <label className="block text-sm text-slate-300 mb-2">Duration</label>
             <select
               value={tradeDuration}
               onChange={(e) => setTradeDuration(e.target.value)}
               className="w-full p-3 bg-slate-700 border border-slate-600 rounded-xl text-white"
             >
               <option value="1 hour">1 hour</option>
               <option value="2 hours">2 hours</option>
               <option value="4 hours">4 hours</option>
               <option value="8 hours">8 hours</option>
             </select>
           </div>


           <div className="space-y-3">
             <Switch
               checked={autoAccept}
               onChange={setAutoAccept}
               label="Auto-accept offers"
             />
             <Switch
               checked={allowPartial}
               onChange={setAllowPartial}
               label="Allow partial fills"
             />
           </div>


           <div className="border-t border-slate-700 pt-4">
             <div className="flex justify-between text-sm mb-2">
               <span className="text-slate-400">Gross earnings</span>
               <span className="text-emerald-400 font-semibold">
                 ${(excessEnergy * energySellingRate).toFixed(2)}
               </span>
             </div>
             <div className="flex justify-between text-xs text-slate-500 mb-2">
               <span>Platform fee (2%)</span>
               <span>-${(excessEnergy * energySellingRate * 0.02).toFixed(2)}</span>
             </div>
             <div className="flex justify-between text-sm border-t border-slate-600 pt-2">
               <span className="text-slate-300 font-semibold">Net earnings</span>
               <span className="text-emerald-400 font-bold">
                 ${((excessEnergy * energySellingRate) * 0.98).toFixed(2)}
               </span>
             </div>
             {autoAccept && (
               <div className="mt-3 p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                 <div className="text-xs text-emerald-400 font-medium">Auto-Trading Enabled</div>
                 <div className="text-xs text-slate-400">Your energy will be automatically matched with buyers</div>
               </div>
             )}
           </div>


           <Button onClick={createEnergyListing} className="w-full">
             {autoAccept ? 'Start Auto-Trading' : 'Create Listing'}
           </Button>
         </div>
       </Modal>


       <Modal
         isOpen={showAnalyticsModal}
         onClose={() => setShowAnalyticsModal(false)}
         title="Analytics Dashboard"
       >
         <div className="space-y-4">
           <div className="grid grid-cols-2 gap-3">
             <div className="text-center p-3 bg-slate-700/30 rounded-xl">
               <div className="text-lg font-bold text-emerald-400">{carbonSaved} kg</div>
               <div className="text-xs text-slate-400">CO₂ Saved</div>
             </div>
             <div className="text-center p-3 bg-slate-700/30 rounded-xl">
               <div className="text-lg font-bold text-cyan-400">
                 ${totalSavingsYTD.toFixed(2)}
               </div>
               <div className="text-xs text-slate-400">YTD Earnings</div>
             </div>
           </div>
          
           <div className="text-center p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
             <div className="text-sm text-emerald-400 mb-1">Community Impact</div>
             <div className="text-lg font-bold text-white">Top 5% contributor</div>
             <div className="text-xs text-slate-400">You're helping build a greener future</div>
           </div>


           <Button variant="secondary" onClick={() => setShowAnalyticsModal(false)} className="w-full">
             View Full Report
           </Button>
         </div>
       </Modal>
     </div>
   </div>
 );
};


export default EnergyFlowApp;