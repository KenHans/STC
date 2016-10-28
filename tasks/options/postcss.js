module.exports = {
  options: {
    map: true,
    processors: [
      require('autoprefixer')({browsers: ['>5%']})
    ]
  },
  dist: {
    src: 'css/build/*.css',
    dest: 'css/build/prefixed/style.css'
  }
}