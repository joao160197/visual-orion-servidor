module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    // Define os cabeçalhos CORS
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, Accept');
    ctx.set('Access-Control-Allow-Credentials', true);
    
    // Se for uma requisição OPTIONS, responde imediatamente
    if (ctx.request.method === 'OPTIONS') {
      ctx.status = 200;
      return;
    }
    
    // Continua para o próximo middleware
    await next();
  };
};
