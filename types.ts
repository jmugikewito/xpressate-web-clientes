
export enum UserRole {
  OWNER = 'Owner / Administrador Principal',
  ADMIN = 'Administrador Corporativo',
  ANALYST = 'Analista / Reputación & Insights',
  SUPPORT = 'Soporte / Atención',
  LEGAL = 'Legal / Compliance',
  OBSERVER = 'Observador / Auditor'
}

export type PlanTier = 'Free' | 'Standard' | 'Avanzado' | 'Profesional' | 'Enterprise';

export interface PlanFeature {
  name: string;
  values: Record<PlanTier, string | boolean>;
  section?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: 'active' | 'suspended';
}

export interface Suggestion {
  id: string;
  category: string;
  content: string;
  timestamp: Date;
}

export interface Brand {
  id: string;
  name: string;
  locationsCount: number;
}
