module.exports = function(grunt) {
	require('jit-grunt')(grunt);
	grunt.initConfig({
		less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
					"../zimmybooks/wp-content/themes/zimmyb-site/style.css": "less/main.less"
					//"../zimmybooks/wp-content/themes/zimmyb-site/css/save-the-pig.css": "less/save-the-pig.less"
        }
      }
    },
		watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
	});
	grunt.registerTask('default', ['less', 'watch']);
}
