module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    sass: {
      options: {
        "style": "compressed"
      },
      build: {
        src: "source/scss/style.scss",
        dest: "build/css/style.css"
      }
    },

    csscomb: {
      build: {
        src: "build/css/style.css",
        dest: "build/css/style.sorted.css"
      }
    },

    cssmin: {
      build: {
        src: "build/css/style.sorted.css",
        dest: "build/css/style.min.css"
      }
    },

    jade: {
      html: {
        files: [
          {
            expand: true,
            cwd: "source/jade/",
            src: ["*.jade"],
            dest: "build/",
            ext: ".html"
          }
        ]
      }
    },

    imagemin: {
      options: {
        optimizationLevel: 3,
      },
      build: {
        expand: true,   
        cwd: "source/img/",           
        src: ['*.{png,jpg,jpeg,gif}'],   
        dest: 'build/img/' 
      }
    },

    uglify: {
      options: {
        mangle: true
      },
      build: {
        src: "source/js/*.js",
        dest: "build/js/script.min.js"
      }
    },

    watch: {
      options: {
        livereload: true
      },
      html: {
        files: ["source/jade/**/*.jade"],
        tasks: ["pages"]
      },
      css: {
        files: ["source/scss/**/*.scss"],
        tasks: ["styles"]
      },
      scripts: {
        files: ["source/js/**/*.js"],
        tasks: ["scripts"]
      },
      images: {
        files: ["source/img/**/*.*"],
        tasks: ["images"]
      }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-csscomb");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks("grunt-contrib-imagemin");

  grunt.registerTask("default", "watch");
  grunt.registerTask("styles", ["sass", "csscomb", "cssmin"]);
  grunt.registerTask("scripts", "uglify");
  grunt.registerTask("pages", "jade");
  grunt.registerTask("images", "imagemin");

};
