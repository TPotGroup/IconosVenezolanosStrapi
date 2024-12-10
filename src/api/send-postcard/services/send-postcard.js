'use strict';

/**
 * send-postcard service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::send-postcard.send-postcard');
