module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          "css/estilos.css": "css/estilos.scss"
        }
      }
    },
    watch: {
      styles: {
        files: ['**/*.scss'], // Quais arquivos o grunt ficará de olho
        tasks: ['sass']
      }
    },
    browserSync: {
      public: {
        bsFiles: {
          src: ['./**/*']
        },
        options: {
          watchTask: true,
          server: {
            baseDir: './'
          }
        }
      }
    }
  });

  grunt.registerTask('default', ['sass', 'watch']);

  grunt.registerTask('server', ['browserSync', 'watch'])

  grunt.loadNpmTasks('grunt-browser-sync')
  grunt.loadNpmTasks('grunt-contrib-sass');
};
