module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'global::cors',
    config: {},
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
