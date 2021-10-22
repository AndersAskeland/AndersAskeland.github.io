/* Constants */
const { DateTime } = require("luxon");


/* Config settings */
module.exports = function (eleventyConfig) {

    /* Will watch for changes during dev */
    eleventyConfig.addWatchTarget("./src");

    /* Eleventy will pick up content at build */
    eleventyConfig.addPassthroughCopy({"./src/css/tailwind.css": "./style.css"});
    eleventyConfig.addPassthroughCopy({ "./src/_tmp/style.css": "./style.css" });

    /* Dont know */
    eleventyConfig.addShortcode("version", function () {
        return now;
    });
    
    /* Set output location */
    return {
        dir: { input: "src", output: "dist" },
    };
};
