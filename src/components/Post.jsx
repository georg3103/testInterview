import * as React from 'react';

const Post = ({ title, imageSrc, onClick }) => {
  const divStyle = {
    cursor: 'pointer',
    color: 'blue',
    'text-decoration': 'underline'
  };

  return (
    <div className="post">
      <div
        style={divStyle}
        onClick={onClick}
      >{title}</div>
      {<img src={imageSrc} alt='img'/>}
    </div>
  );
};

export default Post;