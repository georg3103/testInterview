import * as React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

import FakePost from './FakePost';
import Post from './Post';

import { STATUSES } from '../utils/constants'

const LIMIT = 9;

const renderFakePosts = (n) => {
  const iter = (n, acc = []) => {
    if (n === 1) {
      return acc;
    }
    return iter(n - 1, [...acc, (
      <div key={`fakepost_${n}`}>
        <FakePost />
      </div>
    )])
  }
  const fakePostArr = iter(n, []);
  console.error('fakePostArr', fakePostArr)
  return fakePostArr.map(item => item);
};

const GiphyList = () => {
  const status = useSelector((state) => state.data.status);
  const posts = useSelector((state) => state.data.list);

  const history = useHistory()

  const renderPosts = (posts) => {
    return posts.map(({title, id, url }) => (
      <div key={`post_${id}`}>
        <Post
          title={title}
          imageSrc={url}
          onClick={() => {
            history.push(`/post/${id}`)
          }}
        />
      </div>
    ));
  };

  const renderMapper = {
    [STATUSES.pending]: renderFakePosts(LIMIT),
    [STATUSES.success]: renderPosts(posts)
  }

  return (
    <>
      <h2>Posts:</h2>
      {renderMapper[status]}
    </>
  );
};

export default GiphyList;
