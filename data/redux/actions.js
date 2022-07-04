import { getPost, getPosts } from "../firebase/getData";
import { updatePost } from "../firebase/postData";
import { ACTION } from "../redux/store";

export const loadPosts = () => {
  return async (dispatch) => {
    const allPosts = await getPosts();
    dispatch({ type: ACTION.LOAD_POSTS, payload: allPosts });
  };
};

export const updatePostReactions = async (id, post) => {
  return async (dispatch) => {
    await updatePost(id, post);
    dispatch(loadPosts());
  };
};
