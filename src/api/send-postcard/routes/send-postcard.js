'use strict';

/**
 * send-postcard router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::send-postcard.send-postcard');
