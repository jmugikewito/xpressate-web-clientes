
import React from 'react';
import { TrendingUp, Users, Target, Shield, Search, ChevronRight, BarChart3, Globe } from 'lucide-react';

const ranking = [
  { rank: 1, name: 'Banco Global PE', rubro: 'Banca', score: 9.8, trend: 'up' },
  { rank: 2, name: 'Retail Max SAC', rubro: 'Retail', score: 9.2, trend: 'up' },
  { rank: 3, name: 'XPRESSATE', rubro: 'Tecnología', score: 8.4, trend: 'stable' },
  { rank: 4, name: 'Minera del Sur', rubro: 'Minería', score: 7.9, trend: 'down' },
];

const EcosystemView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic">Ecosistema y Benchmark</h2>
          <p className="text-slate-500 mt-1 font-medium">Analiza tu posición competitiva en el mercado nacional.</p>
        </div>
        <div className="flex space-x-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Comparar con..." className="bg-white border border-slate-100 rounded-2xl pl-12 pr-6 py-2.5 text-xs font-bold focus:ring-2 focus:ring-indigo-500/20 outline-none w-64" />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Comparison Tools */}
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100">
              <h3 className="text-lg font-black italic mb-8 flex items-center space-x-2">
                 <Target className="w-5 h-5 text-indigo-600" />
                 <span>Análisis Comparativo (Benchmark)</span>
              </h3>
              <div className="grid grid-cols-2 gap-8">
                 <div className="space-y-6">
                    <div className="p-6 bg-slate-50 rounded-3xl space-y-2 border border-slate-100">
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tu Sentimiento</p>
                       <p className="text-3xl font-black text-indigo-600">8.4/10</p>
                       <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-indigo-600 h-full w-[84%]"></div>
                       </div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-3xl space-y-2 border border-slate-100">
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Media del Sector</p>
                       <p className="text-3xl font-black text-slate-400">7.1/10</p>
                       <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-slate-400 h-full w-[71%]"></div>
                       </div>
                    </div>
                 </div>
                 <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden flex flex-col justify-center">
                    <Globe className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5" />
                    <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">Insight Estratégico</p>
                    <p className="text-sm font-medium leading-relaxed italic">"Tu empresa lidera en tiempo de respuesta comparado con el promedio tecnológico de Lima. <span className="text-white font-black">Mantén este KPI</span> para ganar el Badge de Excelencia Trimestral."</p>
                 </div>
              </div>
           </div>

           <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100">
              <h3 className="text-lg font-black italic mb-8 flex items-center space-x-2">
                 <BarChart3 className="w-5 h-5 text-indigo-600" />
                 <span>Ranking de Empresas (Sector Tech)</span>
              </h3>
              <div className="space-y-3">
                 {ranking.map((r, i) => (
                   <div key={i} className={`flex items-center justify-between p-5 rounded-2xl ${r.name === 'XPRESSATE' ? 'bg-indigo-50 border-2 border-indigo-200' : 'bg-slate-50 border border-slate-100'}`}>
                      <div className="flex items-center space-x-6">
                         <span className="text-xl font-black text-slate-400 w-4">#{r.rank}</span>
                         <div>
                            <p className="text-sm font-black text-slate-900">{r.name}</p>
                            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{r.rubro}</p>
                         </div>
                      </div>
                      <div className="flex items-center space-x-8">
                         <div className="text-right">
                            <p className="text-lg font-black text-slate-900">{r.score}</p>
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Reputación</p>
                         </div>
                         <div className={`p-2 rounded-lg ${r.trend === 'up' ? 'bg-emerald-100 text-emerald-600' : r.trend === 'down' ? 'bg-rose-100 text-rose-600' : 'bg-slate-200 text-slate-500'}`}>
                            <TrendingUp className={`w-4 h-4 ${r.trend === 'down' ? 'rotate-180' : r.trend === 'stable' ? 'rotate-90' : ''}`} />
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Influencers / Mentioners */}
        <div className="space-y-8">
           <div className="bg-slate-900 p-8 rounded-[3rem] text-white shadow-2xl">
              <h3 className="text-lg font-black italic mb-6">Usuarios Influyentes</h3>
              <div className="space-y-6">
                 {[
                   { name: '@tech_hunter_pe', role: 'Reclutador', impact: 'Alto' },
                   { name: '@startup_insider', role: 'Analista', impact: 'Medio' },
                   { name: '@marcos_dev', role: 'Creador', impact: 'Crítico' },
                 ].map((u, i) => (
                   <div key={i} className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center space-x-3">
                         <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center font-black text-xs text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                            {u.name.charAt(1).toUpperCase()}
                         </div>
                         <div>
                            <p className="text-xs font-black text-white">{u.name}</p>
                            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{u.role}</p>
                         </div>
                      </div>
                      <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${u.impact === 'Crítico' ? 'bg-rose-600' : 'bg-slate-700'} text-white`}>{u.impact}</span>
                   </div>
                 ))}
              </div>
              <button className="w-full mt-10 py-4 border border-slate-700 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white hover:bg-slate-800 transition-all">Ver todos los perfiles</button>
           </div>

           <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
              <div className="p-5 bg-indigo-50 rounded-2xl border border-indigo-100">
                 <h4 className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-2">Marketplace</h4>
                 <p className="text-[11px] font-medium text-slate-600 leading-relaxed">¿Buscas partners? Accede al mercado B2B integrado.</p>
                 <button className="mt-4 text-[10px] font-black text-indigo-600 uppercase tracking-widest flex items-center group">
                    <span>Explorar Ahora</span>
                    <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemView;
