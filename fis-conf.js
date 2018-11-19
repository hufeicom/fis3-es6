fis.set('project.ignore', [
	'output/**',
	'node_modules/**',
	'src/**',
	'.git/**',
	'.vscode/**'
	,'package.json'
]);
fis
.match('::package', {
	postpackager: fis.plugin('loader', {
			resourceType: 'commonJs',
			allInOne: {

				sourceMap: true
			},
			resourceMap: 'resourcemap.js', 
			useInlineMap: false // 资源映射表内嵌
	})
})	
.match('/([^mod\.js]*.js)', {
		isMod: true,
		moduleId: 'common:$1',
		parser: fis.plugin('okaybabel', {
			"presets": ["env"],
			"plugins": ["transform-runtime"]
		}),
		rExt: '.js' // 代码编译产出时，后缀改成 .js
	})

	.match('/src/lib/(**.js)', {
		parser: fis.plugin('okayrequire')
	})
	.match('/src/lib/(**.js)', {
		isMod: true,
		moduleId: '$1'
	})
	.match('/src/lib/babel-runtime/node_modules/(**.js)', {
		isMod: true,
		moduleId: '$1'
	})
	.match('/mod.js', {
		isMod: false,
		packOrder: -100
	})
	.match('/fis-conf.js', {
		release: false
	})
	.hook('commonjs', {
		path: {
			'$': '/mod.js'
		}
	});;