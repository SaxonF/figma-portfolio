const axios = require('axios');

const FigmaClient = (opts) => {
  const headers = {
    'X-Figma-Token': opts.personalAccessToken
  };

  const client = axios.create({
    baseURL: `https://api.figma.com/v1/`,
    headers
  });

  return {
    file: (fileId, params = {}) => client.get(`files/${fileId}`, {
      params
    }),

    fileImages: (fileId, params) =>
      client.get(`images/${fileId}`, {
        params: {
          ...params,
          ids: params.ids.join(',')
        }
      }),

    comments: fileId => client.get(`files/${fileId}/comments`),
  };
};

module.exports = FigmaClient;
