/**
 * Datos AGREGADOS y GLOBALES de FiberLoop para la página pública de estadísticas.
 *
 * IMPORTANTE: todos los valores de este archivo son MOCK / DEMO. Son estimaciones
 * inventadas para la presentación del TP integrador y NO representan un despliegue
 * real ni mediciones verificadas. Sirven para comunicar visualmente cómo se vería
 * el impacto agregado de la red FiberLoop (nivel global, nunca individual).
 *
 * El marco del problema sí se apoya en fuentes reales citadas en el documento:
 * PNUMA, European Environment Agency, IUCN y los papers de Napper & Thompson,
 * De Falco et al., Gaylarde et al., entre otros.
 */

export type RangeId = 'diario' | 'semanal' | 'mensual' | 'anual' | 'historico';

export interface RangeSeries {
	id: RangeId;
	label: string;
	/** Descripción corta del recorte temporal que se muestra. */
	scope: string;
	categories: string[];
	/** Microfibras capturadas por punto, en kilogramos. */
	microfibras: number[];
	/** Cartuchos recolectados por punto, en unidades. */
	cartuchos: number[];
	/** Total del rango listo para mostrar (string es-AR). */
	totalMicrofibras: string;
	totalCartuchos: string;
	/** Variación estimada respecto del período anterior comparable. */
	delta: string;
	deltaLabel: string;
}

/** KPIs de cabecera: acumulado histórico de toda la red (mock). */
export interface GlobalKpi {
	value: string;
	label: string;
	hint: string;
	delta: string;
	trend: 'up' | 'down';
}

export const globalKpis: GlobalKpi[] = [
	{
		value: '2,1 t',
		label: 'Microfibras capturadas',
		hint: 'retenidas antes de llegar al agua y al aire',
		delta: '+9,2%',
		trend: 'up',
	},
	{
		value: '18.940',
		label: 'Cartuchos recolectados',
		hint: 'registrados por QR en puntos habilitados',
		delta: '+6,1%',
		trend: 'up',
	},
	{
		value: '7.320',
		label: 'Hogares e instituciones',
		hint: 'activos dentro de la red de pilotos',
		delta: '+4,4%',
		trend: 'up',
	},
	{
		value: '142',
		label: 'Puntos de recolección',
		hint: 'puntos verdes, escuelas y comercios adheridos',
		delta: '+11',
		trend: 'up',
	},
	{
		value: '24',
		label: 'Municipios adheridos',
		hint: 'con tablero ambiental y beneficios',
		delta: '+2',
		trend: 'up',
	},
	{
		value: '1,24 M',
		label: 'Lavados monitoreados',
		hint: 'ciclos con datos agregados y anonimizados',
		delta: '+9,7%',
		trend: 'up',
	},
];

/**
 * Series temporales por rango. Cada rango muestra microfibras capturadas (kg)
 * y cartuchos recolectados para el mismo recorte temporal.
 */
export const rangeSeries: RangeSeries[] = [
	{
		id: 'diario',
		label: 'Diario',
		scope: 'Captura de hoy por franja horaria',
		categories: [
			'00 h',
			'03 h',
			'06 h',
			'09 h',
			'12 h',
			'15 h',
			'18 h',
			'21 h',
		],
		microfibras: [0.28, 0.19, 0.44, 0.86, 1.12, 0.98, 1.36, 0.92],
		cartuchos: [3, 2, 5, 9, 11, 9, 12, 7],
		totalMicrofibras: '6,2 kg',
		totalCartuchos: '58',
		delta: '+5,4%',
		deltaLabel: 'vs. ayer',
	},
	{
		id: 'semanal',
		label: 'Semanal',
		scope: 'Últimos 7 días de la red',
		categories: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
		microfibras: [4.8, 5.6, 5.1, 6.2, 6.8, 7.4, 5.1],
		cartuchos: [44, 52, 47, 56, 61, 67, 45],
		totalMicrofibras: '41 kg',
		totalCartuchos: '372',
		delta: '+7,1%',
		deltaLabel: 'vs. semana anterior',
	},
	{
		id: 'mensual',
		label: 'Mensual',
		scope: 'Últimos 30 días por tramo',
		categories: ['1–5', '6–10', '11–15', '16–20', '21–25', '26–30'],
		microfibras: [27.4, 29.1, 31.6, 33.2, 35.8, 34.9],
		cartuchos: [248, 261, 279, 291, 304, 257],
		totalMicrofibras: '192 kg',
		totalCartuchos: '1.640',
		delta: '+6,3%',
		deltaLabel: 'vs. mes anterior',
	},
	{
		id: 'anual',
		label: 'Anual',
		scope: 'Últimos 12 meses',
		categories: [
			'Ene',
			'Feb',
			'Mar',
			'Abr',
			'May',
			'Jun',
			'Jul',
			'Ago',
			'Sep',
			'Oct',
			'Nov',
			'Dic',
		],
		microfibras: [62, 71, 78, 84, 93, 97, 104, 112, 118, 121, 119, 121],
		cartuchos: [612, 668, 720, 772, 828, 876, 912, 952, 988, 1018, 1126, 1148],
		totalMicrofibras: '1,18 t',
		totalCartuchos: '10.620',
		delta: '+12,8%',
		deltaLabel: 'vs. año anterior',
	},
	{
		id: 'historico',
		label: 'Histórico',
		scope: 'Acumulado del programa por semestre',
		categories: [
			'2023 · S2',
			'2024 · S1',
			'2024 · S2',
			'2025 · S1',
			'2025 · S2',
			'2026 · S1',
		],
		microfibras: [78, 164, 286, 402, 598, 572],
		cartuchos: [690, 1480, 2580, 3620, 5380, 5190],
		totalMicrofibras: '2,1 t',
		totalCartuchos: '18.940',
		delta: '+9,2%',
		deltaLabel: 'interanual',
	},
];

export const defaultRange: RangeId = 'mensual';

/** Composición estimada de las microfibras capturadas por tipo de textil. */
export const materialMix = {
	labels: ['Poliéster', 'Nylon', 'Acrílico', 'Elastano'],
	values: [58, 22, 13, 7],
};

/** Vía por la que se capturó el material (agua de lavado vs. aire de secado). */
export const captureChannels = [
	{ label: 'Agua de lavado', value: 78 },
	{ label: 'Aire de secado', value: 22 },
];

/** Top de zonas por kg capturados (mock). */
export const topZones = [
	{ name: 'Núcleo Norte', kg: 418 },
	{ name: 'Costa Centro', kg: 362 },
	{ name: 'Valle Sur', kg: 298 },
	{ name: 'Distrito Río', kg: 254 },
	{ name: 'Bahía Este', kg: 206 },
];

/** Avance hacia la meta ambiental del documento (reducir 25% en pilotos). */
export const goalProgress = {
	/** Porcentaje de avance hacia la meta (18% alcanzado sobre 25% = 72%). */
	percent: 72,
	reached: '18%',
	target: '25%',
	caption:
		'Reducción estimada de microfibras en hogares e instituciones piloto.',
};

/** Indicadores de economía circular y participación (mock). */
export const circularStats = [
	{
		value: '63%',
		label: 'Material reutilizado',
		hint: 'fibras derivadas a economía circular como insumo',
	},
	{
		value: '71%',
		label: 'Cartuchos entregados',
		hint: 'sobre los cartuchos retirados por usuarios',
	},
	{
		value: '4,9 t',
		label: 'CO₂e evitado estimado',
		hint: 'por recuperación y reproceso de material',
	},
];

export const dataDisclaimer =
	'Datos demostrativos y estimados para la demo del TP integrador. No representan un despliegue real ni mediciones verificadas. El marco del problema se apoya en fuentes como PNUMA, European Environment Agency e IUCN.';
