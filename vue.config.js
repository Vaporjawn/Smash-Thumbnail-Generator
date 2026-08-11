module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/Smash-Thumbnail-Generator/'
      : '/',

    transpileDependencies: [
      'vuetify'
    ]
}
