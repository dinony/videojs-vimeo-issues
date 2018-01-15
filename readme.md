# videojs-vimeo Issues

## durationchange / loadedmetadata: [Issue 135](https://github.com/videojs/videojs-vimeo/issues/135)

1. Clone project
2. Open console and cd to directory
3. Checkout `issue-durationchange` [tag](https://github.com/dinony/videojs-vimeo-issues/releases/tag/issue-durationchange)
4. Run `npm i && npm run dev`
5. Open [browser](http://localhost:8080/)
6. Click `Vimeo video` button and observe in console
  * durationchange 0 (EXPECTED: duration of video)
7. Click `Custom video`button and observe in console
  * durationchange NaN (Hmm, not expecting a NaN value here)
  * durationchange 42.562177 (Here duration is available)
  * loadedmetadata 42.562177 (Here duration is available)
