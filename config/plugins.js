module.exports = {
  upload: {
    config: {
      provider: 'strapi-provider-upload-local',
      providerOptions: {
        sizeLimit: 250 * 1024 * 1024, // 256mb em bytes
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
}
