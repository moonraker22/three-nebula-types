import * as THREE from 'three'
import ParticleSystem, {
  Alpha,
  Attraction,
  Body,
  BodySprite,
  Collision,
  Color,
  CrossZone,
  Debug,
  Emitter,
  Force,
  Gravity,
  InitializerUtil,
  Life,
  Mass,
  MathUtils,
  PointZone,
  Polar3D,
  PolarVelocity,
  Position,
  RadialVelocity,
  Radius,
  RandomDrift,
  Rate,
  Repulsion,
  Rotate,
  Scale,
  Spring,
  Texture,
  Vector3D,
  VectorVelocity,
  ease,
} from 'three-nebula'
import { Vector3 } from '../src/core/three'

let System

// @ts-expect-error - wrong type
System = new ParticleSystem('string')

// @ts-expect-error - wrong type
System = new ParticleSystem({ properties: 'string' })

// Correct type
System = new ParticleSystem()
System = new ParticleSystem(500)

let emitter
const emitter2 = new Emitter()
// @ts-expect-error - wrong type
emitter = new Emitter('string')
// @ts-expect-error - wrong type
emitter = new Emitter(122)
// @ts-expect-error - wrong type
emitter.addInitializers('string')
// @ts-expect-error - wrong type
emitter.addInitializers(122)
// @ts-expect-error - wrong type
emitter.addInitializers([122])
// @ts-expect-error - wrong type
emitter.addInitializers([new Alpha({})])
// @ts-expect-error - wrong type
emitter.addInitializers([new Alpha({ properties: 'string' })])
// @ts-expect-error - wrong type
emitter.addInitializers([new Alpha({ properties: 122 })])
// @ts-expect-error - wrong type
emitter.addInitializer('string')
// @ts-expect-error - wrong type
emitter.addInitializer(122)
// @ts-expect-error - wrong type
emitter.addInitializer([122])
// @ts-expect-error - wrong type
emitter.addInitializer([new Alpha({})])
// @ts-expect-error - wrong type

//Initializers
emitter.addInitializer([new Alpha({ properties: 'string' })])
emitter.addInitializer(new Life(100, 200))
emitter.addInitializer(new Mass(1, 2))
emitter.addInitializer(new Radius(1, 2))
emitter.addInitializer(new RadialVelocity(10, new Vector3D(1, 2, 3)))
emitter.addInitializer(new Body(new THREE.Mesh()))
emitter.addInitializer(new Position(new PointZone(new Vector3D(1, 2, 3))))
emitter.addInitializer(new Radius(1, 2))
emitter.addInitializer(new Rate(1, 2))
emitter.addInitializer(new Texture(THREE, new THREE.Texture()))
emitter.addInitializer(new BodySprite(THREE, 'path/to/texture.png'))
emitter.addInitializer(new PolarVelocity(new Polar3D(1, 2, 3), 1, true))
emitter.addInitializer(new VectorVelocity(new Vector3D(1, 2, 3), 1, true))

// Behaviors
emitter.addBehaviour(new Alpha(1, 2))
emitter.addBehaviour(new Attraction(new Vector3D(1, 2, 3), 1, 2))
emitter.addBehaviour(new Collision(emitter2, true))
emitter.addBehaviour(
  new Color(new THREE.Color(0xff0000), new THREE.Color(0x00ff00))
)
emitter.addBehaviour(
  new CrossZone(new PointZone(new Vector3D(1, 2, 3)), 'bound')
)
emitter.addBehaviour(new Force(1, 2, 3, Infinity, ease.easeInSine))
emitter.addBehaviour(new Gravity(1, 2, ease.easeInSine))
emitter.addBehaviour(new RandomDrift(1, 2, 3, 10, Infinity, ease.easeInSine))
emitter.addBehaviour(
  new Repulsion(new Vector3D(1, 2, 3), 1, 2, Infinity, ease.easeInSine)
)
emitter.addBehaviour(new Rotate(1, 2, 3, Infinity, ease.easeInSine))
emitter.addBehaviour(new Scale(1, 2, Infinity, ease.easeInSine))
emitter.addBehaviour(new Spring(1, 2, 3, 10, 2, Infinity, ease.easeInSine))

// @ts-expect-error - wrong type
System.addEmitter('default', emitter)

System.addEmitter(emitter)

// @ts-expect-error - wrong type
System.addRenderer('string')

// Correct type
System.addRenderer(new THREE.WebGLRenderer())

const testJson = JSON.stringify({
  test: 'data',
})
// @ts-expect-error - wrong type
ParticleSystem.fromJSONAsync()

// @ts-expect-error - wrong type
ParticleSystem.fromJSONAsync('s')

// @ts-expect-error - wrong type
ParticleSystem.fromJSONAsync(JSON.parse(testJson))

// Correct type
ParticleSystem.fromJSONAsync(JSON.parse(testJson), THREE)
ParticleSystem.fromJSONAsync(JSON.parse(testJson), THREE, { options: true })

// @ts-expect-error - wrong type
Debug.addEventListener('emitterAdded', (emitter) => {
  console.log(emitter)
})

// Correct type
Debug.addEventListener(System, (emitter) => {
  console.log(emitter)
})

// @ts-expect-error - wrong type
MathUtils.toColor16('0xff0000')

// Correct type
MathUtils.toColor16(0xff0000)

// @ts-expect-error - wrong type
InitializerUtil.initialize(emitter, System)

// @ts-expect-error - wrong type
const vec = new Vector3('s', 2, 3)

// Correct type
const vec2 = new Vector3(1, 2, 3)
