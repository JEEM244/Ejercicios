# Plan de desarrollo

CodeVault se construye por etapas. Cada fase debe quedar útil antes de ampliar el alcance.

| Fase | Alcance | Estado |
|---|---|---|
| 0. Especificación | Objetivo, alcance y convenciones | Completada |
| 1. Base del repositorio | Estructura, documentos maestros y plantillas bilingües | Completada |
| 2. Fundamentos | Lógica, algoritmos, estructuras y resolución de problemas | En preparación |
| 3. Bibliotecas técnicas | Guías y referencias de los 11 lenguajes | En desarrollo: HTML, CSS y JavaScript inicial |
| 4. Entrenamiento | Ejercicios, retos, depuración y evaluaciones | En desarrollo: HTML-001 a HTML-010, CSS-001 a CSS-012 y JS-001 a JS-012 |
| 5. Proyectos | Proyectos integradores por dificultad | En desarrollo: CSS-012 como proyecto integrador |
| 6. CLI | Utilidad opcional en Python | Pendiente |
| 7. Validación | Revisar enlaces, ejemplos, versiones e idiomas | Pendiente |

## Estado de HTML

La primera ruta de HTML cubre fundamentos y nivel intermedio. Incluye guía, referencia rápida, diez ejercicios y un proyecto integrador. La revisión de estructura y rutas está realizada; las pruebas de navegador y el validador automático siguen pendientes.

## Estado de CSS

La ruta inicial de CSS cubre fundamentos e intermedio: selectores, cascada, especificidad, herencia, modelo de caja, unidades, tipografía, posicionamiento, Flexbox, Grid, diseño adaptable, variables, transiciones y animaciones.

Incluye guías, referencias rápidas, once ejercicios y el proyecto integrador CSS-012. El proyecto contiene tres páginas y una hoja de estilos compartida. Se revisaron estáticamente las seis páginas entre inicio y solución: rutas locales existentes, enlaces internos válidos, IDs sin duplicados y llaves CSS balanceadas. Las pruebas prácticas en navegador y la validación automática especializada siguen pendientes.

## Estado de JavaScript

JavaScript cuenta con dos rutas de estudio:

1. **Fundamentos:** ejecución en navegador y Node.js, instrucciones, variables, tipos, conversiones, operadores, condicionales, ciclos y funciones. Incluye guía, referencia rápida y ejercicios JS-001 a JS-006.
2. **Estructuras y depuración:** arreglos, índices, recorridos, métodos de arreglos y cadenas, objetos, arreglos de objetos, desestructuración, alcance global/de función/de bloque y depuración. Incluye guía, referencia rápida y ejercicios JS-007 a JS-012.

Los doce ejercicios tienen enunciados en español e inglés, archivos iniciales y soluciones separadas con explicación. No requieren frameworks ni paquetes externos. La siguiente etapa será DOM y eventos, seguida de módulos y programación asíncrona. Falta ejecutar las prácticas en un entorno local de navegador o Node.js y revisar los resultados con distintos datos.

## Orden de trabajo

1. Estabilizar especificación y estructura.
2. Crear fundamentos compartidos.
3. Desarrollar los lenguajes en unidades pequeñas y enlazadas.
4. Crear ejercicios con casos de prueba.
5. Integrar habilidades en proyectos.
6. Diseñar la CLI según necesidades reales.
7. Revisar y mantener el contenido.

## Criterio de cierre

Una fase no termina por tener carpetas creadas. Debe incluir contenido útil, enlaces correctos y una revisión acorde con su alcance.

## Regla de alcance

No agregar módulos solo para hacer más grande el repositorio. Cada carpeta o herramienta debe resolver una necesidad concreta.
