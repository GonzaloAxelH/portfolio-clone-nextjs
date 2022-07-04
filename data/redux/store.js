import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const ACTION = {
  UPDATE_REACTIONS: "UPDATE_REACTIONS",
  LOAD_POSTS: "LOAD_POSTS",
};

const initialState = {
  posts: [],
};

function postReducer(state = initialState.posts, action) {
  switch (action.type) {
    case ACTION.UPDATE_REACTIONS:
      return state;
    case ACTION.LOAD_POSTS:
      return action.payload;
    default:
      return state;
  }
}
export default createStore(
  combineReducers({ posts: postReducer }),
  applyMiddleware(thunk)
);
