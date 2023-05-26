import { useEffect, useState } from 'react';
import { IPost } from '../models/IPost';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

const PostContainer = () => {
  const [limit, setLimit] = useState(100);
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postAPI.useFetchAllPostsQuery(
    limit
    // { pollingInterval: 1000 }
  );
  const [createPost, { error: createError, isLoading: isCreateLoading }] =
    postAPI.useCreatePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();

  useEffect(() => {
    // setTimeout(() => {
    //   setLimit(3);
    // }, 2000);
  }, []);

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost).unwrap();
  };
  const handleRemove = async (post: IPost) => {
    await deletePost(post.id).unwrap();
  };
  const handleUpdate = async (post: IPost) => {
    await updatePost(post).unwrap();
  };

  return (
    <div>
      <div className="post__list">
        {/* <button onClick={() => refetch()}>REFETCH</button> */}
        <button onClick={handleCreate}>Add new post</button>
        {isLoading && <h1>Идет загрузка...</h1>}
        {error && <h1>Произошла ошибка при загрузке постов!</h1>}
        {posts?.map((post) => (
          <PostItem
            post={post}
            key={post.id}
            remove={handleRemove}
            update={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
