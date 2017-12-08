const fs = require('fs-extra');
const path = require('path');
const del = require('del');
const md5 = require('md5');
const UglifyJS = require('uglify-es');
const argv = require('minimist')(process.argv.slice(2));

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function buildJS() {
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  let content = '';
  for (let b of buffers) {
    content += b.toString();
  }

  if (argv.minify) {
    content = UglifyJS.minify(content).code;
  }

  await fs.appendFile(appJsDistPath, content);
}

async function buildHTML() {
  const buffer = await fs.readFile(indexHtmlPath);
  let content = buffer.toString();

  content = content.replace(/<script src="[\s\S]+"><\/script>/gi, '<script src="./app.js"></script>');

  await fs.writeFile(indexHtmlDistPath, content);
}

async function build() {
  try {
    await fs.remove(distPath);
    await fs.mkdir(distPath);

    await Promise.all([
      buildJS(),
      buildHTML(),
    ]);

    // TODO md5

    console.log('Build Done');
  }
  catch (err) {
    console.log('Build Error ', err.message);
  }
}

build();
