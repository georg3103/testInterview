import axios from 'axios';

const baseURL = 'https://api.giphy.com/';

const APIKEY = 'A8VstJ0NYsnkcLdcDLCEozTPxla7scxk';

const axiosGiphyInstance = axios.create({
  baseURL,
  timeout: 30000,
  params: {
    api_key: APIKEY,
  }
});

axiosGiphyInstance.interceptors.response.use(
  (response) => {
    if ('data' in response) {
      return response.data;
    }

    return response;
  },
  (error) => {
    console.error('Interceptor error', error, error.message);

    if (error.response?.data) {
      return Promise.reject(error.response.data);
    }

    if (error?.message?.includes('timeout')) {
      return Promise.reject(new Error('The request timed out. Try to repeat the operation.'));
    }

    if (!!error.isAxiosError && !error.response) {
      return Promise.reject(new Error('No internet connection'));
    }

    return Promise.reject(error);
  }
);

export default axiosGiphyInstance;