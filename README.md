# FiberLoop

FiberLoop es un proyecto de mockups para presentar una solución tecnológica frente a la contaminación por microplásticos textiles. El problema abordado surge del lavado y secado de ropa sintética, como poliéster, nylon, acrílico o elastano, que libera microfibras plásticas difíciles de ver y de retener una vez que llegan al agua, al sistema cloacal o al aire exterior.

La propuesta conceptual combina un dispositivo de filtrado instalado cerca del desagüe del lavarropas o del circuito de ventilación de secado, sensores IoT para medir flujo y saturación, una app móvil para seguimiento del cartucho, registro por QR, puntos de recolección municipales, recompensas e indicadores ambientales agregados. El objetivo es mostrar cómo una intervención en el origen del problema puede reducir la liberación de microfibras y conectar la recuperación del material con hábitos ciudadanos y economía circular.

Este repositorio no busca implementar un producto real ni un backend productivo. Su objetivo es construir una demo estática, visual y convincente para una presentación universitaria.

## Mocks Del Proyecto

- **Presentación:** un deck estático de aproximadamente 10 minutos hecho con Astro y JavaScript local, con poco texto por diapositiva, apoyo visual, notas para exposición y animaciones alineadas con la identidad de FiberLoop.
- **Web promocional:** una landing page con storytelling ambiental, explicación del producto, insights, métricas mock, casos de uso y llamados a explorar la experiencia móvil.
- **Mobile mock:** una simulación de la app dentro de un frame mobile, mostrando estado del filtro, cartucho, historial, puntos de recolección, recompensas y flujo QR.

## Enfoque Técnico

El proyecto se construye con Astro, Tailwind CSS v4 y Starwind UI, manteniendo salida completamente estática para poder desplegar en Cloudflare Pages como HTML, CSS y JavaScript en `dist/`. Toda interacción debe ser simulada del lado del cliente, sin SSR, endpoints, base de datos ni servicios externos obligatorios.

## Desarrollo

Comandos principales:

```sh
bun dev
bun check
bun run build
```

Antes de cerrar cambios de implementación, mantener `bun check` limpio y generar el build estático cuando corresponda.
