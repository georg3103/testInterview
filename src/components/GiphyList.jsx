import * as React from 'react';
import Skeleton from 'react-loading-skeleton';

import { useSelector } from 'react-redux';

const GiphyList = () => {
  const posts = useSelector((state) => state.data.list);

  console.warn('posts', posts);

  return (
    <>
      <h2>Posts:</h2>
      {posts.map(({title, image}, index) => (
        <div key={`post_${index}`}>
          <h3>{title || <Skeleton />}</h3>
        </div>
      ))}
    </>
  );
};

export default GiphyList;
