# Solución: HTML-009 — Contenido interactivo nativo

**Estado:** revisada a nivel de estructura; no se ejecutó un validador automático.

## Idea

Se utilizan elementos que ya incluyen comportamiento nativo del navegador. details permite expandir respuestas; dialog presenta un aviso; progress y meter representan valores distintos.

## Archivo

[HTML-009.html](HTML-009.html)

## Decisiones importantes

- summary es el primer hijo de cada details.
- open hace que el primer bloque aparezca expandido.
- dialog con open se muestra sin ser modal.
- form method="dialog" cierra el diálogo al enviar.
- progress representa el avance de una tarea.
- meter representa una medida dentro de un rango.
- label proporciona un nombre a cada indicador.

## Revisión

- [x] Hay tres bloques details.
- [x] Uno aparece abierto al cargar.
- [x] El diálogo se puede cerrar.
- [x] Los indicadores tienen etiquetas.
- [ ] Probar la interacción en un navegador.
