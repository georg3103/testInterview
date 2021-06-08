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
    dispatch(actions.setStatusPending())
    try {
      const { data } = await getGiphyData(value);
      console.error('data', data);
      const cleanedData = data.map(({ title, id, images: { fixed_height: { url } }}) => ({ title, id, url }));
      dispatch(actions.setStatusSuccess());
      dispatch(actions.setData(cleanedData));
    } catch (err) {
      dispatch(actions.setStatusFailed());
      console.error(`error -> ${err}`);
    }
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
