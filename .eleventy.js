/* Constants */
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, classes) {
    /* Set format - Macos does not support avif */
    let format = ["avif", "webp", "jpeg"];

    /* Write metadata */
    let metadata = await Image(src, {
        widths: [300, 600],
        formats: format,
        urlPath: "/images/",
        outputDir: "_site/images/",
    });

    /* Set image attributes */
    let image_attributes = {
        sizes: "(min-width: 10em) 20vw, 10vw",
        alt,
        loading: "lazy",
        decoding: "async",
        class: classes,
    };

    // Return
    return Image.generateHTML(metadata, image_attributes);
}

async function image_image(src, alt, classes) {
    /* Set format - Macos does not support avif */
    let format = ["avif", "webp", "jpeg"];

    /* Add src */
    var src_new = ""
    var src_new = src_new.concat("src", src)

    /* Write metadata */
    let metadata = await Image(src_new, {
        widths: [300, 600],
        formats: format,
        urlPath: "/images/",
        outputDir: "_site/images/",
    });

    /* Set image attributes */
    let image_attributes = {
        sizes: "(min-width: 10em) 20vw, 10vw",
        alt,
        loading: "lazy",
        decoding: "async",
        class: classes,
    };

    // Return
    return Image.generateHTML(metadata, image_attributes);
}


/* Config settings */
module.exports = function (eleventyConfig) {
    /*--------- General --------*/
    // Plugins

    // Pass trough files (You dont need to write entire path)
    eleventyConfig.addPassthroughCopy({ "./src/css/tailwind.css": "./style.css" });
    eleventyConfig.addPassthroughCopy({ "./src/images": "./images/" });

    // Will watch for changes during dev
    eleventyConfig.addWatchTarget("./src");

    /*--------- Collections --------*/

    /*--------- Filters --------*/

    /*--------- Shortcodes --------*/
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    eleventyConfig.addNunjucksAsyncShortcode("image2", image_image);

    /*--------- Settings --------*/
    return {
        dir: {
            input: "src",
            output: "_site",
        },
        htmlTemplateEngine: "njk",
    };
};
