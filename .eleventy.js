module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/styles/');
  eleventyConfig.addWatchTarget('./src/styles/');
  eleventyConfig.addPassthroughCopy('./src/assets/');
  eleventyConfig.addWatchTarget('./src/assets/');
  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
