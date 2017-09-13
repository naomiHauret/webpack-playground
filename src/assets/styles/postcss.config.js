// Dev config

module.exports = {
  plugins: {
    "postcss-easy-import": { // imports
      prefix: "_",
    },
    stylelint: {}, // linter
    "postcss-google-font": {}, // google fonts
    "postcss-random": {}, // random function
    "postcss-cssnext": { // CSS Next features
      browsers: ["last 2 versions", ">5%"], // Autoprefixer
    },
  },
}

