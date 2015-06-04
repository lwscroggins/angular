'use strict'

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.initConfig({
    clean: {
      dev: {
        src: 'build/'
      }
    },

    copy: {
      dev: {
        expand: true,
        cwd: 'app/',
        src: ['*.html', 'css/*.css','img/*.*', 'views/**/*.html'],
        dest: 'build/',
        filter: 'isFile'
      }
    },

    browserify: {
      dev: {
        options: {
          transform: ['debowerify'],
          debug: true
        },
        src: ['app/js/*.js'],
        dest: 'build/bundle.js'
      }
    },

    nodemon: {
        dev: {
            script: 'server.js',
            options: {
                args: [],
                nodeArgs: [],
                env: {
                    PORT: '4120',
                    NODE_ENV: 'dev'
                },
                cwd: __dirname,
                ignore: ['node_modules/**'],
                ext: 'js',
                watch: ['server'],
                delay: 1
            }
        },
        prod: {
            script: 'server.js',
            options: {
                args: [],
                nodeArgs: [],
                env: {
                    PORT: '4120',
                    NODE_ENV: 'prod'
                },
                cwd: __dirname,
                ignore: ['node_modules/**'],
                ext: 'js',
                watch: ['server'],
                delay: 1
            }
        }
    },

    express: {
      dev: {
        options: {
          options: 'server.js',
          background: true
        }
      }
    },

    watch: {
      express: {
        files: ['app/js/**/*.js', 'app/views/index.html', 'server.js', 'app/css/*.css', 'app/views/**/*.html'],
        tasks: ['clean:dev', 'browserify:dev', 'copy:dev', 'express:dev'],
        options: {
          spawn: false
        }
      }
    },

    concurrent: {
        tasks: ['nodemon:dev', 'watch'],
        options: {
            logConcurrentOutput: true
        }
    }
  });

  grunt.registerTask('build:dev', ['clean:dev','browserify:dev', 'copy:dev', 'concurrent']);
  grunt.registerTask('default', ['test', 'watch:express', 'concurrent']);
};