import * as React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../store/store';

import axiosGiphyInstance from '../utils/api'
import routes from '../utils/api/routes'

import debounce from 'lodash/debounce';

const LIMIT = 9;

const getGiphyData = (searchStr) => axiosGiphyInstance.get(routes.searchGiphyPath(), {
  params: {
    limit: LIMIT,
    q: searchStr
  }
 });

const GiphyList = () => {
  const dispatch = useDispatch();

  const onChange = async ({ target : { value } }) => {
    const { data } = await getGiphyData(value);
    const cleanedData = data.map(({title, images}) => ({ title, images }));
    dispatch(actions.setData(cleanedData))
  }

  const debouncedOnChange = debounce(onChange, 500);

  return (
    <>
      <h2>input:</h2>
      <input
        placeholder="search"
        onChange={debouncedOnChange}
      />
    </>
  );
};

export default GiphyList;
