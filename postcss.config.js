module.exports = {
    plugins: {
        "postcss-easy-import": {
            prefix: "_"
        },
        "postcss-google-font": {},
        "postcss-cssnext": {
            browsers: ["last 2 versions", ">5%"]
        },
        "postcss-csso": {}
    }
}