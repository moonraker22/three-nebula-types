# three-nebula-types

![npm](https://img.shields.io/npm/v/three-nebula-types)
![npm bundle size](https://img.shields.io/bundlephobia/min/three-nebula-types)
![npm](https://img.shields.io/npm/dt/three-nebula-types)

TypeScript definitions for the `three-nebula` npm module.

## Installation

```
npm install three-nebula-types
```

## Usage
#### Easiest use is to copy or cut the file three-nebula-types from node-modules/three-nebula-types to node-modules/@types/three-nebula-types and rename to three-nebula or alternatively change the typeroots of your tsconfig to recognize three-nebula-types

To use the TypeScript definitions for the `three-nebula` npm module, simply import the types into your TypeScript file:

```typescript
import * as THREE from 'three'
import { Emitter, Force, Initialize, Zone } from 'three-nebula'
import { WebGLRenderer } from 'three-nebula/examples'

// Your code here...
```

Ensure that you have already installed the `three` and `three-nebula` npm packages.

## Documentation

For detailed documentation on how to use the `three-nebula` module, refer to the official [three-nebula GitHub repository](https://github.com/creativelifeform/three-nebula).

## License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the GitHub repository: [three-nebula-types](https://github.com/your-username/three-nebula-types).

## Credits

The `three-nebula-types` package is maintained by [MooNRakeR](https://github.com/moonraker22).

Special thanks to the creators of the [three-nebula](https://github.com/creativelifeform/three-nebula) module for providing the original library.

## Support

If you find this package helpful, consider supporting the project by starring the repository on GitHub.

Your support is greatly appreciated!

## Related Packages

- [three](https://www.npmjs.com/package/three): The JavaScript 3D library.
- [three-nebula](https://www.npmjs.com/package/three-nebula): Particle system library for Three.js.

## Changelog

- **0.0.1** (2023-6-16)
  - Initial alpha release.
