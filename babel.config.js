import presetEnv from '@babel/preset-env';
import presetTypescript from '@babel/preset-typescript';
import pluginTransformRuntime from '@babel/plugin-transform-runtime';

export default {
  presets: [
    [
      // ES features necessary for user's Node version
      presetEnv,
      {
        targets: {
          node: 'current',
        },
      },
    ],
    [presetTypescript],
  ],
  plugins: [
    // Polyfills the runtime needed for async/await, generators, and friends
    // https://babeljs.io/docs/en/babel-plugin-transform-runtime
    [pluginTransformRuntime],
  ],
};
