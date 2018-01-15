import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'
import 'videojs-vimeo'

const player = videojs('player', {
  preload: 'auto',
  controls: true,
  autoplay: false,
  techOrder: ['html5', 'vimeo']
})

// player.on('ready', () => {
//   console.log('ready')
// })

player.on('durationchange', () => {
  console.log('durationchange', player.duration())
})

player.on('loadedmetadata', () => {
  console.log('loadedmetadata', player.duration())
})

const cBtn = document.getElementById('cVideo')
const viBtn = document.getElementById('viVideo')

cBtn.addEventListener('click', () => {
  console.log('SET CUSTOM VIDEO')
  player.src({type: 'video/mp4', src: 'http://dinony.com/projects/rv/Cars.mp4'})
})

viBtn.addEventListener('click', () => {
  console.log('SET VIMEO VIDEO')
  player.src({ type: 'video/vimeo', src: 'https://vimeo.com/190855745'})
})
