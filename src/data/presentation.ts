export type PresentationIcon =
	| 'spark'
	| 'users'
	| 'shirt'
	| 'drop'
	| 'filter'
	| 'sensor'
	| 'phone'
	| 'qr'
	| 'gift'
	| 'map'
	| 'chart'
	| 'history'
	| 'material'
	| 'building'
	| 'shield'
	| 'web'
	| 'file';

export type PresentationVisual =
	| {
			type: 'photo';
			src: string;
			alt: string;
			caption?: string;
	  }
	| { type: 'device' }
	| { type: 'flow' }
	| { type: 'phone' }
	| { type: 'scale' }
	| { type: 'impact' }
	| { type: 'risk' }
	| { type: 'thanks' };

export interface PresentationCard {
	title: string;
	description: string;
	icon: PresentationIcon;
}

export interface PresentationLink {
	label: string;
	href: string;
	external?: boolean;
}

export interface PresentationSlide {
	eyebrow: string;
	title: string;
	lead?: string;
	variant: 'cover' | 'split' | 'cards' | 'metric' | 'links' | 'thanks';
	tone?: 'blue' | 'orange' | 'mint' | 'dark';
	animation: 'rise' | 'slide-left' | 'zoom-soft' | 'wipe' | 'cascade';
	cards?: PresentationCard[];
	visual?: PresentationVisual;
	stat?: {
		value: string;
		label: string;
	};
	links?: PresentationLink[];
}

export const presentationSlides: PresentationSlide[] = [
	{
		eyebrow: 'FiberLoop',
		title: 'Capturar la contaminación invisible',
		lead: 'Un prototipo conceptual para reducir microfibras textiles antes de que lleguen al agua o al aire.',
		variant: 'cover',
		tone: 'blue',
		animation: 'zoom-soft',
		stat: {
			value: 'TP Integrador',
			label: 'Tecnología y Medio Ambiente · Grupo 6',
		},
		visual: { type: 'device' },
	},
	{
		eyebrow: 'Integrantes',
		title: 'Grupo 6',
		lead: 'Equipo de trabajo para el mock y la presentación de FiberLoop.',
		variant: 'cards',
		tone: 'blue',
		animation: 'cascade',
		cards: [
			{
				title: 'Jonathan Emanuel Artimiak',
				description: 'Integrante',
				icon: 'users',
			},
			{ title: 'Luka Cerrutti', description: 'Integrante', icon: 'users' },
			{ title: 'Felipe Costa', description: 'Integrante', icon: 'users' },
			{
				title: 'Santiago Nicolás Iglesias',
				description: 'Integrante',
				icon: 'users',
			},
			{
				title: 'Eliel Hernando Lanzillotta',
				description: 'Integrante',
				icon: 'users',
			},
			{
				title: 'Carlos Timoteo Lombardo',
				description: 'Integrante',
				icon: 'users',
			},
		],
	},
	{
		eyebrow: 'Problema',
		title: 'Cada lavado de ropa sintética libera microfibras plásticas',
		lead: 'Una acción doméstica repetida puede transportar partículas invisibles hacia agua, aire y sistemas de tratamiento.',
		variant: 'split',
		tone: 'blue',
		animation: 'slide-left',
		visual: {
			type: 'photo',
			src: '/presentation/microplastics-beach.jpg',
			alt: 'Arena con pequeños restos de microplásticos en la costa.',
			caption: 'Foto: Anastasiia Nelen / Unsplash',
		},
		cards: [
			{
				title: 'Textiles sintéticos',
				description: 'Poliéster, nylon, acrílico y elastano.',
				icon: 'shirt',
			},
			{
				title: 'Origen cotidiano',
				description: 'Lavado, secado y lavasecarropas compatibles.',
				icon: 'drop',
			},
		],
	},
	{
		eyebrow: 'Escala',
		title: 'Lo invisible también se acumula',
		lead: 'El impacto individual parece pequeño, pero se repite en hogares, edificios, lavaderos e instituciones.',
		variant: 'metric',
		tone: 'mint',
		animation: 'wipe',
		stat: {
			value: 'millones',
			label:
				'de ciclos de lavado y secado pueden sumar una fuga constante de fibras invisibles',
		},
		visual: { type: 'scale' },
		cards: [
			{
				title: 'Cotidiano',
				description: 'Sale de una acción doméstica repetida.',
				icon: 'shirt',
			},
			{
				title: 'Difícil de retener',
				description: 'Puede atravesar sistemas de tratamiento.',
				icon: 'drop',
			},
			{
				title: 'Escalable',
				description: 'Crece en lavaderos, hoteles e instituciones.',
				icon: 'chart',
			},
		],
	},
	{
		eyebrow: 'Solución',
		title: 'FiberLoop actúa en el origen',
		lead: 'Un cartucho filtrante conectado al flujo de lavado o secado captura microfibras antes de que se dispersen.',
		variant: 'split',
		tone: 'orange',
		animation: 'zoom-soft',
		visual: { type: 'device' },
		cards: [
			{
				title: 'Antes del desagüe',
				description: 'Filtración física cerca del lavarropas.',
				icon: 'filter',
			},
			{
				title: 'Antes del ambiente',
				description: 'Registro, recolección y trazabilidad del cartucho.',
				icon: 'qr',
			},
		],
	},
	{
		eyebrow: 'Funcionamiento',
		title: 'Filtro, sensores, app y recolección',
		lead: 'La propuesta combina una pieza física simple con registro digital para cerrar el ciclo del cartucho.',
		variant: 'cards',
		tone: 'blue',
		animation: 'cascade',
		visual: { type: 'flow' },
		cards: [
			{
				title: '1. Filtra',
				description: 'El flujo compatible pasa por el cartucho.',
				icon: 'filter',
			},
			{
				title: '2. Mide',
				description: 'Sensores controlan flujo, saturación y obstrucción.',
				icon: 'sensor',
			},
			{
				title: '3. Avisa',
				description: 'La app alerta mantenimiento o recambio.',
				icon: 'phone',
			},
			{
				title: '4. Cierra el ciclo',
				description: 'QR y entrega en puntos de recolección.',
				icon: 'qr',
			},
		],
	},
	{
		eyebrow: 'App',
		title: 'La app vuelve visible el impacto',
		lead: 'Convierte saturación, historial y entrega de cartuchos en acciones claras para el usuario.',
		variant: 'split',
		tone: 'blue',
		animation: 'slide-left',
		visual: { type: 'phone' },
		cards: [
			{
				title: 'Estado del filtro',
				description: 'Saturación, flujo y alertas.',
				icon: 'sensor',
			},
			{
				title: 'Historial',
				description: 'Lavados, recambios y gramos estimados.',
				icon: 'history',
			},
			{
				title: 'QR del cartucho',
				description: 'Registro de entrega en puntos de recolección.',
				icon: 'qr',
			},
			{
				title: 'Recompensas',
				description: 'Beneficios por participación municipal.',
				icon: 'gift',
			},
		],
	},
	{
		eyebrow: 'Incentivos',
		title: 'Capturar, entregar, recibir beneficios',
		lead: 'El cartucho lleno se registra por QR y se entrega en puntos de recolección para sostener el hábito.',
		variant: 'split',
		tone: 'orange',
		animation: 'wipe',
		visual: {
			type: 'photo',
			src: '/presentation/recycling-bins.jpg',
			alt: 'Contenedores de reciclaje en un espacio urbano.',
			caption: 'Foto: Kristaps Grundsteins / Unsplash',
		},
		cards: [
			{
				title: 'Puntos verdes',
				description: 'Municipios, escuelas y comercios adheridos.',
				icon: 'map',
			},
			{
				title: 'Recompensas',
				description: 'Descuentos, beneficios o reconocimientos locales.',
				icon: 'gift',
			},
		],
	},
	{
		eyebrow: 'Impacto medible',
		title: 'Medir antes de escalar',
		lead: 'El objetivo no es prometer resultados absolutos, sino medir si la captura en origen reduce la fuga.',
		variant: 'metric',
		tone: 'mint',
		animation: 'zoom-soft',
		stat: {
			value: '25%',
			label:
				'meta inicial de reducción en hogares o instituciones adheridas durante el primer año',
		},
		visual: { type: 'impact' },
		cards: [
			{
				title: 'Cartuchos',
				description: 'Cantidad recolectada por mes y zona.',
				icon: 'filter',
			},
			{
				title: 'Material',
				description: 'Gramos estimados recuperados.',
				icon: 'material',
			},
			{
				title: 'Política pública',
				description: 'Datos agregados para evaluar programas.',
				icon: 'shield',
			},
		],
	},
	{
		eyebrow: 'Riesgos',
		title: 'No trasladar el problema',
		lead: 'FiberLoop debe pensarse como prototipo responsable: útil, medible y con límites claros.',
		variant: 'cards',
		tone: 'dark',
		animation: 'cascade',
		visual: { type: 'risk' },
		cards: [
			{
				title: 'E-waste',
				description: 'Diseño durable, reparable y con cartuchos recuperables.',
				icon: 'shield',
			},
			{
				title: 'Privacidad',
				description: 'Datos agregados y anonimizados.',
				icon: 'sensor',
			},
			{
				title: 'Acceso',
				description: 'Programas municipales, subsidios y puntos cercanos.',
				icon: 'map',
			},
		],
	},
	{
		eyebrow: 'Viabilidad',
		title: 'Viable como implementación gradual',
		lead: 'Las tecnologías ya existen; el desafío es validar captura, mantenimiento, costos y adopción antes de escalar.',
		variant: 'cards',
		tone: 'blue',
		animation: 'cascade',
		visual: { type: 'flow' },
		cards: [
			{
				title: 'Tecnologías disponibles',
				description:
					'Sensores, microcontroladores, filtrado, Bluetooth/WiFi y app.',
				icon: 'sensor',
			},
			{
				title: 'Primera etapa',
				description:
					'Dispositivo adaptable para hogares, edificios o instituciones.',
				icon: 'filter',
			},
			{
				title: 'Alianzas',
				description:
					'Municipios, fabricantes, lavaderos y tintorerías para pruebas locales.',
				icon: 'building',
			},
			{
				title: 'Escala futura',
				description: 'Industria textil con más estudios técnicos y económicos.',
				icon: 'chart',
			},
		],
	},
	{
		eyebrow: 'Muchas gracias',
		title: '¿Preguntas?',
		lead: 'FiberLoop es un mock estático para comunicar una intervención posible: capturar en el origen, medir y sostener el hábito.',
		variant: 'thanks',
		tone: 'blue',
		animation: 'zoom-soft',
		visual: { type: 'thanks' },
		links: [
			{
				label: 'Ver documento del proyecto',
				href: 'https://github.com/lukacerr/fiberloop/blob/main/Document.pdf',
				external: true,
			},
		],
		stat: {
			value: 'Origen + datos + hábito',
			label: 'la oportunidad está en intervenir antes de la dispersión',
		},
	},
];
