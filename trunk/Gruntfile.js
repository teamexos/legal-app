// Generated on 2013-06-07 using generator-baseapp 0.0.0
'use strict';
var lrSnippet    = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder  = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist/app'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        livereload: {
            port: 35731
        },
        watch: {
            compass: {
                files: [
                    '<%= yeoman.app %>/styles/{,*/}*.{scss,sass}',
                    '<%= yeoman.app %>/components/user-interface-library/{,*/}*.{scss,sass}'
                ],
                tasks: ['compass']
            },
            livereload: {
                files: [
                    '<%= yeoman.app %>/*.html',
                    '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/media/{,*/}*.{png,jpg,jpeg,webp,svg}'
                ],
                tasks: ['livereload']
            }
        },
        connect: {
            options: {
                port: 9001,
                // change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'app')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, 'dist')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: ['.tmp', '<%= yeoman.dist %>/*'],
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '.tmp/styles',
                imagesDir: '<%= yeoman.app %>/media/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '/components/user-interface-library/media/fonts',
                importPath: 'app/components',
                relativeAssets: true
            },
            dist: {},
            server: {
                options: {
                    debugInfo: false
                }
            }
        },
        // not used since Uglify task does concat,
        // but still available if needed
        /*concat: {
            dist: {}
        },*/
        
        uglify: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/scripts/respond.js': '<%= yeoman.app %>/components/respond/respond.src.js',
                    '<%= yeoman.dist %>/scripts/jquery.placeholder.js': '<%= yeoman.app %>/components/jquery-placeholder/jquery.placeholder.js'
                }
            }
        },
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/media',
                    src: '{,**/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/media'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/main.css': [
                        '.tmp/styles/{,*/}*.css',
                        '<%= yeoman.app %>/styles/{,*/}*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,txt}',
                        'components/user-interface-library/media/**',
                        'components/font-awesome/font/*'
                    ]
                }]
            }
        },
        bower: {
            all: {
                rjsConfig: '<%= yeoman.app %>/scripts/main.js'
            }
        }
    });

    grunt.renameTask('regarde', 'watch');

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'compass:server',
            'livereload-start',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'compass:dist',
        'useminPrepare',
        'imagemin',
        'htmlmin',
        'cssmin',
        'uglify',
        'copy',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'build'
    ]);
};
