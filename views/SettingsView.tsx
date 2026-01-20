
import React, { useState } from 'react';
import { CreditCard, Users, Shield, FileText, Activity, Headphones, AlertTriangle, ChevronRight, CheckCircle2, Lock, X, Plus } from 'lucide-react';

const SettingsView: React.FC = () => {
  const [cards, setCards] = useState([
    { id: 1, type: 'VISA', last4: '4242', exp: '12/26', main: true }
  ]);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('Analista');

  const addCard = () => {
    const newCard = { id: Date.now(), type: 'MC', last4: Math.floor(1000 + Math.random() * 9000).toString(), exp: '08/28', main: false };
    setCards([...cards, newCard]);
  };

  const inviteUser = () => {
    alert(`Invitación enviada a ${inviteEmail} con el rol de ${inviteRole}`);
    setIsInviteModalOpen(false);
    setInviteEmail('');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 relative">
      <header className="flex justify-between items-end">
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic">Configuración y Auditoría</h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100">
            <h3 className="text-lg font-black italic mb-8 flex items-center space-x-2 text-slate-900">
               <CreditCard className="w-5 h-5 text-indigo-600" /> <span>Métodos de Pago</span>
            </h3>
            <div className="space-y-4">
               {cards.map(card => (
                 <div key={card.id} className={`p-6 rounded-3xl relative overflow-hidden border-2 ${card.main ? 'border-indigo-600 bg-slate-50' : 'border-slate-100 bg-white'}`}>
                    {card.main && <div className="absolute top-0 right-0 w-12 h-12 bg-indigo-600 flex items-center justify-center text-white rounded-bl-3xl"><CheckCircle2 className="w-5 h-5" /></div>}
                    <div className="flex items-center space-x-4">
                       <div className="w-14 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-[10px]">{card.type}</div>
                       <div>
                          <p className="text-sm font-black text-slate-900">•••• •••• •••• {card.last4}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Exp: {card.exp} {card.main ? '• Tarjeta Main' : ''}</p>
                       </div>
                    </div>
                 </div>
               ))}
               <button onClick={addCard} className="w-full py-4 border-2 border-dashed border-slate-200 rounded-3xl text-xs font-black uppercase tracking-widest text-slate-400 hover:border-indigo-600 hover:text-indigo-600 transition-all">+ Agregar Tarjeta Secundaria</button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-8">
               <h3 className="text-lg font-black italic flex items-center space-x-2 text-slate-900"><Users className="w-5 h-5 text-indigo-600" /> <span>Usuarios y Permisos</span></h3>
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Cupos: 5/10</span>
            </div>
            <button onClick={() => setIsInviteModalOpen(true)} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-black transition-all">Invitar Nuevo Usuario</button>
          </div>
        </div>

        <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <Activity className="absolute -right-4 -top-4 w-40 h-40 text-white/5 pointer-events-none" />
          <div>
            <h3 className="text-xl font-black italic mb-6">Límites y Auditoría</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2"><span>Uso de Respuestas</span> <span>280 / 400</span></div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden"><div className="bg-indigo-500 h-full w-[70%]" /></div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-3xl mt-12 flex items-center space-x-4">
            <Shield className="w-8 h-8 text-indigo-400" />
            <p className="text-[11px] font-medium text-slate-400 leading-relaxed italic">"Su trazabilidad legal cumple con el estándar de seguridad corporativa profesional."</p>
          </div>
        </div>
      </div>

      {isInviteModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] flex items-center justify-center p-6">
          <div className="bg-white max-w-md w-full rounded-[3rem] shadow-2xl p-10 space-y-8 animate-in zoom-in-95 duration-200 border border-slate-100">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-black text-slate-900 tracking-tighter italic">Invitar Usuario</h3>
              <button onClick={() => setIsInviteModalOpen(false)} className="text-slate-400 hover:text-slate-900"><X className="w-6 h-6" /></button>
            </div>
            <div className="space-y-4">
              <input type="email" placeholder="Correo electrónico" value={inviteEmail} onChange={(e) => setInviteEmail(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm outline-none focus:ring-4 focus:ring-indigo-100" />
              <select value={inviteRole} onChange={(e) => setInviteRole(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm outline-none focus:ring-4 focus:ring-indigo-100 font-bold text-slate-600">
                <option>Analista</option>
                <option>Soporte</option>
                <option>Legal</option>
                <option>Observador</option>
              </select>
            </div>
            <button onClick={inviteUser} disabled={!inviteEmail} className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl disabled:opacity-50">Enviar Invitación</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsView;
