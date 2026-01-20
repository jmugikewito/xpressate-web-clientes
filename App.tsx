
import React, { useState } from 'react';
import { 
  Search, UserPlus, LogIn, TrendingUp, AlertTriangle, Users, Building, 
  ShieldCheck, CreditCard, Star, FileText, ChevronRight, Upload, 
  CheckCircle2, Lock, Globe, Share2, Map, Award, Briefcase, 
  Calendar, Zap, BarChart3, MessageSquare, Menu
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import AsiaChat from './components/AsiaChat';
import PlanMatrix from './components/PlanMatrix';
import DashboardView from './views/DashboardView';
import TrafficView from './views/TrafficView';
import PublicProfileView from './views/PublicProfileView';
import EcosystemView from './views/EcosystemView';
import SettingsView from './views/SettingsView';
import { MASTER_PLAN_MATRIX, PLAN_TIERS_DISPLAY } from './constants';

type AppState = 'landing' | 'register' | 'validating' | 'success_credentials' | 'login_setup' | 'plan_selection' | 'payment' | 'authenticated';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>('landing');
  const [currentView, setCurrentView] = useState('dashboard');
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // Form states
  const [formData, setFormData] = useState({ ruc: '', razonSocial: '', representante: '', correo: '', telefono: '' });
  const [paymentData, setPaymentData] = useState({ number: '', expMonth: '', expYear: '', cvc: '' });

  const handleNumericInput = (val: string, length: number) => val.replace(/\D/g, '').slice(0, length);

  // Fix: Implemented toPayment function to transition to the payment state with the selected plan
  const toPayment = (tier: string) => {
    setSelectedPlan(tier);
    setState('payment');
  };

  // Fix: Implemented login function to complete the registration/payment flow and authenticate the user
  const login = () => {
    setState('authenticated');
  };

  if (state === 'landing') {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black opacity-80 blur-[120px]"></div>
        <div className="flex-1 flex flex-col items-center justify-center relative z-10 max-w-2xl w-full text-center px-6">
          <div className="space-y-8 mb-16">
            <div className="w-32 h-32 bg-white/5 backdrop-blur-xl rounded-[3rem] mx-auto flex items-center justify-center shadow-2xl border border-white/10 transform hover:scale-110 transition-all duration-500">
              <span className="text-6xl font-black text-white italic tracking-tighter">XP</span>
            </div>
            <div className="space-y-3">
              <h1 className="text-7xl font-black text-white tracking-tighter">XPRESSATE</h1>
              <p className="text-slate-400 font-medium text-xl tracking-tight">B2B SAAS, mejora continua entre personas y empresas</p>
            </div>
          </div>
          <div className="flex flex-col space-y-5 w-full max-w-sm mx-auto">
            <button onClick={() => setState('register')} className="w-full bg-white text-black py-6 rounded-[2rem] font-black text-lg hover:bg-slate-100 transition-all flex items-center justify-center group">
              Registrar mi empresa <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => setState('validating')} className="w-full bg-slate-900/40 backdrop-blur-md border border-slate-700/50 text-white py-5 rounded-[2rem] font-bold text-lg hover:bg-slate-800/60 transition-all">
              Validar una suscripción
            </button>
          </div>
        </div>
        <footer className="w-full p-10 flex justify-center relative z-10 border-t border-white/5">
          <button onClick={() => setState('login_setup')} className="text-slate-500 hover:text-white font-bold flex items-center space-x-2 transition-all text-xs uppercase tracking-widest px-8 py-3 rounded-full hover:bg-white/5 bg-white/0 border border-transparent hover:border-white/10">
            <LogIn className="w-4 h-4" /> <span>Iniciar sesión</span>
          </button>
        </footer>
      </div>
    );
  }

  if (state === 'register') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="p-10 bg-black text-white">
            <h2 className="text-3xl font-black italic">Registro de Empresa</h2>
            <p className="text-slate-400 text-sm mt-1">Valide sus datos legales de 11 dígitos.</p>
          </div>
          <div className="p-10 space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">RUC (11 dígitos)</label>
                <input type="text" value={formData.ruc} onChange={(e) => setFormData({...formData, ruc: handleNumericInput(e.target.value, 11)})} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 outline-none font-mono text-lg" placeholder="20XXXXXXXXX" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Razón Social</label>
                <input type="text" value={formData.razonSocial} onChange={(e) => setFormData({...formData, razonSocial: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 outline-none transition-all" placeholder="Nombre legal" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Representante Legal</label>
              <input type="text" value={formData.representante} onChange={(e) => setFormData({...formData, representante: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 outline-none" placeholder="Nombre completo" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Correo (Owner)</label>
                <input type="email" value={formData.correo} onChange={(e) => setFormData({...formData, correo: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 outline-none" placeholder="admin@dominio.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Teléfono</label>
                <input type="tel" value={formData.telefono} onChange={(e) => setFormData({...formData, telefono: handleNumericInput(e.target.value, 9)})} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 outline-none" placeholder="9XXXXXXXX" />
              </div>
            </div>
            <button onClick={() => setState('validating')} className="w-full bg-indigo-600 text-white py-5 rounded-[2rem] font-black text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all">Solicitar registro</button>
          </div>
        </div>
      </div>
    );
  }

  if (state === 'validating') {
    setTimeout(() => setState('success_credentials'), 2000);
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center space-y-8 animate-in fade-in">
        <div className="w-24 h-24 border-8 border-indigo-100 border-t-indigo-600 rounded-full animate-spin"></div>
        <h2 className="text-3xl font-black text-slate-900 tracking-tighter italic">Verificando Credenciales</h2>
      </div>
    );
  }

  if (state === 'success_credentials') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl p-12 text-center space-y-10 animate-in zoom-in-95 duration-500 border border-slate-100">
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto shadow-inner"><CheckCircle2 className="w-12 h-12 text-emerald-600" /></div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter italic">Validación exitosa</h2>
          <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 space-y-2">
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Clave Temporal</span>
            <div className="text-4xl font-mono font-black text-slate-900">XP-992-K8</div>
          </div>
          <button onClick={() => setState('login_setup')} className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700">Configurar Acceso</button>
        </div>
      </div>
    );
  }

  if (state === 'login_setup') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl p-12 space-y-10 border border-slate-100">
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter italic text-center">Configuración</h2>
          <div className="space-y-5">
            <input type="password" placeholder="Contraseña permanente" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 outline-none focus:ring-4 focus:ring-indigo-100" />
            <input type="password" placeholder="Confirmar contraseña" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 outline-none focus:ring-4 focus:ring-indigo-100" />
          </div>
          <button onClick={() => setState('plan_selection')} className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl">Finalizar y Elegir Plan</button>
        </div>
      </div>
    );
  }

  if (state === 'plan_selection') {
    return (
      <div className="min-h-screen bg-slate-50 p-10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-8">
            <h2 className="text-6xl font-black text-slate-900 tracking-tighter italic">Planes de Suscripción</h2>
            <div className="flex items-center justify-center space-x-6">
              <span className={`text-sm font-black uppercase tracking-widest ${!isAnnual ? 'text-indigo-600' : 'text-slate-400'}`}>Mensual</span>
              <button onClick={() => setIsAnnual(!isAnnual)} className={`w-20 h-10 rounded-full p-1.5 transition-all ${isAnnual ? 'bg-indigo-600' : 'bg-slate-300'}`}>
                <div className={`bg-white w-7 h-7 rounded-full transition-transform ${isAnnual ? 'translate-x-10' : 'translate-x-0'}`}></div>
              </button>
              <div className="flex flex-col items-start">
                <span className={`text-sm font-black uppercase tracking-widest ${isAnnual ? 'text-indigo-600' : 'text-slate-400'}`}>Anual</span>
                <span className="bg-emerald-100 text-emerald-600 text-[10px] font-black px-3 py-1 rounded-full uppercase">10% Off</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {PLAN_TIERS_DISPLAY.map((planName, idx) => {
              const tier = planName as any; // Names match Tier keys
              const costStr = MASTER_PLAN_MATRIX.find(f => f.name === 'Costo')?.values[tier] as string || '$0';
              const basePrice = parseInt(costStr.replace(/\D/g, ''));
              const finalPrice = isAnnual ? Math.floor(basePrice * 0.9) : basePrice;
              return (
                <div key={idx} className={`bg-white rounded-[3rem] p-8 border-2 transition-all flex flex-col justify-between group hover:scale-[1.05] ${selectedPlan === tier ? 'border-indigo-600 ring-8 ring-indigo-50 shadow-2xl' : 'border-slate-100'}`}>
                  <div className="space-y-6">
                    <h3 className="font-black text-slate-900 text-2xl italic leading-tight">{planName}</h3>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-4xl font-black tracking-tighter">${finalPrice}</span>
                      <span className="text-slate-400 text-[10px] font-black uppercase">/mes</span>
                    </div>
                  </div>
                  <button onClick={() => toPayment(tier)} className={`mt-10 w-full py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest transition-all ${selectedPlan === tier ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-white hover:bg-black'}`}>
                    {selectedPlan === tier ? 'Remarcar' : 'Seleccionar'}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="bg-white p-12 rounded-[4rem] shadow-sm border border-slate-100 w-full">
            <h3 className="text-2xl font-black italic mb-10 text-center">Comparativa Maestra de Beneficios</h3>
            <PlanMatrix />
          </div>
        </div>
      </div>
    );
  }

  if (state === 'payment') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-5xl w-full flex bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="flex-1 p-16 space-y-12">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic">Confirmar Pago</h2>
            <div className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Número de tarjeta (16 dígitos)</label>
                <input type="text" value={paymentData.number} onChange={(e) => setPaymentData({...paymentData, number: handleNumericInput(e.target.value, 16)})} className="w-full bg-slate-50 border border-slate-200 rounded-[2rem] px-8 py-5 outline-none font-mono text-lg" placeholder="0000 0000 0000 0000" />
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Mes (MM)</label>
                  <input type="text" value={paymentData.expMonth} onChange={(e) => setPaymentData({...paymentData, expMonth: handleNumericInput(e.target.value, 2)})} className="w-full bg-slate-50 border border-slate-200 rounded-[2rem] px-8 py-5 outline-none font-mono text-lg" placeholder="12" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Año (AA)</label>
                  <input type="text" value={paymentData.expYear} onChange={(e) => setPaymentData({...paymentData, expYear: handleNumericInput(e.target.value, 2)})} className="w-full bg-slate-50 border border-slate-200 rounded-[2rem] px-8 py-5 outline-none font-mono text-lg" placeholder="28" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">CVV (3 dígitos)</label>
                  <input type="password" value={paymentData.cvc} onChange={(e) => setPaymentData({...paymentData, cvc: handleNumericInput(e.target.value, 3)})} className="w-full bg-slate-50 border border-slate-200 rounded-[2rem] px-8 py-5 outline-none font-mono text-lg" placeholder="123" />
                </div>
              </div>
            </div>
            <button onClick={login} className="w-full bg-indigo-600 text-white py-6 rounded-[2.5rem] font-black text-xl shadow-2xl hover:bg-indigo-700">Confirmar datos de pago</button>
          </div>
          <div className="w-96 bg-slate-50 border-l border-slate-100 p-16 space-y-12 flex flex-col justify-center">
            <h3 className="text-2xl font-black italic text-slate-900">Resumen</h3>
            <div className="space-y-4">
              <div className="flex justify-between font-black text-[10px] uppercase text-slate-400"><span>Plan</span> <span>{selectedPlan}</span></div>
              <div className="flex justify-between font-black text-[10px] uppercase text-slate-400"><span>Modalidad</span> <span>{isAnnual ? 'Anual' : 'Mensual'}</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar onNavigate={setCurrentView} currentView={currentView} />
      <main className="flex-1 ml-72 p-12 bg-slate-50 overflow-y-auto min-h-screen">
        <div className="max-w-7xl mx-auto pb-24">
          {currentView === 'dashboard' && <DashboardView />}
          {currentView === 'traffic' && <TrafficView />}
          {currentView === 'profile' && <PublicProfileView />}
          {currentView === 'ecosystem' && <EcosystemView />}
          {currentView === 'settings' && <SettingsView />}
          {currentView === 'plans' && (
            <div className="space-y-10 animate-in slide-in-from-right duration-500">
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic">Planes y Beneficios</h2>
              <PlanMatrix />
            </div>
          )}
        </div>
      </main>
      <AsiaChat />
    </div>
  );
};

export default App;
