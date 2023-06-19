import { MathUtils } from 'three'
const getBase64StringFromDataURL = (dataURL) =>
  dataURL.replace('data:', '').replace(/^.+,/, '')

const particles = {
  preParticles: 500,
  integrationType: 'EULER',
  emitters: [
    {
      id: MathUtils.generateUUID(),
      totalEmitTimes: null,
      life: null,
      cache: { totalEmitTimes: null, life: null },
      rate: {
        particlesMin: 1,
        particlesMax: 4,
        perSecondMin: 0.01,
        perSecondMax: 0.02,
      },
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      initializers: [
        {
          id: MathUtils.generateUUID(),
          type: 'Mass',
          properties: { min: 30, max: 10, isEnabled: true },
        },
        {
          id: MathUtils.generateUUID(),
          type: 'Life',
          properties: { min: 2, max: 4, isEnabled: true },
        },
        {
          id: MathUtils.generateUUID(),
          type: 'BodySprite',
          properties: {
            texture:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJkSURBVHjaxJeJbusgEEW94S1L//83X18M2MSuLd2pbqc4wZGqRLrKBsyZhQHny7Jk73xVL8xpVhWrcmiB5lX+6GJ5YgQ2owbAm8oIwH1VgKZUmGcRqKGGPgtEQQAzGR8hQ59fAmhJHSAagigJ4E7GPWRXOYC6owAd1JM6wDQPADyMWUqZRMqmAojHp1Vn6EQQEgUNMJLnUjMyJsM49wygBkAPw9dVFwXRkncCIIW3GRgoTQUZn6HxCMAFEFd8TwEQ78X4rHbILoAUmeT+RFG4UhQ6MiIAE4W/UsYFjuVjAIa2nIY4q1R0GFtQWG3E84lqw2GO2QOoCKBVu0BAPgDSU0eUDjjQenNkV/AW/pWChhpMTelo1a64AOKM30vk18GzTHXCNtI/Knz3DFBgsUqBGIjTInXRY1yA9xkVoqW5tVq3pDR9A0hfF5BSARmVnh7RMDCaIdcNgbPBkgzn1Bu+SfIEFSpSBmkxyrMicb0fAEuCZrWnN89veA/4XcakrPcjBWzkTuLjlbfTQPOlBhz+HwkqqPXmPQDdrQItxE1moGof1S74j/8txk8EHhTQrAE8qlwfqS5yukm1x/rAJ9Jiaa6nyATqD78aUVBhFo8b1V4DdTXdCW+IxA1zB4JhiOhZMEWO1HqnvdoHZ4FAMIhV9REF8FiUm0jsYPEJx/Fm/N8OhH90HI9YRHesWbXXZwAShU8qThe7H8YAuJmw5yOd989uRINKRTJAhoF8jbqrHKfeCYdIISZfSq26bk/K+yO3YvfKrVgiwQBHnwt8ynPB25+M8hceTt/ybPhnryJ78+tLgAEAuCFyiQgQB30AAAAASUVORK5CYII=',
            isEnabled: true,
          },
        },
        {
          id: MathUtils.generateUUID(),
          type: 'Radius',
          properties: { width: 12, height: 4, isEnabled: true },
        },
        {
          id: MathUtils.generateUUID(),
          type: 'RadialVelocity',
          properties: {
            radius: 10,
            x: 0,
            y: 5,
            z: 0,
            theta: 900,
            isEnabled: true,
          },
        },
      ],
      behaviours: [
        {
          id: MathUtils.generateUUID(),
          type: 'Alpha',
          properties: {
            alphaA: 1,
            alphaB: 0,
            life: null,
            easing: 'easeLinear',
          },
        },
        {
          id: MathUtils.generateUUID(),
          type: 'Color',
          properties: {
            colorA: '#002a4f',
            colorB: '#0029FF',
            life: null,
            easing: 'easeOutCubic',
          },
        },
        {
          id: MathUtils.generateUUID(),
          type: 'Scale',
          properties: {
            scaleA: 1,
            scaleB: 0.5,
            life: null,
            easing: 'easeLinear',
          },
        },
        {
          id: MathUtils.generateUUID(),
          type: 'Force',
          properties: {
            fx: 0,
            fy: 5,
            fz: 0,
            life: null,
            easing: 'easeLinear',
          },
        },
        {
          id: MathUtils.generateUUID(),
          type: 'Rotate',
          properties: {
            x: 1,
            y: 0,
            z: 0,
            life: null,
            easing: 'easeLinear',
          },
        },
        {
          id: MathUtils.generateUUID(),
          type: 'RandomDrift',
          properties: {
            driftX: 1,
            driftY: 23,
            driftZ: 4,
            delay: 1,
            life: null,
            easing: 'easeLinear',
          },
        },
        {
          id: MathUtils.generateUUID(),
          type: 'Spring',
          properties: {
            x: 1,
            y: 5,
            z: 0,
            spring: 0.01,
            friction: 1,
            life: null,
            easing: 'easeLinear',
          },
        },
      ],
      emitterBehaviours: [],
    },
  ],
}

export const particlesJson = JSON.stringify(particles, null, 2)

//   const image = document.getElementById('my-image')

//   // Get the remote image as a Blob with the fetch API
//   fetch(image.src)
//     .then((res) => res.blob())
//     .then((blob) => {
//       // Read the Blob as DataURL using the FileReader API
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         console.log(reader.result)
//         // Logs data:image/jpeg;base64,wL2dvYWwgbW9yZ...

//         // Convert to Base64 string
//         const base64 = getBase64StringFromDataURL(reader.result)
//         console.log(base64)
//         // Logs wL2dvYWwgbW9yZ...
//       }
//       reader.readAsDataURL(blob)
//     })
