module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email: 'jjhalwa@gmail.com',
                token: 'c5023875-b07b-42db-968a-e33bf71076a4',
                branch: 'default',
                //server: 'season'
            },
            dist: {
                src: ['dist/*.js']
            }
        }
    });
}
