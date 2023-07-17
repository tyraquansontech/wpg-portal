'use strict';

/**
 * group-leader service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::group-leader.group-leader');
