module.exports = function(grunt) {
 var component = require('./bower.json'),
    version = component.version;

  // configurable paths
  var yeomanConfig = {
    app: 'app',
    dist: 'dist',
    appVersion: version
  };

 
  grunt.initConfig({
    yeoman: yeomanConfig,
    uglify: {
      build: {
        src: ['app/scripts/calHeatmap.js'],
        dest: '<%= yeoman.dist %>/<%= yeoman.appVersion %>/calHeatmap.min.js'
      }
    }
 
  });
 
  grunt.loadNpmTasks('grunt-contrib-uglify');
 
  grunt.registerTask('default', ['uglify']);
};