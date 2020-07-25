const { NODE_ENV } = process.env;

module.exports = function exports(api) {
  api.cache(true);

  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-export-namespace-from'
  ];

  if (NODE_ENV === 'development') {
    plugins.push('react-refresh/babel');
  }

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            browsers: [
              'last 2 Chrome versions',
              'last 2 Firefox versions',
              'last 2 Safari versions',
              'last 2 Edge versions'
            ]
          },
          debug: NODE_ENV === 'production'
        }
      ],
      [
        '@babel/preset-typescript',
        {
          allExtensions: true,
          isTSX: true
        }
      ],
      '@babel/preset-react',
      [
        '@emotion/babel-preset-css-prop',
        {
          sourceMap: NODE_ENV === 'development'
        }
      ]
    ],
    plugins,
    env: {
      development: {
        plugins: ['@babel/transform-runtime']
      }
    }
  };
};
