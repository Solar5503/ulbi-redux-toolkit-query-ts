import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

const PostContainer2 = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(100);
  return (
    <div>
      <div className="post__list">
        {isLoading && <h1>Идет загрузка...</h1>}
        {error && <h1>Произошла ошибка при загрузке постов!</h1>}
        {/* {posts?.map((post) => (
          <PostItem post={post} key={post.id} />
        ))} */}
      </div>
    </div>
  );
};

export default PostContainer2;
