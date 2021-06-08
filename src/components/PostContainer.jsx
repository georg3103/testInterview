import * as React from 'react';

import axiosGiphyInstance from '../utils/api';
import routes from '../utils/api/routes';

const getGiphyData = (id) => axiosGiphyInstance.get(routes.getGiphyById(id));

const PostContainer = ({ id }) => {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    try {
      getGiphyData(id)
        .then(({ data: { title, images: { fixed_height: { url } } } }) => {
          setPost({ title, url })
        })
    } catch (err) {
      console.error(`error -> ${err}`);
    }
  })

  return (
    <>
      <h2>Post:</h2>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <img src={post.url} alt="img"/>
        </div>
      )}
    </>
  );
};

export default PostContainer;