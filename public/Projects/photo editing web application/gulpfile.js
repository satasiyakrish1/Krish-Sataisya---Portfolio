// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var less   = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var path = require('path');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function () {
  gulp.src('./Assets/less/main.less')
  	//.pipe(sourcemaps.init())
    .pipe(less())
    
   	.pipe(autoprefixer({
         browsers: ['last 2 versions'],
         cascade: false,
         remove: false,
    }))
    //.pipe(sourcemaps.write())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./Assets/css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('integrate-less', function () {
    gulp.src('./Assets/less/integrate.less')
        .pipe(less())
        .on('error', function (err) {
            this.emit('end');
        })
        .pipe(autoprefixer({
             browsers: ['last 2 versions'],
             cascade: false,
             remove: false
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./Assets/css'))
        .pipe(browserSync.reload({stream:true}));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src([
        'Assets/js/editor/resources/colors.js',
        'Assets/js/editor/resources/gradients.js',
    	'Assets/js/vendor/jquery.js',
        'Assets/js/vendor/jquery-ui.js',
        'Assets/js/vendor/file-saver.js',
        'Assets/js/vendor/pagination.js',
        'Assets/js/vendor/spectrum.js',
        'Assets/js/vendor/hammer.js',
        'Assets/js/vendor/scrollbar.js',
    	'Assets/js/vendor/angular.min.js',
        'Assets/js/vendor/angular-animate.js',
        'Assets/js/vendor/angular-aria.js',
        'Assets/js/vendor/angular-material.js',
        'Assets/js/vendor/angular-sortable.js',
    	'Assets/js/vendor/fabric.js',
    	'Assets/js/editor/App.js',
        'Assets/js/editor/LocalStorage.js',
        'Assets/js/editor/Settings.js',
        'Assets/js/editor/Keybinds.js',
        'Assets/js/editor/Canvas.js',
        'Assets/js/editor/crop/cropper.js',
        'Assets/js/editor/crop/cropzone.js',
        'Assets/js/editor/crop/cropController.js',
        'Assets/js/editor/basics/RotateController.js',
        'Assets/js/editor/basics/CanvasBackgroundController.js',
        'Assets/js/editor/basics/ResizeController.js',
        'Assets/js/editor/basics/RoundedCornersController.js',
        'Assets/js/editor/zoomController.js',
        'Assets/js/editor/TopPanelController.js',
        'Assets/js/editor/directives/Tabs.js',
        'Assets/js/editor/directives/PrettyScrollbar.js',
        'Assets/js/editor/directives/ColorPicker.js',
        'Assets/js/editor/directives/FileUploader.js',
        'Assets/js/editor/directives/TogglePanelVisibility.js',
        'Assets/js/editor/directives/ToggleSidebar.js',
        'Assets/js/editor/text/Text.js',
        'Assets/js/editor/text/TextController.js',
        'Assets/js/editor/text/TextAlignButtons.js',
        'Assets/js/editor/text/TextDecorationButtons.js',
        'Assets/js/editor/text/Fonts.js',
        'Assets/js/editor/drawing/Drawing.js',
        'Assets/js/editor/drawing/DrawingController.js',
        'Assets/js/editor/drawing/RenderBrushesDirective.js',
        'Assets/js/editor/History.js',
        'Assets/js/editor/Saver.js',
        'Assets/js/editor/filters/FiltersController.js',
        'Assets/js/editor/filters/Filters.js',
        'Assets/js/editor/shapes/SimpleShapesController.js',
        'Assets/js/editor/shapes/StickersController.js',
        'Assets/js/editor/shapes/StickersCategories.js',
        'Assets/js/editor/shapes/SimpleShapes.js',
        'Assets/js/editor/shapes/Polygon.js',
        'Assets/js/editor/objects/ObjectsPanelController.js',
	])
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('Assets/js')) 
    .pipe(browserSync.reload({stream:true}));
});

// Watch Files For Changes
gulp.task('watch', function() {
	browserSync({
        proxy: "pixie.dev"
    });

    gulp.watch('Assets/js/**/*.js', ['scripts']);
    gulp.watch('Assets/less/**/*.less', ['less']);
    gulp.watch('Assets/less/**/integrate.less', ['integrate-less']);
});

// Default Task
gulp.task('default', ['less', 'scripts', 'watch']);