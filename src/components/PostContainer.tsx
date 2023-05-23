import { useEffect, useState } from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

const PostContainer = () => {
  const [limit, setLimit] = useState(10);
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postAPI.useFetchAllPostsQuery(
    limit
    // { pollingInterval: 1000 }
  );

  useEffect(() => {
    // setTimeout(() => {
    //   setLimit(3);
    // }, 2000);
  }, []);

  return (
    <div>
      <div className="post__list">
        <button onClick={() => refetch()}>REFETCH</button>
        {isLoading && <h1>Идет загрузка...</h1>}
        {error && <h1>Произошла ошибка при загрузке постов!</h1>}
        {posts?.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
