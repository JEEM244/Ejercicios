# Solution: HTML-006 — Accessible media

**Status:** reviewed for structure. No sample MP3 or MP4 files are included.

## Idea

Native controls allow users to start, pause, and control playback. The track element connects the video to WebVTT captions, and a separate transcript provides another way to access the content.

## File

[HTML-006.html](HTML-006.html)

## Files you need to provide

- assets/introduccion.mp3: audio you created or are allowed to use.
- assets/introduccion.mp4: video you created or are allowed to use.
- assets/subtitulos-es.vtt: sample captions file available in this folder.

## Important decisions

- controls lets users control playback.
- source specifies the file and its MIME type.
- track kind="captions" links the captions.
- srclang identifies the track language.
- The written transcript does not depend on the media player.
- autoplay is not used.

## Review

- [x] HTML includes audio and video controls.
- [x] The video references a Spanish WebVTT track.
- [x] A sample transcript is included.
- [ ] Place media files inside assets.
- [ ] Test playback and captions in a browser.
