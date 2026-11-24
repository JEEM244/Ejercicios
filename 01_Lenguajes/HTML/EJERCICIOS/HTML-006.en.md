# HTML-006 — Add media with accessible alternatives

- **Topic:** audio, video, and accessibility
- **Level:** beginner
- **Type:** complete and review a page
- **Requirements:** understand file paths, attributes, and semantic content

## Objective

Embed audio and video with user controls and text alternatives.

## Prompt

Create a page with a sample audio file and a short video related to a study topic. Use files you created or have permission to use.

## Requirements

1. Create a heading that explains the page content.
2. Insert an audio player with the controls attribute.
3. Insert a video player with controls and a suitable width.
4. Use source inside each player and specify the MIME type for each resource.
5. Add fallback text inside audio and video.
6. For the video, add a captions track that points to a Spanish WebVTT file.
7. Add a link to a written transcript of the audio or video.
8. Organize the content inside main and use headings for each section.

## Restrictions

- Do not enable autoplay.
- Do not use media you do not have permission to publish.
- Do not communicate important information only through sound or images.
- Audio, video, and VTT files must be available at the specified paths.

## Expected result

The page displays playback controls, the video offers a subtitle track, and a transcript is available as text.

## Review cases

| Check | Expected result |
|---|---|
| Audio | An audio element has controls and source. |
| Video | A video element has controls, source, and width. |
| Captions | track points to a VTT file and declares a language. |
| Alternatives | A transcript or text alternative exists. |
| Usability | Automatic playback is not requested. |
| Structure | main and headings are used. |

## Starter file

Continue from [HTML-006.html](HTML-006.html).

## Hints

<details>
<summary>Show hint 1</summary>

The track element goes inside video, after the source elements.

</details>

<details>
<summary>Show hint 2</summary>

A WebVTT file begins with the WEBVTT line. Each caption block includes a start time, an end time, and the corresponding text.

</details>

## Solution

After trying the exercise, see [SOLUCIONES/HTML-006.html](../SOLUCIONES/HTML-006.html).

## Sources

- [MDN — Audio and video](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [MDN — track element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/track)
- [MDN — Accessible multimedia](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/Multimedia)
