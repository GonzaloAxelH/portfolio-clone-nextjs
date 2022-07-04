import { BlogsWrittings } from "../../../data/Blogs";
export default (req, res) => {
  const { query } = req;
  const { id } = query;
  const blog = BlogsWrittings.find((el) => el.id === id);
  res.json(blog);
};
