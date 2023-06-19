import Particle from '../core/Particle'
import { Emitter } from '../emitter'
import { INITIALIZER_TYPES } from './types'
/**
 * The base Emitter / Particle property class.
 *
 * @abstract
 */
export default class Initializer {
  constructor(type: INITIALIZER_TYPES, isEnabled: boolean)
  /**
   * Initializes the property on the emitter or particle.
   *
   * @see {@link '../emitter/emitter.js'} setupParticle
   * @param {Emitter} emitter - the emitter to initialize the property on
   * @param {Particle} particle - the particle to intiialize the property on
   * @return void
   */
  init(emitter: Emitter, particle: Particle): void
  /**
   * Determines if the initializer requires a Web GL API to be provided to its constructor.
   * If true, the WebGL API will need to be provided as the first argument to the constructor
   * and fromJSON methods.
   *
   * @return {boolean}
   */
  static requiresWebGlApi(): boolean
}