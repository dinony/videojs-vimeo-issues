import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'
import 'videojs-vimeo'

const player = videojs('player', {
  preload: 'auto',
  controls: true,
  autoplay: false,
  techOrder: ['html5', 'vimeo']
})

player.on('durationchange', () => {
  console.log('durationchange', player.duration())
})

player.on('loadedmetadata', () => {
  console.log('loadedmetadata', player.duration())
})

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

btn1.addEventListener('click', () => {
  console.log('SET SRC 1')
  player.src({type: 'video/vimeo', src: 'https://vimeo.com/190855745'})
})

btn2.addEventListener('click', () => {
  console.log('SET SRC 2')
  player.src({type: 'video/vimeo', src: 'https://vimeo.com/3100872'})
})
