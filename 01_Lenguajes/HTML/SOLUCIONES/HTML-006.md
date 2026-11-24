# Solución: HTML-006 — Multimedia accesible

**Estado:** revisada a nivel de estructura. No se incluyen archivos MP3 o MP4 de ejemplo.

## Idea

Los controles nativos permiten iniciar, pausar y controlar la reproducción. El elemento track conecta el video con subtítulos WebVTT y una transcripción separada ofrece otra forma de consultar el contenido.

## Archivo

[HTML-006.html](HTML-006.html)

## Archivos que debes aportar

- assets/introduccion.mp3: audio propio o autorizado.
- assets/introduccion.mp4: video propio o autorizado.
- assets/subtitulos-es.vtt: ejemplo de subtítulos incluido en esta carpeta.

## Decisiones importantes

- controls permite que la persona controle la reproducción.
- source especifica el archivo y su tipo MIME.
- track kind="captions" enlaza los subtítulos.
- srclang indica el idioma de la pista.
- La transcripción escrita no depende del reproductor multimedia.
- No se utiliza autoplay.

## Revisión

- [x] El HTML incluye controles de audio y video.
- [x] El video referencia una pista WebVTT en español.
- [x] Existe una transcripción de ejemplo.
- [ ] Colocar los archivos multimedia en assets.
- [ ] Probar la reproducción y los subtítulos en un navegador.
