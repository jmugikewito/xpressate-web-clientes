
import React, { useState } from 'react';
import { LayoutDashboard, MessageSquare, Globe, Zap, Settings, Send, Mic, Sparkles, TrendingUp } from 'lucide-react';
import { improveText } from '../services/geminiService';

interface SidebarProps {
  onNavigate: (view: string) => void;
  currentView: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate, currentView }) => {
  const [suggestion, setSuggestion] = useState('');
  const [category, setCategory] = useState('General');
  const [isImproving, setIsImproving] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'traffic', icon: Zap, label: 'Tráfico y Resolución' },
    { id: 'profile', icon: Globe, label: 'Perfil Público' },
    { id: 'ecosystem', icon: TrendingUp, label: 'Ecosistema' },
    { id: 'settings', icon: Settings, label: 'Configuración' },
  ];

  const handleImprove = async () => {
    if (!suggestion) return;
    setIsImproving(true);
    const improved = await improveText(suggestion);
    setSuggestion(improved);
    setIsImproving(false);
  };

  const handleVoice = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitRecognition;
    if (!SpeechRecognition) {
      alert("Navegador no soportado");
      return;
    }
    const rec = new SpeechRecognition();
    rec.start();
    setIsListening(true);
    rec.onresult = (e: any) => { setSuggestion(prev => prev + ' ' + e.results[0][0].transcript); setIsListening(false); };
    rec.onerror = () => setIsListening(false);
  };

  return (
    <aside className="w-72 h-screen bg-slate-900 text-white flex flex-col fixed left-0 top-0 z-20 shadow-xl overflow-hidden">
      <div className="p-8 border-b border-slate-800">
        <h1 className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent italic">
          XPRESSATE
        </h1>
        <p className="text-[9px] uppercase tracking-widest text-slate-500 font-bold mt-1">SAAS Business Solutions</p>
      </div>

      <nav className="flex-1 overflow-y-auto py-8 px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-200 group ${
              currentView === item.id ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <item.icon className={`w-5 h-5 ${currentView === item.id ? 'text-white' : 'group-hover:text-indigo-400'}`} />
            <span className="font-bold text-sm tracking-tight">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 bg-slate-800/50 m-4 rounded-3xl space-y-4 border border-slate-700">
        <div className="flex items-center space-x-2 text-indigo-400 px-1">
          <MessageSquare className="w-4 h-4" />
          <span className="text-[11px] font-black uppercase tracking-wider">Buzón de Sugerencias</span>
        </div>
        
        <div className="space-y-3">
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-slate-700 border-none rounded-xl p-2 text-[10px] font-bold text-slate-300 focus:ring-1 focus:ring-indigo-500"
          >
            <option>General</option>
            <option>Interfaz</option>
            <option>Funcionalidad</option>
            <option>Soporte</option>
          </select>

          <div className="relative">
            <textarea
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              placeholder="Critica constructiva..."
              className="w-full bg-slate-700 text-[11px] rounded-xl p-3 min-h-[90px] focus:ring-1 focus:ring-indigo-500 placeholder-slate-500 border-none"
            />
            <div className="absolute bottom-2 right-2 flex space-x-1">
              <button 
                onClick={handleVoice}
                className={`p-2 rounded-lg bg-slate-600 hover:bg-slate-500 transition-colors ${isListening ? 'animate-pulse text-red-400' : 'text-slate-300'}`}
              >
                <Mic className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={handleImprove}
                disabled={isImproving || !suggestion}
                className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white"
              >
                {isImproving ? <div className="animate-spin h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full" /> : <Sparkles className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-black py-3 rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/20 uppercase tracking-widest transition-all hover:-translate-y-0.5 active:translate-y-0">
            <Send className="w-3.5 h-3.5" />
            <span>Enviar Feedback</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
