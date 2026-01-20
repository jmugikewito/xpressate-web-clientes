
import React, { useState, useEffect, useRef } from 'react';
import { Search, Filter, MessageSquare, User, Clock, CheckCircle2, AlertTriangle, MoreVertical, Send } from 'lucide-react';

const mockChatsData = [
  { id: 1, user: 'Usuario Público', profile: 'Public', msg: 'La atención en la sede de Miraflores fue excepcional...', time: '10:30 AM', status: 'Pendiente', sentiment: 'Positivo', conversation: [{role: 'user', text: 'Hola, quería comentarles que la atención en su sucursal fue muy buena, pero el sistema de facturación electrónica tardó más de lo esperado. Ojalá puedan optimizarlo.'}] },
  { id: 2, user: 'Anónimo #482', profile: 'Anonymous', msg: 'He tenido problemas con el tiempo de espera en...', time: 'Yesterday', status: 'Sin atender', sentiment: 'Negativo', conversation: [{role: 'user', text: 'Esperé 45 minutos para ser atendido. Es inaceptable para una empresa de este nivel.'}] },
  { id: 3, user: 'Empresa Constructora SAC', profile: 'Corporate', msg: 'Buscamos alianza estratégica para...', time: '2h ago', status: 'Atendido', sentiment: 'Neutro', conversation: [{role: 'user', text: 'Estimados, nos gustaría agendar una reunión para discutir una posible integración de servicios.'}] },
  { id: 4, user: 'Usuario Público', profile: 'Public', msg: '¿Cuándo abrirán una sede en Trujillo?', time: '3h ago', status: 'Revisado', sentiment: 'Neutro', conversation: [{role: 'user', text: 'Soy de Trujillo y me encantaría que estuvieran aquí.'}] },
];

const TrafficView: React.FC = () => {
  const [selectedChatId, setSelectedChatId] = useState<number | null>(mockChatsData[0].id);
  const [chats, setChats] = useState(mockChatsData);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  const activeChat = chats.find(c => c.id === selectedChatId);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [activeChat?.conversation, isTyping]);

  const handleSend = () => {
    if (!inputText.trim() || !selectedChatId) return;
    const msg = inputText;
    setInputText('');
    
    setChats(prev => prev.map(c => c.id === selectedChatId ? {
      ...c, 
      conversation: [...c.conversation, { role: 'model', text: msg }]
    } : c));

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setChats(prev => prev.map(c => c.id === selectedChatId ? {
        ...c, 
        conversation: [...c.conversation, { role: 'user', text: 'Gracias por la pronta respuesta. Estaré atento a las novedades.' }]
      } : c));
    }, 1500);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic">Tráfico y Resolución</h2>
          <p className="text-slate-500 mt-1 font-medium">Gestione las interacciones derivadas de menciones directas.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-4">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Buscar mención..." className="w-full bg-white border border-slate-100 rounded-2xl pl-12 pr-4 py-3 text-xs focus:ring-2 focus:ring-indigo-500/20 outline-none" />
          </div>
          <div className="space-y-2 max-h-[70vh] overflow-y-auto pr-2">
            {chats.map(chat => (
              <button key={chat.id} onClick={() => setSelectedChatId(chat.id)} className={`w-full text-left p-5 rounded-3xl transition-all group relative border-2 ${selectedChatId === chat.id ? 'bg-indigo-50 border-indigo-500 shadow-lg' : 'bg-white border-slate-100 hover:border-indigo-200'}`}>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-[10px] ${chat.profile === 'Anonymous' ? 'bg-slate-800 text-white' : 'bg-indigo-100 text-indigo-600'}`}>
                      {chat.profile === 'Anonymous' ? 'A' : 'P'}
                    </div>
                    <div>
                      <p className="text-[11px] font-black text-slate-900">{chat.user}</p>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{chat.profile}</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 line-clamp-1 leading-relaxed mb-4">{chat.msg}</p>
                <div className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md inline-block ${chat.status === 'Pendiente' ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'}`}>
                  {chat.status}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 bg-white rounded-[3rem] border border-slate-100 shadow-xl flex flex-col overflow-hidden h-[75vh]">
          {activeChat ? (
            <>
              <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-xl italic">{activeChat.user.charAt(0)}</div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">{activeChat.user}</h3>
                    <div className="flex items-center space-x-3 mt-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <Clock className="w-3 h-3" /> <span>Activo ahora</span>
                    </div>
                  </div>
                </div>
              </div>
              <div ref={chatScrollRef} className="flex-1 p-8 bg-slate-50/50 space-y-6 overflow-y-auto">
                {activeChat.conversation.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-md p-5 rounded-3xl shadow-sm border border-slate-100 ${msg.role === 'user' ? 'bg-white rounded-tl-none text-slate-700' : 'bg-indigo-600 text-white rounded-tr-none shadow-indigo-100'}`}>
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white p-4 rounded-3xl flex space-x-1"><div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce"></div><div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce delay-75"></div><div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce delay-150"></div></div>
                  </div>
                )}
              </div>
              <div className="p-6 bg-white border-t border-slate-100 flex items-center space-x-4">
                <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Escribe una respuesta oficial..." className="flex-1 bg-slate-50 rounded-2xl px-6 py-4 text-sm outline-none border border-slate-100 focus:border-indigo-600 transition-colors" />
                <button onClick={handleSend} className="bg-indigo-600 text-white p-4 rounded-2xl shadow-lg hover:bg-indigo-700 transition-all">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-400 space-y-4">
              <MessageSquare className="w-16 h-16 opacity-20" />
              <p className="font-black uppercase tracking-widest text-xs">Selecciona un chat para iniciar</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrafficView;
