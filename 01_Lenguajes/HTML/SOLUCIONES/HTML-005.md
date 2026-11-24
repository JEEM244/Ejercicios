# Solución: HTML-005 — Formulario de registro

**Estado:** revisada a nivel de estructura; no se conectó a un servidor.

## Idea

Cada control utiliza un label asociado mediante for e id. Los atributos name identifican los datos que se enviarían, y required activa validación básica del navegador.

## Archivo

[HTML-005.html](HTML-005.html)

## Decisiones importantes

- type="email" permite comprobar el formato básico de un correo.
- select ofrece opciones predefinidas.
- Los dos radio buttons comparten name="nivel", por lo que forman un mismo grupo.
- fieldset y legend nombran y agrupan las opciones.
- textarea permite escribir una explicación más larga.
- El formulario utiliza un envío GET a la misma página como demostración. No guarda los datos ni los envía a una base de datos.

## Revisión

- [x] Los controles tienen etiquetas asociadas.
- [x] Los campos principales tienen name.
- [x] Hay required en los campos necesarios.
- [x] Las opciones radio comparten el mismo name.
- [ ] Probar el formulario en un navegador.
- [ ] En una aplicación real, validar también los datos en el servidor.
