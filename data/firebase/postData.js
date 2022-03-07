import { collection, getDocs, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export const updatePost = async (id, post) => {
  const res = await db.collection("post").doc(id).set(post);
};
