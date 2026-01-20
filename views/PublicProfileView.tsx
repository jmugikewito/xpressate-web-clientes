
import React, { useState } from 'react';
import { Camera, Globe, Facebook, Linkedin, Instagram, MapPin, Users, Award, ExternalLink, Edit3, Briefcase, Calendar, Star, MessageSquare } from 'lucide-react';

const PublicProfileView: React.FC = () => {
  const [profile, setProfile] = useState({
    name: 'XPRESSATE Business SAC',
    desc: 'Empoderando la comunicación empresarial mediante inteligencia artificial y escucha activa.',
    web: 'www.xpressate.pe',
    fb: '',
    li: '',
    ig: ''
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic">Perfil Público</h2>
          <p className="text-slate-500 mt-1 font-medium">Configura cómo los usuarios y clientes ven tu empresa.</p>
        </div>
        <button className="px-6 py-3 bg-white border-2 border-slate-900 rounded-2xl text-xs font-black text-slate-900 shadow-xl hover:bg-slate-50 transition-all uppercase tracking-widest flex items-center space-x-2">
          <ExternalLink className="w-4 h-4" /> <span>Vista Pública</span>
        </button>
      </header>

      <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-slate-100">
        <div className="h-64 bg-slate-200 relative group cursor-pointer">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 text-white flex-col space-y-2">
            <Camera className="w-8 h-8" /> <span className="text-xs font-black uppercase tracking-widest">Cambiar Banner</span>
          </div>
          <div className="absolute -bottom-16 left-12 w-40 h-40 bg-white rounded-3xl p-3 shadow-2xl border-4 border-white group/logo cursor-pointer">
            <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center relative overflow-hidden text-white font-black text-3xl italic">
              XP <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/logo:opacity-100 transition-opacity"><Edit3 className="w-6 h-6" /></div>
            </div>
          </div>
        </div>

        <div className="pt-24 pb-12 px-12">
           <div className="flex justify-between items-start">
              <div className="space-y-4 max-w-2xl">
                 <div className="flex items-center space-x-3">
                    <h3 className="text-3xl font-black text-slate-900 tracking-tight">{profile.name}</h3>
                    <span className="bg-indigo-600 text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest">Plan Pro</span>
                 </div>
                 <textarea value={profile.desc} onChange={(e) => setProfile({...profile, desc: e.target.value})} className="w-full bg-transparent border-none p-0 text-slate-500 font-medium leading-relaxed resize-none focus:ring-0" />
                 <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-400">
                    <div className="flex items-center space-x-1.5"><MapPin className="w-4 h-4 text-indigo-500" /> <span>Lima, Miraflores</span></div>
                    <div className="flex items-center space-x-1.5"><Globe className="w-4 h-4 text-indigo-500" /> <input value={profile.web} onChange={(e) => setProfile({...profile, web: e.target.value})} className="text-indigo-600 bg-transparent border-none p-0 w-32 focus:ring-0" /></div>
                 </div>
              </div>
           </div>

           <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                 <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 italic border-b-2 border-indigo-600 inline-block pb-1">Contenido Público</h4>
                 <div className="bg-slate-50 rounded-[2rem] p-12 text-center space-y-4 border-2 border-dashed border-slate-200">
                    <Briefcase className="w-12 h-12 text-slate-300 mx-auto" />
                    <h5 className="text-lg font-bold text-slate-800 tracking-tight">Publicaciones y Eventos</h5>
                    <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest">Crear Publicación</button>
                 </div>
              </div>
              <div className="space-y-8">
                 <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl space-y-4">
                    <h4 className="text-lg font-black italic mb-4">Redes Sociales</h4>
                    {[
                      { icon: Facebook, key: 'fb', label: 'Facebook' },
                      { icon: Linkedin, key: 'li', label: 'LinkedIn' },
                      { icon: Instagram, key: 'ig', label: 'Instagram' },
                    ].map((s, i) => (
                      <div key={i} className="space-y-1">
                        <label className="text-[9px] font-black uppercase text-slate-500 tracking-widest ml-1">{s.label}</label>
                        <div className="relative">
                          <s.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input type="text" value={(profile as any)[s.key]} onChange={(e) => setProfile({...profile, [s.key]: e.target.value})} className="w-full bg-slate-800 border-none rounded-xl pl-12 pr-4 py-3 text-xs text-white focus:ring-1 focus:ring-indigo-500" placeholder="https://..." />
                        </div>
                      </div>
                    ))}
                    <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest mt-4 hover:bg-slate-100">Guardar Cambios</button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PublicProfileView;
