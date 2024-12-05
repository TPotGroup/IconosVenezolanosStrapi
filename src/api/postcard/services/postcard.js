'use strict';

/**
 * postcard service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::postcard.postcard');
