import { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export let scene: THREE.Scene
export let camera: THREE.PerspectiveCamera
export let renderer: THREE.WebGLRenderer

export default () => {
  camera = new PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    1,
    1000
  )
  camera.position.z = 100
  scene = new Scene()
  const canvas = document.getElementById('canvas')
  //   const canvas = document.createElement('canvas')
  //   canvas.id = 'canvas'
  //   canvas.style.width = '100%'
  //   canvas.style.height = '100vh'
  //   canvas.style.position = 'absolute'
  //   canvas.style.top = '0'
  //   canvas.style.left = '0'
  //   canvas.style.zIndex = '-1'
  //   document.body.appendChild(canvas)

  const controls = new OrbitControls(camera, canvas as HTMLCanvasElement)
  controls.enableDamping = true
  renderer = new WebGLRenderer({
    canvas: canvas as HTMLCanvasElement,
  })

  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  //   renderer.setClearColor('black')

  //   document.body.appendChild(renderer.domElement)

  return { scene, camera, renderer }
}
