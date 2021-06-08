import * as React from 'react';
import Skeleton from 'react-loading-skeleton';

const FakePost = () => {
  return (
    <div className="fakePost">
      <h2>
        <Skeleton delay={1}/>
      </h2>
      <Skeleton height={200} width={357}/>
    </div>
  );
};

export default FakePost;