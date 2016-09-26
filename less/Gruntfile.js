module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        files: {
          "css/estilos.css": "css/estilos.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['**/*.less'], // Quais arquivos o grunt ficará de olho
        tasks: ['less']
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

  grunt.registerTask('default', ['less', 'watch']);

  grunt.registerTask('server', ['browserSync', 'watch'])

  grunt.loadNpmTasks('grunt-browser-sync')
};
