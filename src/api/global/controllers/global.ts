/**
 * global controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::global.global', ({ strapi }) =>  ({
  async findSolutions(ctx) {
    try {
      const { locale } = ctx.query;
      const data = await strapi.service('api::global.global').getSolutions(locale);
      
      ctx.body = { data };
    } catch (err) {
      ctx.body = err;
    }
  }
}));
