module.exports = (env) => ({
  // ... outras configurações do servidor
  settings: {
    cors: {
      enabled: true,
      origin: ['*'], // Permite todas as origens. Em produção, substitua pelos domínios permitidos.
      headers: [
        'Content-Type',
        'Authorization',
        'X-Frame-Options',
        'X-Requested-With',
        'Accept',
        'Origin',
        'Access-Control-Allow-Origin',
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
    },
  },
});
