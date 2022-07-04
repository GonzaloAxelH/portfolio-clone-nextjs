import { doc, setDoc } from "firebase/firestore";
import { BlogsWrittings } from "../Blogs";
import { db } from "./firebase";

export const updatePost = async (id, post) => {
  const res = await db.collection("post").doc(id).set(post);
};

export const savePosts = async () => {
  BlogsWrittings.forEach(
    async ({
      id,
      title,
      type,
      category,
      date,
      autor,
      duration,
      link,
      description,
      imgUrl,
      reactions,
    }) => {
      const newPost = {
        id,
        title,
        type,
        category,
        date,
        autor,
        duration,
        link,
        description,
        imgUrl,
        reactions,
      };
      await setDoc(doc(db, "posts", id), newPost);
    }
  );
  //await deleteDoc(doc(db, "posts"));
};
