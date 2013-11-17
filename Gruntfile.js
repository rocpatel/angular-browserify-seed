
var path = require('path');

module.exports = function(grunt) {
  require('matchdep')
    .filterDev('grunt-*')
    .forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        jshintrc : '.jshintrc'
      },
      all: {
        src: ['./app/**/*.js']
      }
    },
    sass : {
      main : {
        src : ['public/assets/sass/main.scss'],
        dest : 'public/assets/sass/main.css'
      }
    },
    connect: {
      test: {
        options: {
          port: 9090,
          base: './public/'
        }
      }
    },
    complexity: {
      options: {
        cyclomatic: 3,
        halstead: 10,
        maintainability: 100
      },
      generic: {
        src: '<%= jshint.all.src %>'
      }
    },
    browserify2: {
      app: {
        entry: './app/app.js',
        compile: './public/js/app.build.js'
      }
    },
    copy: {
      css: {
          src: './vendor/bootstrap/dist/css/bootstrap.css',
          dest: './public/css/bootstrap.css'
      },
      font: {
        src: './vendor/bootstrap/dist/fonts/*',
        dest: './public/fonts/*'
      }
    },
    concat : {
        options: {
          separator: ';'
        },
        vendor: {
          src: [
            './vendor/jquery/jquery.js',
            './vendor/angular/angular.js',
            './vendor/angular-cookies/angular-cookies.js',
            './vendor/angular-resource/angular-resource.js',
            './vendor/angular-route/angular-route.js',
            './vendor/bootstrap/dist/js/bootstrap.js'
          ],
          dest: './public/js/app.vendor.build.js'
        }
    },

    uglify : {
      build : {
        files: {
          './public/js/app.vendor.build.min.js': ['./public/js/app.vendor.build.js']
        }
      }
    },

    watch: {
      options : {
        interrupt:true
      },
      all: {
        files: '<%= jshint.all.src %>',
        tasks: ['jshint:all', 'nodeunit']
      },
      client: {
        files: ['./app/**/*.js'],
        tasks: ['browserify2']
      }
    }
  });

  // These plugins provide necessary tasks.

  grunt.registerTask('test', ['jshint', 'complexity', 'nodeunit']);

  grunt.registerTask('dev', ['default']);

  // Default task.
  grunt.registerTask('default', ['browserify2', 'concat', 'copy:css', 'copy:font', 'connect:test','watch:client']);
};
