/**
 * @typedef {Object} BusinessTrait
 * @property {string} title
 * @property {string} text
 * @property {string} image
 */

/**
 * @typedef {Object} Review
 * @property {string} avatar
 * @property {string} name
 * @property {string} text
 */

/**
 * @typedef {Object} Experience
 * @property {string} title
 * @property {string} text
 * @property {string} image
 */

/**
 * @typedef {Object} Location
 * @property {number} latitude
 * @property {number} longitude
 */

/**
 * @typedef {Object} Footer
 * @property {string} email
 * @property {string} phone
 * @property {Location} location
 */

/**
 * @typedef {Object} Hero
 * @property {boolean} enabled
 * @property {string} title
 * @property {string} subtitle
 * @property {Object} background
 * @property {string} background.fallback
 * @property {string} background.video
 */

/**
 * @typedef {Object} WhoWeAre
 * @property {boolean} enabled
 * @property {string} title
 * @property {string} subtitle
 * @property {BusinessTrait[]} businessTraits
 */

/**
 * @typedef {Object} Testimonials
 * @property {boolean} enabled
 * @property {string} title
 * @property {string} subtitle
 * @property {Review[]} reviews
 */

/**
 * @typedef {Object} Experiences
 * @property {boolean} enabled
 * @property {Experience[]} items
 */

/**
 * @typedef {Object} Sections
 * @property {Hero} hero
 * @property {WhoWeAre} whoWeAre
 * @property {Testimonials} testimonials
 * @property {Experiences} experiences
 */

/**
 * @typedef {Object} Logo
 * @property {string} src
 * @property {string} alt
 */

/**
 * @typedef {Object} FeaturesDoc
 * @property {Sections} sections
 * @property {Footer} footer
 */

/**
 * @typedef {Object} Features
 * @property {FeaturesDoc} _doc
 * @property {Logo} logo
 */

const Fetch = require('@11ty/eleventy-fetch');
require('dotenv').config();
const { writeThemeToEnv } = require('./helpers');

/**
 * @returns {Promise<Features>}
 * @throws {Error}
 */
module.exports = async function() {
  const CONFIGURATION_ENDPOINT = process.env.CONFIGURATION_ENDPOINT;

  if (!CONFIGURATION_ENDPOINT) {
    throw new Error('CONFIGURATION_ENDPOINT environment variable is not set');
  }

  try {
    /** @type {Features} */
    const data = await Fetch(CONFIGURATION_ENDPOINT, {
      duration: "1d",
      type: "json"
    });
    
    writeThemeToEnv(data.theme.colors);
    
    console.log('Fetched data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}; 