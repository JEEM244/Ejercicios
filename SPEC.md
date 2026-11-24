# Especificación de CodeVault

**Estado:** especificación inicial aprobada  
**Repositorio:** `JEEM244/Ejercicios`

## 1. Propósito

CodeVault es una biblioteca técnica personal para aprender, practicar, consultar y mantener habilidades de programación. Debe servir tanto para estudiar desde cero como para recordar sintaxis o resolver dudas puntuales.

No es un curso lineal, una aplicación web ni una plataforma que obligue a completar lecciones en orden.

## 2. Principios

- Consulta libre: cada tema se puede abrir de forma independiente.
- Práctica real: ejemplos ejecutables cuando aplique.
- Progresión: fundamentos, nivel intermedio y avanzado.
- Claridad: términos explicados con ejemplos y contexto.
- Mantenimiento: evitar duplicación y enlazar a la explicación principal.
- Offline-first: el material esencial vive en el repositorio.
- Portabilidad: no requiere base de datos ni instalación especial para leer.
- Git desde el inicio.
- Documentación bilingüe: español principal; inglés con sufijo `.en`.

## 3. Lenguajes iniciales

HTML, CSS, JavaScript, TypeScript, PHP, Python, Shell, C#, Kotlin, Lua y SQL.

Shell distinguirá Bash y PowerShell. SQL cubrirá fundamentos comunes y particularidades de SQL Server y MySQL.

## 4. Áreas compartidas

Fundamentos (lógica, algoritmos, estructuras, POO, paradigmas y complejidad); herramientas (Git, terminal, Linux y regex); tecnologías (bases de datos, REST, JSON y XML); redes; entrenamiento; proyectos; referencia; progreso local y CLI opcional en Python.

## 5. Formato

- Markdown para guías, índices y documentación.
- Archivos nativos para código.
- Enunciados, archivos iniciales y soluciones separados.
- Sin base de datos obligatoria.

## 6. Estándar de tema

Cuando sea pertinente: definición, propósito, usos, prerrequisitos, sintaxis, ejemplos comentados, variantes, errores frecuentes, buenas prácticas, compatibilidad y enlaces a prácticas.

## 7. Estándar de ejercicio

Cada ejercicio tiene un ID único y no reutilizable (por ejemplo `JS-001`, `PY-014`, `SQL-003`). Debe incluir lenguaje, tema, dificultad, objetivo, enunciado, requisitos, restricciones, entradas, salidas esperadas, casos de prueba y pistas opcionales.

Cuando aplique, incluir archivo inicial ejecutable. La solución se guarda por separado, con explicación y alternativas útiles.

Tipos: recordar sintaxis, completar código, resolver desde cero, interpretar, depurar, diseñar algoritmos, comparar lenguajes, refactorizar y crear proyectos pequeños.

## 8. Niveles

- Básico: conceptos esenciales y programas pequeños.
- Intermedio: combinación de conceptos, modularidad y manejo de errores.
- Avanzado: diseño, rendimiento, arquitectura e interoperabilidad.

La dificultad es orientativa; un tema avanzado puede incluir prácticas introductorias.

## 9. Convención bilingüe

Español: nombre normal, por ejemplo `GUIA.md`. Inglés: sufijo `.en`, por ejemplo `GUIA.en.md`. Mantener versiones alineadas y señalar expresamente las traducciones pendientes.

## 10. Ejecución y CLI

La ejecución será manual con las herramientas propias de cada lenguaje. La CLI será opcional, escrita en Python, y no implementará intérpretes ni compiladores.

## 11. Seguridad

Los ejemplos de redes y terminal se limitarán a sistemas propios o autorizados. Se excluyen instrucciones para acceso no autorizado, robo de credenciales, evasión de controles, malware o daño.

## 12. Fuera del alcance inicial

Interfaz web, cuentas de usuario, base de datos obligatoria, ejecución universal, sincronización cloud obligatoria y publicación automática sin revisión.

## 13. Calidad

No afirmar que un ejemplo fue probado si no se ejecutó. Indicar versiones y dependencias relevantes. Distinguir conceptos generales de particularidades de cada plataforma. Preferir ejemplos pequeños, reproducibles y comentados. Actualizar esta especificación ante cambios de arquitectura.