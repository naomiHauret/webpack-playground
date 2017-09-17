> :bulb: *This repo is still **in progress**. It can/will be greatly improved* :+1:

# Install

Clone this repo. Go to the repo directory. Once you're in :

```
npm install
npm start
```

Then, hit `localhost:8080/dist` in your browser.

For more information about available scripts (build for production, watch mode for development...) please read `package.json`.

# Why/What for

This repo is my personal **Webpack playground**. I'm still learning how to use the thing and how to integrate it in an app.

# What does it do

## Prod and dev workflow

Prod workflow includes minification through UglifyJS and CSSO. Development workflow features sourcemaps.

Both workflows use different `postcss.config.js` and `webpack.config.js` (`webpack.dev.config.js` and `src/assets/styles/postcss.config.js` for development, `webpack.prod.config.js` and `postcss.config.js` for production)

## Watch mode

Watch mode with *Hot Module Replacement* in both prod and dev environment. It includes CSS and Pug hot reload too :sparkles:

## Consistency

*Consistency and format* in code in handled with [ESLint](https://eslint.org/) (for Javascript) and [Stylelint](https://stylelint.io/) (for CSS). Rules for ESLint are based on Airbnb rules and are located in `.eslintrc.json`. For Stylelint, they are in `.stylelintrc.json`.
`.js` and `.css` will be **automatically linted** before every `git commit` and `git push`.

> :warning: *Linter errors will stop and abort your commit or push. This is due to **[Husky](https://github.com/typicode/husky)** git hooks (see* `precommit` *and* `prepush` *in* `package.json`). If **you're pushing right after a commit** *, you can run* `git push --no-verify` *so that linters won't be launched again.*

## Pug (Jade)

> :bulb: *[Pug](https://pugjs.org) (formerly known as Jade) is a template engine based on indentation.*

Page default template can be changed in `src/index.template.pug`.

## PostCSS

> :bulb: *[PostCSS](https://postcss.org) is not a CSS preprocessor like Sass or Stylus, but a tool to transform CSS with plugin written in Javascript.*

Two PostCSS config: one for development, another one for production (although both are using the same plugins at the moment).
Plugins: [easy-import](https://github.com/trysound/postcss-easy-import), [cssnext](http://cssnext.io/) (includes [autoprefixer](https://github.com/postcss/autoprefixer)), [google-font](https://github.com/yordis/postcss-google-font), [random](https://github.com/git-slim/postcss-random).
> *Plugins list can be updated **for production** in* `postcss.config.js` *and* `src/assets/styles/postcss.config.js` **for development**.
> *For more PostCSS plugins, you can check [this website](https://postcss.parts)*

## ES6

Javascript files can be written in ES6 since they will be transpiled as ES5 thanks to Babel.
