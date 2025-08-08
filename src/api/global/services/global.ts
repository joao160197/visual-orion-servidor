/**
 * global service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::global.global', ({ strapi }) =>  ({
  async getSolutions(locale = 'pt') {
    const solutionTypes = [
      { api: 'api::automative-page.automative-page', icon: '🚗', slug: 'automotivo' },
      { api: 'api::logistico.logistico', icon: '🚚', slug: 'logistico' },
      { api: 'api::tratamento-agua.tratamento-agua', icon: '💧', slug: 'tratamento-agua' },
      { api: 'api::food.food', icon: '🍽️', slug: 'food' },
    ];

    const solutions = await Promise.all(
      solutionTypes.map(async (type) => {
        try {
          const entry: any = await strapi.entityService.findMany(type.api as any, {
            fields: ['title'],
            locale: locale,
            limit: 1
          });

                    const attributes = Array.isArray(entry) && entry.length > 0 ? entry[0] : null;

          if (attributes) {
            return {
              id: attributes.id,
              attributes: {
                title: attributes.title,
                slug: type.slug,
                icon: type.icon,
              },
            };
          }
          return null;
        } catch (error) {
          strapi.log.error(`Error fetching ${type.api}:`, error);
          return null;
        }
      })
    );

    return solutions.filter(s => s !== null);
  },
}));
