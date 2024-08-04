module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(fbx)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'static/models/',
              publicPath: '/_next/static/models/',
            },
          },
        ],
      });
  
      return config;
    },
  };
  