let mix = require('laravel-mix');


//-----------------------------------------------------//
const themeFolder = "laptop";

//-----------------------------------------------------//

mix
	.sass(`projects/${themeFolder}/src/scss/main.scss`, `template/css`)
	// .sass(`projects/${themeFolder}/src/scss/doc.scss`, `documentation/css/main.css`)

	//-----------------------------------------------------//
	.js(`projects/${themeFolder}/src/javascript/app.js`, 'template/js')
	// .js(`projects/${themeFolder}/src/javascript/doc.js`, 'documentation/js/app.js')


	//-----------------------------------------------------//
	.sourceMaps(true, "source-map")
	//-----------------------------------------------------//
	.options({
		// extractVueStyles: false,
		processCssUrls: true,
		// terser: {},
		// purifyCss: false,
		// //purifyCss: {},
		// postCss: [require('autoprefixer')],
		// autoprefixer: { remove: false },
		clearConsole: false,
		// cssNano: { calc: false }
		// cssNano: {
		// 	discardComments: { removeAll: true },
		// }
	})
	//-----------------------------------------------------//
	.setPublicPath(`projects/${themeFolder}`)
// .disableNotifications()
// .version()

