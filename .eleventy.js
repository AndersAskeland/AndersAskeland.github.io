/* Settings for evently */
module.exports = function (eleventyConfig) {

    /* Define location of CSS files */
    eleventyConfig.addWatchTarget("./tailwind.config.js");
    eleventyConfig.addWatchTarget("./src/styles/tailwind.css");

    /* Pass css as style.css */
    eleventyConfig.addPassthroughCopy({
        "./src/styles/tailwind.css": "./style.css",
    });

    /* Dont know */
    eleventyConfig.addShortcode("version", function () {
        return now;
    });
    
    /* Set output location */
    return {
        dir: { input: "src", output: "dist" },
    };
};
