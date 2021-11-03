/* Constants */
const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");

/* Image package */
/* async function imageShortcode(src, alt, style) {
    if (alt === undefined) {
        // You bet we throw an error on missing alt (alt="" works okay)
        throw new Error(`Missing \`alt\` on myImage from: ${src}`);
    }

    let metadata = await Image(src, {
        widths: [300, 600],
        formats: ["avif", "jpeg"],
        urlPath: "/images/",
        outputDir: "dist/images/",
    });

    let data = metadata.jpeg[metadata.jpeg.length - 1];
    return `<img src="${data.url}" class="${style}" alt="${alt}" loading="lazy" decoding="async">`;
} */

async function imageShortcode(src, alt, style, sizes) {
    let metadata = await Image(src, {
        widths: [300, 600],
        formats: ["avif", "jpeg"],
        urlPath: "/images/",
        outputDir: "dist/images/",
    });
  
    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
      class: style,
    };
  
    // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes);
  }

/* Config settings */
module.exports = function (eleventyConfig) {
    /* Eleventy will pick up content at build (_tmp is for dev) */
    eleventyConfig.addPassthroughCopy({ "./src/css/tailwind.css": "./style.css" });
    eleventyConfig.addPassthroughCopy({ "./src/_tmp/style.css": "./style.css" });
    /*     eleventyConfig.addPassthroughCopy({ "./src/images": "./images/" });
     */
    /* Will watch for changes during dev */
    eleventyConfig.addWatchTarget("./src");
    eleventyConfig.addWatchTarget("./dist");

    /* Image plugin */
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

    /* Set input and output directories */
    return {
        dir: {
            input: "src",
            output: "dist",
        },
    };
};
