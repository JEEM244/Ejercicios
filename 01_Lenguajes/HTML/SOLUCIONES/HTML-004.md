# Solución: HTML-004 — Tabla de datos

**Estado:** revisada a nivel de estructura; no se ejecutó un validador automático.

## Idea

La primera fila contiene encabezados de columna. En cada fila de datos, el nombre del lenguaje funciona como encabezado de fila. El resto son celdas de datos.

## Archivo

[HTML-004.html](HTML-004.html)

## Decisiones importantes

- caption describe el propósito de la tabla.
- thead agrupa los encabezados y tbody las filas de datos.
- th identifica celdas de encabezado.
- scope="col" asocia encabezados con columnas.
- scope="row" identifica el encabezado de cada fila.
- td contiene datos ordinarios.

## Revisión

- [x] La tabla tiene un caption.
- [x] Hay encabezados de columna y de fila.
- [x] Las celdas contienen datos relacionados con su encabezado.
- [ ] Comprobar el documento con Nu HTML Checker.
