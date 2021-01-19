import gulp, { series } from 'gulp'

//HTML:
import htmlmin from 'gulp-htmlmin'//Minificar o código .html

//CSS:
import postcss from 'gulp-postcss'//Ecossistema de plugins e ferramentas
import cssnano from 'cssnano'//Minificar e compactar o CSS
import autoprefixer from 'autoprefixer'//Adicionar prefixos de fornecedores (Browsers)

//JavaScript:
import babel from 'gulp-babel'// Transpilar o código .js para versões anteriores ao ES6
import terser from 'gulp-terser'// Minificar o código .js

//Comuns:
import concat from 'gulp-concat'//Concatena vários arquivos .js em um único arquivo

//Limpeza CSS
import clean from 'gulp-purgecss'

//Otimização de imagens:

import imgemin from 'gulp-imagemin'

//Variáveis e Constantes:

const cssPlugins = [
    cssnano(),
    autoprefixer()
]

gulp.task('htmlmin', () =>{
    return gulp
    .src('./src/*.html')
    .pipe(htmlmin({
        collapseWhitespace:true,
        removeComments: true 
    }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('styles', () =>{
    return gulp
    .src('./src/css/*.css')
    .pipe(concat('styles.min.css'))
    .pipe(postcss(cssPlugins))
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('babel', () =>{
    return gulp
    .src('./src/js/*.js')
    .pipe(concat('scripts.min.js'))
    .pipe(babel())
    .pipe(terser())
    .pipe(gulp.dest('./dist/js'))
})

gulp.task('clean', () =>{
    return gulp
    .src('./dist/css/styles.min.css')
    .pipe(clean({
        content:['./dist/*.html']
    }))
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('imgemin', () =>{
    return gulp
        .src('./src/img/*')
        .pipe(imgemin())
        .pipe(gulp.dest('./dist/img'))
})

gulp.task('default', ()=>{
    gulp.watch('./src/*.html', gulp.series('htmlmin'))
    gulp.watch('./src/css/*.css', gulp.series('styles'))
    gulp.watch('./src/js/*.js', gulp.series('babel'))
    
})