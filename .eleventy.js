/* Constants */
const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");

/* Image package */
async function imageShortcode(src, alt, sizes) {
    let metadata = await Image(src, {
        widths: [300, 600],
        formats: ["avif", "jpeg"],
    });

    let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
    };

    // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes);
}

/* Config settings */
module.exports = function (eleventyConfig) {
    /* Add shortcodes */
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    eleventyConfig.addLiquidShortcode("image", imageShortcode);
    eleventyConfig.addJavaScriptFunction("image", imageShortcode);

    /* Eleventy will pick up content at build (_tmp is for dev) */
    eleventyConfig.addPassthroughCopy({ "./src/css/tailwind.css": "./style.css" });
    eleventyConfig.addPassthroughCopy({ "./src/_tmp/style.css": "./style.css" });

    /* Will watch for changes during dev */
    eleventyConfig.addWatchTarget("./src");
    eleventyConfig.addWatchTarget("./dist");

    /* Set input and output directories */
    return {
        dir: {
            input: "src",
            output: "dist",
        },
    };
};
