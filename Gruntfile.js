/**
 * grunt-pagespeed-ngrok
 * http://www.jamescryer.com/grunt-pagespeed-ngrok
 *
 * Copyright (c) 2014 James Cryer
 * http://www.jamescryer.com
 *
 * Modified by Jonathan Gall
 **/

var ngrok = require('ngrok');

module.exports = function(grunt) {
    'use strict';
    //Load grunt tasks
    require('load-grunt-tasks')(grunt);

    var config = grunt.file.readYAML('Gruntconfig.yml');

    // Grunt configuration

    grunt.initConfig({
        responsive_images: {
            myTask: {
                options: {
                    sizes: [{
                        width: 320,
                        height: 240
                    }, {
                        name: 'small',
                        width: 100,
                        quality: 10
                    }, {
                        name: 'large',
                        width: 640
                    }, {
                        name: "large",
                        width: 1024,
                        suffix: "_x2",
                        quality: 60
                    }]
                },
                files: [{
                    expand: true,
                    src: ['**/**.{jpg,gif,png}'],
                    cwd: 'views/images/',
                    dest: 'dist/img/'
                }]
            },
        },
        concat: {
            dist: {
                src: config.jsSrcDir + '*.js',
                dest: config.jsConcatDir + 'scripts.js'
            },
        },
        uglify: {
            my_target: {
                files: {
                    'dist/js/output.min.js': ['dist/js/scripts.js']
                }
            },
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            },
        },
        pagespeed: {
            options: {
                nokey: true,
                locale: 'en_GB',
                threshold: 40
            },
            local: {
                options: {
                    strategy: 'desktop'
                }
            },
            mobile: {
                options: {
                    strategy: 'mobile'
                }
            }
        }
    });

    // Register customer task for ngrok
    grunt.registerTask('udacity-ngrok', 'Run pagespeed with ngrok', function() {
        var done = this.async();
        var port = 8080;

        ngrok.connect(port, function(err, url) {
            if (err !== null) {
                grunt.fail.fatal(err);
                return done();
            }
            grunt.config.set('pagespeed.options.url', url);
            grunt.task.run('pagespeed');
            done();
        });
    });


    // Register default tasks
    grunt.registerTask('default', ['responsive_images', 'concat', 'uglify', 'cssmin', 'udacity-ngrok']);
};
