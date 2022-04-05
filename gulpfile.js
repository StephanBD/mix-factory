const { src, dest, watch, parallel } = require("gulp");
var browserSync = require("browser-sync").create();

// var browserSync = require("browser-sync").create();

// pug --------------------
const pugPipe = require("gulp-pug");

const themeFolder = "laptop";
const projectPath = `projects/${themeFolder}/`;



//-------------------pug----------------------------------//
function pugDescription() {
	return src(projectPath + "src/description.pug")
		.pipe(pugPipe())
		.pipe(dest(projectPath));
}
function pugDoc() {
	return src(projectPath + "src/pug_template/!(_)*.pug")
		.pipe(pugPipe())
		.pipe(dest(projectPath + "template"));
}
function pugTemplate() {
	return src(projectPath + "src/pug_doc/!(_)*.pug")
		.pipe(pugPipe())
		.pipe(dest(projectPath + "documentation"));
}

// watch ---------------------
function watchpug() {
	watch(projectPath + "src/pug_template/*.pug", pugDoc);
	watch(projectPath + "src/pug_doc/*.pug", pugTemplate);
	watch(projectPath + "src/pug_partials/*.pug", parallel(pugDoc, pugTemplate));
}

// export ----------------------------------------------//
function watching() {
	browserSync.init({
		notify: false,
		open: true,
		server: projectPath,
		baseDir: "./description.html"
	});
	// --------
	watch(projectPath + "src/**/*.pug", parallel(pugDoc, pugTemplate));
	watch([projectPath + "template/**/*", `${projectPath}documentation/**/*`])
		.on("change", browserSync.reload);
}

// export --------------------------------------------//
exports.pug = pugDescription;
// exports.default = pug
exports.default = parallel(pugDoc, pugTemplate)
exports.watch = watchpug
exports.watching = watching
