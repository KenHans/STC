module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded',
      lineNumbers:true
    },
    files: {
      'css/build/style.css': 'css/style.scss'
    }
  }
}