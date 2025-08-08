module.exports = {
  routes: [

    {
      method: 'GET',
      path: '/global',
      handler: 'global.find',
      config: {
        auth: false, // Permite acesso público
        policies: [],
        middlewares: [],
      },
    },
  ],
};
