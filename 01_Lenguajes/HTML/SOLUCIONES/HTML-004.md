# Solución: HTML-004 — Tabla de datos

**Estado:** revisada a nivel de estructura; no se ejecutó un validador automático.

## Idea

La primera fila contiene encabezados de columna. En cada fila de datos, el nombre del lenguaje funciona como encabezado de fila. Las demás celdas contienen datos.

## Archivo

[HTML-004.html](HTML-004.html)

## Decisiones importantes

- caption describe el propósito de la tabla.
- thead agrupa los encabezados y tbody las filas de datos.
- th identifica las celdas de encabezado.
- scope="col" asocia encabezados con columnas.
- scope="row" identifica el encabezado de cada fila.
- td contiene datos ordinarios.

## Revisión

- [x] La tabla tiene un caption.
- [x] Hay encabezados de columna y de fila.
- [x] Las celdas contienen datos relacionados con sus encabezados.
- [ ] Comprobar el documento con Nu HTML Checker.
