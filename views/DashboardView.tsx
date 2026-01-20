
import React from 'react';
import { Star, TrendingUp, AlertTriangle, Users, MapPin, PieChart, BarChart3, ChevronRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RPieChart, Pie, Cell, BarChart, Bar } from 'recharts';

const sentimentData = [
  { name: 'Lun', pos: 400, neg: 240, neu: 100 },
  { name: 'Mar', pos: 300, neg: 139, neu: 200 },
  { name: 'Mie', pos: 200, neg: 980, neu: 50 },
  { name: 'Jue', pos: 278, neg: 390, neu: 300 },
  { name: 'Vie', pos: 189, neg: 480, neu: 150 },
  { name: 'Sab', pos: 239, neg: 380, neu: 250 },
  { name: 'Dom', pos: 349, neg: 430, neu: 100 },
];

const ageData = [
  { range: '18-24', count: 400 },
  { range: '25-34', count: 700 },
  { range: '35-44', count: 550 },
  { range: '45-54', count: 300 },
  { range: '55+', count: 150 },
];

const genderData = [
  { name: 'Hombres', value: 45, color: '#6366f1' },
  { name: 'Mujeres', value: 50, color: '#ec4899' },
  { name: 'Anónimos', value: 5, color: '#94a3b8' },
];

const DashboardView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic">Dashboard Analítico</h2>
          <p className="text-slate-500 mt-1 font-medium">Visualización estratégica de la reputación de tu marca.</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-2xl text-xs font-black text-slate-700 shadow-sm hover:bg-slate-50 transition-all uppercase tracking-widest">Últimos 30 días</button>
          <button className="px-5 py-2.5 bg-slate-900 rounded-2xl text-xs font-black text-white shadow-xl hover:bg-black transition-all uppercase tracking-widest">Descargar Informe</button>
        </div>
      </header>

      {/* Primary KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Sentimiento Neto', val: '72%', trend: '+8.4%', icon: Star, color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { label: 'Menciones Totales', val: '4,812', trend: '+14%', icon: MessageSquare, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Nivel de Viralidad', val: 'Alto', trend: 'Pico 14:00', icon: TrendingUp, color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'Ubicación Clave', val: 'Lima, PE', trend: 'Heatmap', icon: MapPin, color: 'text-rose-600', bg: 'bg-rose-50' },
        ].map((kpi, i) => (
          <div key={i} className="bg-white p-7 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className={`p-4 rounded-2xl ${kpi.bg} group-hover:scale-110 transition-transform`}>
                <kpi.icon className={`w-7 h-7 ${kpi.color}`} />
              </div>
              <span className="text-[10px] font-black px-2 py-1 bg-slate-50 text-slate-500 rounded-lg uppercase tracking-widest">
                {kpi.trend}
              </span>
            </div>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{kpi.label}</p>
            <p className="text-3xl font-black text-slate-900 mt-1 tracking-tight">{kpi.val}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Trend Line Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-lg font-black italic flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              <span>Tendencia Semanal de Impacto</span>
            </h3>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-1.5"><div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div><span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Positivo</span></div>
              <div className="flex items-center space-x-1.5"><div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div><span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Negativo</span></div>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sentimentData}>
                <defs>
                  <linearGradient id="colorPos" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 700}} />
                <YAxis hide />
                <Tooltip contentStyle={{borderRadius: '20px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)'}} />
                <Area type="monotone" dataKey="pos" stroke="#10b981" fillOpacity={1} fill="url(#colorPos)" strokeWidth={4} />
                <Area type="monotone" dataKey="neg" stroke="#f43f5e" fillOpacity={0} strokeWidth={4} strokeDasharray="8 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gender Pie Chart */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col">
          <h3 className="text-lg font-black italic mb-8 flex items-center space-x-2">
            <Users className="w-5 h-5 text-indigo-600" />
            <span>Demografía: Género</span>
          </h3>
          <div className="flex-1 min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <RPieChart>
                <Pie data={genderData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={10} dataKey="value">
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RPieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3 mt-6">
            {genderData.map((d, i) => (
              <div key={i} className="flex justify-between items-center px-4 py-2 bg-slate-50 rounded-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: d.color}}></div>
                  <span className="text-[11px] font-bold text-slate-600 uppercase tracking-widest">{d.name}</span>
                </div>
                <span className="text-xs font-black text-slate-900">{d.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Age Groups Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <h3 className="text-lg font-black italic mb-8 flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
            <span>Distribución por Grupos de Edad</span>
          </h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ageData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="range" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 700}} />
                <YAxis hide />
                <Tooltip cursor={{fill: '#f8fafc'}} />
                <Bar dataKey="count" fill="#6366f1" radius={[8, 8, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-indigo-600 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/20 transition-all"></div>
          <h3 className="text-xl font-black italic mb-2">Foco de Atención</h3>
          <p className="text-indigo-100 text-sm font-medium leading-relaxed">Las menciones en <span className="text-white font-black">Lima Metropolitana</span> han crecido un <span className="text-white font-black">22%</span> este mes. Revisa los hilos de conversación anónimos.</p>
          <div className="mt-10 pt-10 border-t border-white/10">
            <button className="w-full bg-white text-indigo-600 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center group/btn transition-all">
              <span>Ver Mapa de Calor</span>
              <ChevronRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
import { MessageSquare } from 'lucide-react';
