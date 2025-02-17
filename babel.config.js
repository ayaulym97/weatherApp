module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/api': './src/api',
          '@/config': './src/config',
          '@/modules': './src/modules',
          '@/navigation': './src/navigation',
          '@/store': './src/store',
          '@/shared': './src/shared',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
