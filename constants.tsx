
import { PlanFeature } from './types';

export const LOGO_URL = 'https://raw.githubusercontent.com/StackBlitz/stackblitz-images/main/xpressate-logo.png';

export const PLAN_TIERS_DISPLAY = [
  'Free',
  'Standard',
  'Avanzado',
  'Profesional',
  'Enterprise'
];

export const MASTER_PLAN_MATRIX: PlanFeature[] = [
  // DESCRIPCIÓN GENERAL
  { section: 'DESCRIPCIÓN GENERAL DE LOS PLANES', name: 'Costo', values: { Free: '$0 / MES', Standard: '$49 / MES', Avanzado: '$149 / MES', Profesional: '$299 / MES', Enterprise: '$499 / MES' } },
  { name: 'Detalles', values: { Free: '-', Standard: 'Incluye todo el plan anterior +', Avanzado: 'Incluye todo lo anterior +', Profesional: 'Incluye todo lo anterior +', Enterprise: 'Incluye todo lo anterior +' } },
  { name: 'Personalizacion de Perfil Publico', values: { Free: 'Logo + Banner + Descripcion', Standard: 'Pagina Web + Redes Sociales', Avanzado: 'Panel de Practicas Profesionales', Profesional: 'Panel de Sorteos y Promociones', Enterprise: 'Panel de Proyectos, Reconocimientos y Eventos' } },
  { name: 'Gestion de Roles', values: { Free: '1 administrador', Standard: '1 Administrador + 1 Analista', Avanzado: '1 Administrador + 2 Roles elegibles', Profesional: '2 administradores + 5 Roles elegibles', Enterprise: '3 Administradores + 10 roles elegibles' } },
  { name: 'Medalla Xpressate', values: { Free: false, Standard: true, Avanzado: true, Profesional: true, Enterprise: true } },
  { name: 'Analitica', values: { Free: 'Visualización agregada de experiencias con clasificación básica por sentimiento y ventana fija de 30 días.', Standard: 'Seguimiento temporal de reputación con métricas por sentimiento, categorías temáticas y comparación básica entre periodos', Avanzado: 'Control reputacional mediante análisis de recurrencia, severidad de experiencias y métricas operativas de gestión de casos.', Profesional: 'Analítica estratégica con scoring de riesgo, benchmarking sectorial y medición de eficiencia interna orientada a prevención.', Enterprise: 'Inteligencia analítica corporativa con KPIs configurables, trazabilidad auditada, modelos predictivos e integración BI vía API' } },
  { name: 'KPIs', values: { Free: false, Standard: 'KPIs de reputación básicos', Avanzado: 'KPIs operativos y de riesgo para controlar recurrencia, severidad y tiempos de gestión', Profesional: 'KPIs estratégicos de performance reputacional, eficiencia interna y benchmarking sectorial', Enterprise: 'KPIs corporativos configurables, predictivos y auditables integrables a sistemas de BI.' } },
  { name: 'Alertas por experiencias dirigidas', values: { Free: false, Standard: false, Avanzado: true, Profesional: true, Enterprise: true } },
  { name: 'Clasificacion de IA', values: { Free: false, Standard: 'IA básica (positiva / neutral / negativa)', Avanzado: 'Clasificación IA avanzada de intencionalidad', Profesional: 'Panel de casos y estados (en seguimiento / resuelto)', Enterprise: 'Configuración de reglas internas de clasificación' } },
  { name: 'Periodo de Gracia a Respuestas', values: { Free: false, Standard: '12 horas', Avanzado: '24 horas', Profesional: '48 horas', Enterprise: '72 horas' } },
  { name: 'Gestion de Marcas', values: { Free: false, Standard: '1 Marca', Avanzado: '10 Marcas', Profesional: 'MultiMarca', Enterprise: 'MultiMarca' } },
  { name: 'Gestion de Sedes/Locales', values: { Free: false, Standard: '1 Sede', Avanzado: '2 Sedes', Profesional: '10 Sedes', Enterprise: '20 Sedes' } },
  { name: 'Exportacion de Datos', values: { Free: false, Standard: 'Exportación simple de reportes (PDF)', Avanzado: 'Exportación simple de reportes (PDF, Excel)', Profesional: 'Exportacion Profesional, PDF, Excel | 2 API PRIVADA', Enterprise: 'Exportacion Profesional, PDF, Excel | 5 API PRIVADA' } },
  { name: 'Respuestas a Experiencias', values: { Free: '20 Respuestas', Standard: '100 respuestas', Avanzado: '200 respuestas', Profesional: '400 respuestas', Enterprise: 'Respuestas Ilimitadas' } },
  { name: 'Gestión de Datos', values: { Free: '30 días', Standard: '3 Meses', Avanzado: '6 Meses', Profesional: '12 Meses', Enterprise: 'Retención configurable' } },
  { name: 'SLA', values: { Free: false, Standard: 'Soporte Estándar', Avanzado: 'Soporte prioritario', Profesional: 'SLA Garantizado', Enterprise: 'SLA corporativo personalizado' } },

  // HERRAMIENTAS
  { section: 'HERRAMIENTAS DE LOS PLANES', name: 'Benchmarking', values: { Free: false, Standard: false, Avanzado: 'SI, por localidad', Profesional: 'SI, por Sector', Enterprise: 'Acceso General' } },
  { name: 'MarketPlace', values: { Free: false, Standard: true, Avanzado: true, Profesional: true, Enterprise: true } },
  { name: 'Encuestas', values: { Free: false, Standard: 'Encuestas simples', Avanzado: 'Encuestas personalizadas', Profesional: 'Encuestas recurrentes', Enterprise: 'Sistema avanzado de encuestas' } },
  { name: 'Votaciones', values: { Free: false, Standard: 'Votaciones Simples', Avanzado: 'Votaciones personalizadas', Profesional: 'Votaciones Gestionables', Enterprise: 'Sistema avanzado de votaciones' } },
  { name: 'Evaluación de Desempeño', values: { Free: false, Standard: 'Score básico', Avanzado: 'Evaluación por áreas', Profesional: 'Indicadores estratégicos', Enterprise: 'KPIs corporativos de desempeño' } },
  { name: 'Indicadores Psicosociales', values: { Free: false, Standard: false, Avanzado: 'Clima básico', Profesional: 'Riesgo psicosocial agregado', Enterprise: 'Indicadores ESG / SST' } },

  // SLA Y SOPORTE
  { section: 'SLA Y SOPORTE', name: 'Tipo de soporte', values: { Free: 'Comunitario / documentación', Standard: 'Soporte estándar', Avanzado: 'Soporte prioritario', Profesional: 'Soporte prioritario garantizado', Enterprise: 'Soporte corporativo dedicado' } },
  { name: 'SLA contractual', values: { Free: false, Standard: false, Avanzado: false, Profesional: true, Enterprise: 'SI (personalizado)' } },
  { name: 'Disponibilidad (Uptime)', values: { Free: 'No garantizada', Standard: 'No garantizada', Avanzado: 'No garantizada', Profesional: '≥ 99.5%', Enterprise: '≥ 99.9% (negociable)' } },
  { name: 'Horario de atención', values: { Free: 'No garantizado', Standard: 'Horario laboral', Avanzado: 'Horario laboral', Profesional: 'Horario laboral extendido', Enterprise: '24/7' } },
  { name: 'Canales de soporte', values: { Free: 'FAQ / Docs', Standard: 'Email / Formulario', Avanzado: 'Email prioritario', Profesional: 'Email + canal dedicado', Enterprise: 'Email + canal dedicado + directo' } },
  { name: 'Gerente de cuenta', values: { Free: false, Standard: false, Avanzado: false, Profesional: false, Enterprise: true } },

  // INTEGRACION DE DATOS
  { section: 'INTEGRACION DE DATOS', name: 'Tipo de integración', values: { Free: 'Ninguna', Standard: 'Ninguna', Avanzado: 'Ninguna', Profesional: 'Exportación avanzada', Enterprise: 'Integración corporativa' } },
  { name: 'Acceso a API', values: { Free: false, Standard: false, Avanzado: false, Profesional: false, Enterprise: true } },
  { name: 'Integración con BI', values: { Free: false, Standard: false, Avanzado: false, Profesional: false, Enterprise: true } },

  // GESTIÓN DE MARCAS Y SEDES
  { section: 'GESTIÓN DE MARCAS Y SEDES', name: 'Gestión de Marcas', values: { Free: false, Standard: '1 Marca', Avanzado: 'Hasta 10 Marcas', Profesional: 'Multi-Marca', Enterprise: 'Multi-Marca Corporativa' } },
  { name: 'Gestión de Sedes', values: { Free: false, Standard: '1 Sede', Avanzado: '2 Sedes', Profesional: 'Hasta 10 Sedes', Enterprise: '20+ Sedes (configurable)' } },

  // PERSONALIZACIÓN
  { section: 'PERSONALIZACIÓN DE PERFIL PÚBLICO', name: 'Logo', values: { Free: true, Standard: true, Avanzado: true, Profesional: true, Enterprise: true } },
  { name: 'Banner personalizado', values: { Free: false, Standard: true, Avanzado: true, Profesional: true, Enterprise: true } },
  { name: 'Web y redes sociales', values: { Free: false, Standard: true, Avanzado: true, Profesional: true, Enterprise: true } },
  { name: 'Panel de prácticas', values: { Free: false, Standard: false, Avanzado: true, Profesional: true, Enterprise: true } },
  { name: 'Promociones / sorteos', values: { Free: false, Standard: false, Avanzado: false, Profesional: true, Enterprise: true } },
  { name: 'Proyectos / eventos', values: { Free: false, Standard: false, Avanzado: false, Profesional: false, Enterprise: true } },
];
