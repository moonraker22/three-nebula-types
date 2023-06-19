// import * as THREE from 'three'

// const scene = new THREE.Scene()
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// )
// const canvas = document.getElementById('canvas')
// console.log('🚀 ~ file: index.ts:11 ~ canvas:', canvas)
// const renderer = new THREE.WebGLRenderer({
//   canvas: canvas as HTMLCanvasElement,
// })
// renderer.setSize(window.innerWidth, window.innerHeight)
// // document.body.appendChild(renderer.domElement)
// // if (canvas) canvas.appendChild(renderer.domElement)

// const geometry = new THREE.BoxGeometry(100, 100, 100)
// const material = new THREE.MeshBasicMaterial({ color: 'pink' })
// const cube = new THREE.Mesh(geometry, material)
// scene.add(cube)

// camera.position.z = 5

// const animate = () => {
//   requestAnimationFrame(animate)

//   cube.rotation.x += 0.01
//   cube.rotation.y += 0.01

//   renderer.render(scene, camera)
// }

// animate()
import * as THREE from 'three'
// import System, {
//   Alpha,
//   Attraction,
//   Body,
//   Emitter,
//   GPURenderer,
//   Gravity,
//   Life,
//   Mass,
//   PointZone,
//   Position,
//   RadialVelocity,
//   Radius,
//   RandomDrift,
//   Rate,
//   Scale,
//   Span,
//   Vector3D,
// } from 'three-nebula'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Init from './gpuRenderer'
/**
 * Base
 */
// Canvas
const canvas = document.querySelector('#canvas')

// Scene
const scene = new THREE.Scene()

// System
// const texture = new THREE.TextureLoader().load('nebula/fire_02.png')
// const createSprite = () => {
//   const map = texture
//   const material = new THREE.SpriteMaterial({
//     map: map,
//     color: 0xff0000,
//     blending: THREE.AdditiveBlending,
//     fog: true,
//   })
//   return new THREE.Sprite(material)
// }
// const system = new System(500)
// const createEmitter = () => {
//   const emitter = new Emitter()
//   emitter
//     .setRate(new Rate(new Span(2, 4), new Span(0.01)))
//     .addInitializers([
//       // new Body(createSprite()),
//       // new BodySprite(THREE, textureURL),
//       // new Life(),
//       // new Position(new SphereZone()),
//       // new Mass(1),
//       // new Radius(4, 8),
//       // new Rate(1),
//       // new Life(3),
//       // new RadialVelocity(45, new Vector3D(0, 1, 0), 180),
//       // new Texture(THREE, texture),
//       new Body(createSprite()),
//       new Position(new PointZone(0, 0)),
//       new Mass(1),
//       new Radius(4, 8),
//       new Life(3),
//       new RadialVelocity(45, new Vector3D(0, 1, 0), 180),
//     ])
//     .addBehaviours([
//       // new Alpha(1, 0),
//       // new Scale(2, 4),
//       // new Color(color1, color2),
//       // new Gravity(0.3),
//       // new Attraction(new Vector3D(0, 0, 0), 100, 300),
//       // new Collision(emitter),
//       // new CrossZone(new SphereZone()),
//       // new Gravity(),
//       // new RandomDrift(10, 10, 10),
//       // new Repulsion(),
//       // new Rotate('random', 'random'),
//       // new Scale(1, 0.5),
//       new Alpha(1, 0),
//       new Scale(2, 40),
//       // new Color(color1, color2),
//       new Gravity(0.3),
//       new Attraction(new Vector3D(0, 0, 0), 100, 200),
//       new RandomDrift(10, 10, 10),
//     ])

//     .emit()
//   return emitter
// }

// system.addEmitter(createEmitter()).addRenderer(new GPURenderer(scene, THREE))

// const animate = (system:System) => {
//     const stop = requestAnimationFrame(() => animate(system))
//     system.update()
//     return stop
// }

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
)
camera.position.z = 10
scene.add(camera)
// Controls
const controls = new OrbitControls(camera, canvas as HTMLCanvasElement)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas as HTMLCanvasElement,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Animate
const clock = new THREE.Clock()
const gpuRenderer = Init({ scene, camera, renderer })

const tick = () => {
  const elapsedTime = clock.getElapsedTime()
  const delta = clock.getDelta()

  // Update controls
  controls.update()

  // Update system
  //   system.update(delta)
  gpuRenderer.update(delta)

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()
