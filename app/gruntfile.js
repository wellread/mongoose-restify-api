grunt.initConfig({
  // Task configuration.
    jasmine_node:{
      options:{
        specNameMatcher:"spec",
        extensions: 'js',
        match: '.',
        projectRoot: '.',
        requirejs: false,
        forceExit: true,
      },
      all: ['spec/']
    }
});
