# Modern Front-End Starter Boilerplate

A modern front-end starter boilerplate made to use Gulp 4 for watching and compiling scss, es6 and other assets both for production (minified) as well as for development and live reloading to the browser. This is work in progress.

- [Modern Front-End Starter Boilerplate](#modern-front-end-starter-boilerplate)
  - [Dependencies](#dependencies)
  - [Installation](#installation)
  - [Usage](#usage)
  - [To Do List (Ordered by Priority - Quick Draft)](#to-do-list-ordered-by-priority---quick-draft)
  - [Contributing](#contributing)
  - [License](#license)

## Dependencies

- [Node](https://nodejs.org/) and `NPM`.
- [Yarn](https://yarnpkg.com/getting-started).
- [Gulp](https://gulpjs.com/docs/en/getting-started/quick-start).
- [Webpack](https://webpack.js.org/guides/installation/#global-installation).
- [BrowserSync](https://www.browsersync.io/).

**Note:** Yarn may be replaced and not used in case that's what you want. Yarn's installation times and version tree control for dependencies is cool though. If you decide not to use yarn, simply delete the yarn.lock file and instead of running yarn, run npm.

## Installation

```bash
git clone --depth=1 --branch=master git@github.com:CatinhoCR/modern-frontend-flow.git YourProjectFolder && rm -rf YourProjectFolder/.git
```

This will clone the repository, without it's history so you can kickoff your project clean. It also deletes the git's folder so you can use your own repository for your templating. So you can do these 2 next, for initializing a new git repository and adding your own remote.

```bash
git init && git remote add origin <your-repository-url>
```

After you have all the needed dependencies installed in your machine, simply navigate to the project's root folder in your terminal and run:

```bash
yarn install
```

## Usage

```bash
npm run build:dev
npm run start
```

## To Do List (Ordered by Priority - Quick Draft)

- Decide: Webpack or Gulp/Browserify !
- Front End package management flow, dep injection and management of asset files.
- Vendor scripts and styles workflow, and gulp tasks.
- Observer pattern to mvc flow, for updating model-views.
- Routing module. Make something cool.
- Get html string literals from actual html files instead of in-file functions..
- Yarn tasks(?)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
