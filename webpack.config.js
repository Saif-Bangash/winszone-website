/* eslint-disable import/no-anonymous-default-export */
import path from 'path';

export default {
  resolve: {
    fallback: {
      timers: require.resolve('timers-browserify'), // Polyfill for 'timers'
      // Add other necessary fallbacks here
    },
  },
  entry: './src/index.js', // Your main entry point
  output: {
    filename: 'bundle.js', // Output filename
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      // Add your loaders here (e.g., for Babel, CSS, etc.)
    ],
  },
  // Other configurations like plugins, devServer, etc.
};
