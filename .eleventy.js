module.exports = function(eleventyConfig) {
  // Copy assets directly to output
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Watch for changes in assets
  eleventyConfig.addWatchTarget("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
}; 