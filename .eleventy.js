module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/brand-facts.json");

  // Sitemap collection
  eleventyConfig.addCollection("sitemap", function(collectionApi) {
    return collectionApi.getAll();
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};