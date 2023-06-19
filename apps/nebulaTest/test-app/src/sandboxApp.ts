import * as THREE from 'three'
import Nebula, { SpriteRenderer } from 'three-nebula'
import getThreeApp from './getThreeApp'
// import json from './particle.json'
// import json from './test.json'
import { particlesJson } from './jsonCreator'
console.log('🚀 ~ file: sandboxApp.ts:7 ~ particlesJson:', particlesJson)

interface App {
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
}

function animate(nebula: Nebula, app: App) {
  requestAnimationFrame(() => animate(nebula, app))

  nebula.update()
  app.renderer.render(app.scene, app.camera)
}

Nebula.fromJSONAsync(JSON.parse(particlesJson), THREE).then((loaded) => {
  const app = getThreeApp()
  const nebulaRenderer = new SpriteRenderer(app.scene, THREE)

  const nebula = loaded.addRenderer(nebulaRenderer)

  animate(nebula, app)
})
