/* Constants */
const { DateTime } = require("luxon");


/* Settings for evently */
module.exports = function (eleventyConfig) {

    /* Define location of CSS files */
    eleventyConfig.addWatchTarget("./tailwind.config.js");
    eleventyConfig.addWatchTarget("./src/css/tailwind.css");
    eleventyConfig.addWatchTarget("./src/_tmp/style.css");

    /* Pass css as style.css */
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
