const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/styles/');
  eleventyConfig.addWatchTarget('./src/styles/');

  eleventyConfig.addPassthroughCopy('./src/assets/');
  eleventyConfig.addWatchTarget('./src/assets/');

  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter('postDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
