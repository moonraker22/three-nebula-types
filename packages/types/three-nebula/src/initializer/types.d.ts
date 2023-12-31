export const INITIALIZER_TYPE_ABSTRACT: 'Initializer';
export const INITIALIZER_TYPE_BODY: 'Body';
export const INITIALIZER_TYPE_BODY_SPRITE: 'BodySprite';
export const INITIALIZER_TYPE_TEXTURE: 'Texture';
export const INITIALIZER_TYPE_LIFE: 'Life';
export const INITIALIZER_TYPE_MASS: 'Mass';
export const INITIALIZER_TYPE_POSITION: 'Position';
export const INITIALIZER_TYPE_ROTATION: 'Rotation';
export const INITIALIZER_TYPE_RADIUS: 'Radius';
export const INITIALIZER_TYPE_ZONE: 'Zone';
export const INITIALIZER_TYPE_VECTOR_VELOCITY: 'VectorVelocity';
export const INITIALIZER_TYPE_POLAR_VELOCITY: 'PolarVelocity';
export const INITIALIZER_TYPE_RADIAL_VELOCITY: 'RadialVelocity';
export const INITIALIZER_TYPE_RATE: 'Rate';
export const INITIALIZER_TYPES_THAT_REQUIRE_THREE: [
    typeof INITIALIZER_TYPE_BODY_SPRITE,
    typeof INITIALIZER_TYPE_TEXTURE,
];

export type INITIALIZER_TYPES =
    | typeof INITIALIZER_TYPE_ABSTRACT
    | typeof INITIALIZER_TYPE_BODY
    | typeof INITIALIZER_TYPE_BODY_SPRITE
    | typeof INITIALIZER_TYPE_TEXTURE
    | typeof INITIALIZER_TYPE_LIFE
    | typeof INITIALIZER_TYPE_MASS
    | typeof INITIALIZER_TYPE_POSITION
    | typeof INITIALIZER_TYPE_ROTATION
    | typeof INITIALIZER_TYPE_RADIUS
    | typeof INITIALIZER_TYPE_ZONE
    | typeof INITIALIZER_TYPE_VECTOR_VELOCITY
    | typeof INITIALIZER_TYPE_POLAR_VELOCITY
    | typeof INITIALIZER_TYPE_RADIAL_VELOCITY
    | typeof INITIALIZER_TYPE_RATE;
