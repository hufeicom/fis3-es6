
fis.set('project.ignore', [
    'output/**',
    'node_modules/**',
    'src/**',
    '.git/**',
    '.vscode/**'
    , 'package.json'
    , 'fis-conf.js'
]);

// fis.set('project.fileType.text', 'es');
// fis.match('server/**.es', {
//     parser: fis.plugin('babel-6.x', {
//         // presets: [
//         // 注意一旦这里在这里添加了 presets 配置，则会覆盖默认加载的 preset-2015 等插件，因此需要自行添加所有需要使用的 presets
//         // ]
//     }),
//     rExt: 'js'
// });

fis
    .match('**.js', {
        isMod: true,
        // parser: fis.plugin('babel-plugin', 
        parser: fis.plugin('babel-6.x', 
        {
            // "presets" : [
            //     [ "env", {
            //         targets: {
            //           browsers: [
            //             '>1%',
            //             'not ie < 9',
            //           ],
            //         },
            //         modules: false,
            //         useBuiltIns: true,
            //         debug: true,
            //       }]
            // ],
            // "plugins": [["transform-regenerator", {
            //     "asyncGenerators": true,
            //     "generators": true,
            //     "async": true
            //   }]]
        }
        )
    })
    .match('/mod.js', {
        isMod: false,
        parser: null
    })
    .match('/fis-conf.js', {
        release: false
    })
    .hook('commonjs');