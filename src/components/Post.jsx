import * as React from 'react';

const FakePost = ({title, imageSrc}) => {
  console.warn('imgSource', imageSrc);
  return (
    <div className="post">
      <h3>{title}</h3>
      <img src={imageSrc} alt='img'/>
    </div>
  );
};

export default FakePost;