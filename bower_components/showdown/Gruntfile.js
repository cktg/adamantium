module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json'),
    npmTasks = [
      'grunt-contrib-uglify'
    ];

  grunt.initConfig({
    pkg: pkg,
    uglify: {
      main: {
        options: {
          sourceMap: true
        },
        files: {
          'showdown.min.js': 'showdown.js'
        }
      }
    }
  });

  npmTasks.forEach(function(task) {
    grunt.loadNpmTasks(task);
  });

  grunt.registerTask('default', ['uglify']);
};