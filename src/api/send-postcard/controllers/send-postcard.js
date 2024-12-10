'use strict';

/**
 * send-postcard controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::send-postcard.send-postcard');
