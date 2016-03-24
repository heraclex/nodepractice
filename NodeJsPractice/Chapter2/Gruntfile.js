module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            javascript: {
                src: 'src/**/*.js',
                dest: 'build/scripts.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);
}