const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  outputDir: path.resolve(__dirname, '../../Backend/public/'),
  transpileDependencies: true,

  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000/api/movies',  // 이게 말이 되나.. localhost:3000으로 하면 안된다..어이가 없네..
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
});
