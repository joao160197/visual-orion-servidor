'use strict';

/**
 * global controller
 */

module.exports = {
  async find(ctx) {
    try {
      // Use o serviço da API 'global' para buscar os dados.
      // O nome do serviço para uma API chamada 'global' é 'api::global.global'.
      const entity = await strapi.service('api::global.global').find(ctx.query);

      if (!entity) {
        return ctx.notFound('Global data not found.');
      }

      // Retorna os dados encontrados.
      // O Strapi cuidará da serialização para JSON.
      return entity;
    } catch (err) {
      // Em caso de erro, retorna uma resposta de erro 500.
      ctx.throw(500, err);
    }
  },
};
