const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model('Blog', blogSchema);

app.use(express.json());


app.get('/api/blogs', async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

app.get('/api/blogs/:id', async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.json(blog);
});

app.post('/api/blogs', async (req, res) => {
  const blog = new Blog(req.body);
  await blog.save();
  res.json(blog);
});

app.put('/api/blogs/:id', async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(blog);
});

app.delete('/api/blogs/:id', async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
