module.exports = {
    plugins: ["gatsby-plugin-eslint", "gatsby-plugin-postcss"],
    flags: {
        FAST_DEV: true,
        DEV_SSR: false,
        PARALLEL_SOURCING: true,
    },
}
