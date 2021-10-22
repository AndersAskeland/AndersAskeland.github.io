const axios = require("axios");

module.exports = async () => {
    /* Get cat pick */
    const result = await axios.get("https://aws.random.cat/meow")

    /* Return cat pick / API specific */
    return result.data.file;
};