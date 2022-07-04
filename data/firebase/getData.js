import { collection, getDocs, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export const getPosts = async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  const allPosts = [];

  querySnapshot.forEach((doc) => {
    allPosts.push(doc.data());
  });

  return allPosts;
};

export const getPost = async (id) => {
  const docRef = doc(db, "id", id);
  const docSnap = await getDoc(docRef);
  let post = {};
  if (docSnap.exists()) {
    post = docSnap.data();
  }
  return post;
};
