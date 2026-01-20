
import React from 'react';
import { Check, X } from 'lucide-react';
import { MASTER_PLAN_MATRIX } from '../constants';
import { PlanTier } from '../types';

const tiers: PlanTier[] = ['Free', 'Standard', 'Avanzado', 'Profesional', 'Enterprise'];

const PlanMatrix: React.FC = () => {
  return (
    <div className="bg-white rounded-[3rem] shadow-sm border border-slate-100 overflow-hidden w-full">
      <div className="w-full">
        <table className="w-full text-left border-collapse table-fixed">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100">
              <th className="p-4 sm:p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest w-1/4">Característica</th>
              {tiers.map((tier) => (
                <th key={tier} className="p-4 sm:p-6 text-center">
                  <div className="flex flex-col items-center space-y-1">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                      tier === 'Free' ? 'bg-slate-200 text-slate-600' :
                      tier === 'Standard' ? 'bg-blue-100 text-blue-600' :
                      tier === 'Avanzado' ? 'bg-indigo-100 text-indigo-600' :
                      tier === 'Profesional' ? 'bg-purple-100 text-purple-600' :
                      'bg-amber-100 text-amber-600'
                    }`}>
                      {tier}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {MASTER_PLAN_MATRIX.map((feature, idx) => (
              <React.Fragment key={idx}>
                {feature.section && (
                  <tr className="bg-slate-900">
                    <td colSpan={6} className="px-6 py-3 text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">
                      {feature.section}
                    </td>
                  </tr>
                )}
                <tr className="hover:bg-slate-50/30 transition-all group">
                  <td className="px-6 py-5 text-[10px] font-black text-slate-700 uppercase tracking-tight italic group-hover:text-indigo-600 transition-colors leading-tight">
                    {feature.name}
                  </td>
                  {tiers.map(tier => (
                    <td key={tier} className="px-4 py-5 text-center">
                      {typeof feature.values[tier] === 'boolean' ? (
                        feature.values[tier] ? 
                          <div className="w-5 h-5 bg-emerald-100 rounded-md flex items-center justify-center mx-auto shadow-sm">
                             <Check className="w-3.5 h-3.5 text-emerald-600" />
                          </div> : 
                          <div className="w-5 h-5 bg-rose-50 rounded-md flex items-center justify-center mx-auto opacity-30">
                             <X className="w-3.5 h-3.5 text-rose-300" />
                          </div>
                      ) : (
                        <span className="text-slate-600 font-bold text-[10px] leading-tight block">
                          {feature.values[tier]}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-8 bg-slate-50/50 border-t border-slate-100 flex justify-end space-x-4">
        <button className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-[9px] font-black text-slate-700 hover:bg-slate-50 transition-all shadow-sm uppercase tracking-widest">
          Exportar PDF
        </button>
        <button className="px-8 py-3 bg-indigo-600 rounded-xl text-[9px] font-black text-white hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-200 uppercase tracking-widest">
          Mejorar Plan
        </button>
      </div>
    </div>
  );
};

export default PlanMatrix;
