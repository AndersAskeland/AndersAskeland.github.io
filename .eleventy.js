/* Constants */
const { DateTime } = require("luxon");


/* Config settings */
module.exports = function (eleventyConfig) {

    /* Eleventy will pick up content at build (_tmp is for dev) */
    eleventyConfig.addPassthroughCopy({"./src/css/tailwind.css": "./style.css"});
    eleventyConfig.addPassthroughCopy({ "./src/_tmp/style.css": "./style.css" });

    /* Will watch for changes during dev */
    eleventyConfig.addWatchTarget("./src");
    eleventyConfig.addWatchTarget("./dist");


    /* Set input and output directories */
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }

};
