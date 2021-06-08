import path from 'path';

const host = '';
const prefix = 'v1/gifs';

export default {
  searchGiphyPath: () => path.join(host, prefix, 'search'),
};
