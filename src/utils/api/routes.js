import path from 'path';

const host = '';
const prefix = 'v1';

export default {
  searchGiphyPath: () => path.join(host, prefix, 'gifs', 'search'),
};
