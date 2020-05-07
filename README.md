# Modern Front-End Starter Boilerplate

A modern front-end starter boilerplate made to use Gulp 4 for watching and compiling scss, es6 and other assets both for production (minified) as well as for development and live reloading to the browser. This is work in progress.

## Dependencies

* You will need [Node](https://nodejs.org/) and `NPM` installed to get this running. 
* Gulp
* Webpack
* BrowserSync
* Scss

## Installation

From project's root folder, in terminal run:
```bash
npm install
```

## Usage

This is made to be run and compiled live on any changes on the `src` folder files and assets. The `build` scripts are only for future reference, but running the project from compiled files directly to your browser (i.e opening the index.html file directly) will not work for now. This is just for development, for now.
To run the live server on this simply run:

```bash
npm run build:dev
npm run start
```

## To Do List (Ordered by Priority - Quick Draft)

* Yarn for FE deps
* Decide: Webpack or Gulp/Browserify !
* Clean up package.json dependencies and remove any unused modules.
* Make actual build for static files serving work.
* Front End package management flow.
* Vendor scripts an styles workflow, and gulp tasks.
* Observer pattern to mvc flow, for updating model-views.
* Routing module. Make something cool.
* Get html string literals from actual html files instead of in-file functions..

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)